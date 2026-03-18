const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// --- RUTAS DE PRODUCTOS ---
app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

// Novedad: Ruta para devolver un producto por ID (Requisito de la guía)
app.get('/products/:id', (req, res) => {
  const producto = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

// --- RUTAS DEL CARRITO ---
app.get('/cart', (req, res) => {
  const cart = db.prepare(`
    SELECT cart_items.id, products.name, products.price, cart_items.quantity, 
    (products.price * cart_items.quantity) as subtotal
    FROM cart_items
    JOIN products ON cart_items.product_id = products.id
  `).all();
  
  const total = cart.reduce((acc, item) => acc + item.subtotal, 0);
  res.json({ items: cart, total });
});

app.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  
  // Verificar si ya existe el producto en el carrito
  const existing = db.prepare('SELECT id, quantity FROM cart_items WHERE product_id = ?').get(productId);
  
  if (existing) {
    db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?').run(quantity, existing.id);
  } else {
    db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)').run(productId, quantity);
  }
  res.json({ mensaje: "Producto agregado" });
});

app.delete('/cart/:id', (req, res) => {
  db.prepare('DELETE FROM cart_items WHERE id = ?').run(req.params.id);
  res.json({ mensaje: "Item eliminado" });
});

// Novedad: Ruta Opcional para vaciar todo el carrito
app.delete('/cart', (req, res) => {
  db.prepare('DELETE FROM cart_items').run();
  res.json({ mensaje: "Carrito vaciado por completo" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend en http://localhost:${PORT}`));