require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir el frontend estático desde http://localhost:3000
app.use(express.static(path.join(__dirname, '../frontend')));


// RUTAS DE PRODUCTOS

// GET /products — Devuelve todos los productos
app.get('/products', (req, res) => {
  try {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// GET /products/:id — Devuelve un producto por id
app.get('/products/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id);

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// RUTAS DEL CARRITO

// GET Devuelve todos los ítems
app.get('/cart', (req, res) => {
  try {
    const cartItems = db.prepare(`
      SELECT
        ci.id,
        ci.product_id,
        ci.quantity,
        p.name,
        p.price,
        p.image_url,
        ROUND(ci.quantity * p.price, 2) AS subtotal
      FROM cart_items ci
      JOIN products p ON p.id = ci.product_id
    `).all();

    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

    res.json({
      items: cartItems,
      total: Math.round(total * 100) / 100,
    });
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// POST Agrega o actualiza 
app.post('/cart', (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ error: 'productId y quantity son requeridos y quantity debe ser >= 1' });
    }

    // Verificar que el producto exista
    const product = db.prepare('SELECT id FROM products WHERE id = ?').get(productId);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Verificar si el producto ya está en el carrito
    const existingItem = db.prepare(
      'SELECT id, quantity FROM cart_items WHERE product_id = ?'
    ).get(productId);

    if (existingItem) {
      // Actualizar cantidad
      db.prepare(
        'UPDATE cart_items SET quantity = quantity + ? WHERE product_id = ?'
      ).run(quantity, productId);
    } else {
      // Insertar nuevo ítem
      db.prepare(
        'INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)'
      ).run(productId, quantity);
    }

    res.status(201).json({ message: 'Ítem agregado/actualizado en el carrito' });
  } catch (error) {
    console.error('Error al agregar al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// DELETE /cart/:id — Elimina un ítem del carrito por su id
app.delete('/cart/:id', (req, res) => {
  try {
    const { id } = req.params;
    const result = db.prepare('DELETE FROM cart_items WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Ítem no encontrado en el carrito' });
    }

    res.json({ message: 'Ítem eliminado del carrito' });
  } catch (error) {
    console.error('Error al eliminar ítem del carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// DELETE /cart — Vacía todo el carrito (opcional)
app.delete('/cart', (req, res) => {
  try {
    db.prepare('DELETE FROM cart_items').run();
    res.json({ message: 'Carrito vaciado correctamente' });
  } catch (error) {
    console.error('Error al vaciar el carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// ─────────────────────────────────────────────
// INICIO DEL SERVIDOR
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
