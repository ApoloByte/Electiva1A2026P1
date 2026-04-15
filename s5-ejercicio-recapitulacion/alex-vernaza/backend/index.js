const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// --- RUTAS DE PRODUCTOS ---
app.get('/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    res.json(product);
});

// --- RUTAS DEL CARRITO ---
app.get('/cart', (req, res) => {
    // Aquí hacemos un JOIN para traer el nombre y precio del producto
    const cartData = db.prepare(`
        SELECT cart_items.id, products.name, products.price, cart_items.quantity, (products.price * cart_items.quantity) as subtotal
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
    `).all();

    const total = cartData.reduce((acc, item) => acc + item.subtotal, 0);
    res.json({ items: cartData, total: total });
});

app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    
    // Verificamos si ya existe el producto en el carrito
    const existing = db.prepare('SELECT * FROM cart_items WHERE product_id = ?').get(productId);
    
    if (existing) {
        db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE product_id = ?')
          .run(quantity, productId);
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

app.delete('/cart', (req, res) => {
    db.prepare('DELETE FROM cart_items').run();
    res.json({ message: "Carrito vaciado" });
});
"Hola hola probando probando"
app.listen(3000, () => console.log("Servidor de tienda en puerto 3000"));