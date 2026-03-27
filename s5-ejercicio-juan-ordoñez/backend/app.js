const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas Productos

// GET /products - listar productos
app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// GET /products/:id - producto por id
app.get('/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
});

// Rutas Carrito

// GET /cart - obtener items con info y total
app.get('/cart', (req, res) => {
  const items = db.prepare(`
    SELECT ci.id, ci.product_id, ci.quantity, p.name, p.price, p.image_url,
           (ci.quantity * p.price) AS subtotal
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.id
  `).all();

  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  res.json({ items, total });
});

// POST /cart - agregar o actualizar item en carrito
app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ message: 'productId y quantity válidos son requeridos' });
  }

  // Verificar producto existe
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(productId);
  if (!product) return res.status(404).json({ message: 'Producto no existe' });

  // Verificar si ya hay item en carrito
  const existing = db.prepare('SELECT * FROM cart_items WHERE product_id = ?').get(productId);
  if (existing) {
    // Actualizar cantidad
    db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?').run(quantity, existing.id);
    res.json({ message: 'Cantidad actualizada' });
  } else {
    // Insertar nuevo item
    db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)').run(productId, quantity);
    res.json({ message: 'Producto agregado al carrito' });
  }
});

// DELETE /cart/:id - eliminar ítem del carrito por id
app.delete('/cart/:id', (req, res) => {
  const info = db.prepare('DELETE FROM cart_items WHERE id = ?').run(req.params.id);
  if (info.changes === 0) return res.status(404).json({ message: 'Ítem no encontrado en carrito' });
  res.json({ message: 'Ítem eliminado del carrito' });
});

// (Opcional) DELETE /cart - vaciar carrito completo
app.delete('/cart', (req, res) => {
  db.prepare('DELETE FROM cart_items').run();
  res.json({ message: 'Carrito vaciado' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});