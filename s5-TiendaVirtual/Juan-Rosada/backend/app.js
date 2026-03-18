require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// PRODUCTOS
app.get('/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    product ? res.json(product) : res.status(404).json({ error: "No encontrado" });
});

// CARRITO 
app.get('/cart', (req, res) => {
    // JOIN para traer los datos del producto junto con el ítem del carrito
    const cart = db.prepare(`
        SELECT cart_items.id, products.name, products.price, cart_items.quantity, 
        (products.price * cart_items.quantity) AS subtotal
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
    `).all();
    
    const total = cart.reduce((sum, item) => sum + item.subtotal, 0);
    res.json({ items: cart, total });
});

app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    
    // Ver
    const existing = db.prepare('SELECT id, quantity FROM cart_items WHERE product_id = ?').get(productId);
    
    if (existing) {
        db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?')
          .run(quantity, existing.id);
    } else {
        db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)')
          .run(productId, quantity);
    }
    res.json({ message: "Carrito actualizado" });
});

app.delete('/cart/:id', (req, res) => {
    db.prepare('DELETE FROM cart_items WHERE id = ?').run(req.params.id);
    res.json({ message: "Ítem eliminado" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend en puerto ${PORT}`));