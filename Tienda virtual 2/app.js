require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const { initDb, all, get, run } = require('./db');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ─── Productos ───────────────────────────────────────────────────────────────

// GET /products
app.get('/products', (req, res) => {
  try {
    const products = all('SELECT * FROM products');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos', detail: err.message });
  }
});

// GET /products/:id
app.get('/products/:id', (req, res) => {
  try {
    const product = get('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el producto', detail: err.message });
  }
});


// ─── Carrito ─────────────────────────────────────────────────────────────────

// GET /cart
app.get('/cart', (req, res) => {
  try {
    const items = all(`
      SELECT
        ci.id,
        ci.product_id,
        ci.quantity,
        p.name,
        p.price,
        p.image_url,
        (ci.quantity * p.price) AS subtotal
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
    `);

    const total = items.reduce((sum, item) => sum + item.subtotal, 0);
    res.json({ items, total: parseFloat(total.toFixed(2)) });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el carrito', detail: err.message });
  }
});

// POST /cart
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ error: 'productId y quantity (>= 1) son requeridos' });
  }

  try {
    const product = get('SELECT id FROM products WHERE id = ?', [productId]);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    const existing = get('SELECT id, quantity FROM cart_items WHERE product_id = ?', [productId]);

    if (existing) {
      run('UPDATE cart_items SET quantity = ? WHERE id = ?', [existing.quantity + quantity, existing.id]);
      res.json({ message: 'Cantidad actualizada en el carrito' });
    } else {
      run('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)', [productId, quantity]);
      res.status(201).json({ message: 'Producto agregado al carrito' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar al carrito', detail: err.message });
  }
});

// DELETE /cart/:id
app.delete('/cart/:id', (req, res) => {
  try {
    const result = run('DELETE FROM cart_items WHERE id = ?', [req.params.id]);
    if (result.changes === 0) return res.status(404).json({ error: 'Ítem no encontrado en el carrito' });
    res.json({ message: 'Ítem eliminado del carrito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar del carrito', detail: err.message });
  }
});

// DELETE /cart — vaciar todo
app.delete('/cart', (req, res) => {
  try {
    run('DELETE FROM cart_items');
    res.json({ message: 'Carrito vaciado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al vaciar el carrito', detail: err.message });
  }
});

//  Arrancar servidor (después de inicializar la BD) 
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Error al inicializar la base de datos:', err);
  process.exit(1);
});
