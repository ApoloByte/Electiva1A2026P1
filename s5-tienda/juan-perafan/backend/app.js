const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const { name } = require('./db');
const db = new Database('./datos.db', { verbose: console.log });
const app = express();

app.use(express.json());
app.use(cors());



app.get('/products', (req, res) => {
    try {
        const products = db.prepare("SELECT * FROM products").all();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/products/:id', (req, res) => {
    try {
        const id = req.params.id;
        const product = db.prepare("SELECT * FROM products WHERE id = ?").get(id);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/cart_items', (req, res) => {
    try {
        const stmt = db.prepare(`
            SELECT 
                cart_items.id, 
                products.name, 
                products.price, 
                cart_items.quantity,
                (products.price * cart_items.quantity) AS subtotal
            FROM cart_items
            INNER JOIN products ON cart_items.product_id = products.id
        `);

        const items = stmt.all();
        const total = items.reduce((acc, item) => acc + item.subtotal, 0);

        res.json({
            items,
            total: total.toFixed(2)
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.post('/cart_items', (req, res) => {
    try {
        const { productId, quantity } = req.body; 

        if (!productId || !quantity) {
            return res.status(400).json({ error: "Faltan datos (productId o quantity)" });
        }

        const stmt = db.prepare(`
            INSERT INTO cart_items (product_id, quantity) 
            VALUES (?, ?)
        `);

        const info = stmt.run(productId, quantity);

        res.status(201).json({
            id: info.lastInsertRowid,
            productId,
            quantity
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/cart_items/:id', (req, res) => {
    try {
        const id = req.params.id;
        const info = db.prepare(`DELETE FROM cart_items WHERE id = ?`).run(id);
        if (info.changes === 0) {
            return res.status(404).json({ mensaje: "No se encontró el ítem" });
        }

        res.json({ mensaje: "Eliminado de la DB", filasBorradas: info.changes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/cart_items_all', (req, res) => {
    try {
       
        const info = db.prepare(`DELETE FROM cart_items`).run();

        res.json({ 
            mensaje: "Carrito vaciado por completo", 
            filasBorradas: info.changes 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(3000, () => {
    console.log('Servidor con SQLite en http://localhost:3000');
});