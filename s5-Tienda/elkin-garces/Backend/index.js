const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(express.json());
app.use(cors());



app.get('/products', (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
});


app.get('/products/:id', (req, res) => {
    const product = db.prepare("SELECT * FROM products WHERE id = ?")
        .get(req.params.id);

    res.json(product);
});



app.get('/cart', (req, res) => {
    const items = db.prepare(`
        SELECT cart_items.id, products.name, products.price, cart_items.quantity,
        (products.price * cart_items.quantity) as subtotal
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
    `).all();

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    res.json({ items, total });
});



app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;

    const existing = db.prepare("SELECT * FROM cart_items WHERE product_id = ?")
        .get(productId);

    if (existing) {
        db.prepare("UPDATE cart_items SET quantity = quantity + ? WHERE product_id = ?")
            .run(quantity, productId);
    } else {
        db.prepare("INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)")
            .run(productId, quantity);
    }

    res.json({ message: "Producto agregado al carrito" });
});



app.delete('/cart/:id', (req, res) => {
    db.prepare("DELETE FROM cart_items WHERE id = ?")
        .run(req.params.id);

    res.json({ message: "Item eliminado" });
});



app.delete('/cart', (req, res) => {
    db.prepare("DELETE FROM cart_items").run();
    res.json({ message: "Carrito vaciado" });
});


app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});

app.post('/checkout', (req, res) => {


    db.prepare("DELETE FROM cart_items").run();

    res.json({ message: "Compra realizada con éxito" });

});