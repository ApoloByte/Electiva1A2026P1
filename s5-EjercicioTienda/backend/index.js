const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- PRODUCTS ---------------- */

// GET todos los productos
app.get("/products", (req, res) => {
    const products = db.prepare("SELECT * FROM products").all();
    res.json(products);
});

// GET producto por id
app.get("/products/:id", (req, res) => {

    const product = db
        .prepare("SELECT * FROM products WHERE id=?")
        .get(req.params.id);

    res.json(product);
});

/* ---------------- CART ---------------- */

// GET carrito
app.get("/cart", (req, res) => {

    const items = db.prepare(`
        SELECT cart_items.id,
               products.name,
               products.price,
               cart_items.quantity,
               products.price * cart_items.quantity as subtotal
        FROM cart_items
        JOIN products ON products.id = cart_items.product_id
    `).all();

    const total = items.reduce((sum, item) => sum + item.subtotal, 0);

    res.json({
        items,
        total
    });
});

// POST agregar al carrito
app.post("/cart", (req, res) => {

    const { productId, quantity } = req.body;

    const existing = db.prepare(
        "SELECT * FROM cart_items WHERE product_id=?"
    ).get(productId);

    if (existing) {

        db.prepare(`
            UPDATE cart_items
            SET quantity = quantity + ?
            WHERE product_id = ?
        `).run(quantity, productId);

    } else {

        db.prepare(`
            INSERT INTO cart_items (product_id, quantity)
            VALUES (?, ?)
        `).run(productId, quantity);

    }

    res.json({ message: "Producto agregado al carrito" });

});

// DELETE item carrito
app.delete("/cart/:id", (req, res) => {

    db.prepare("DELETE FROM cart_items WHERE id=?")
        .run(req.params.id);

    res.json({ message: "Item eliminado" });

});

// DELETE vaciar carrito
app.delete("/cart", (req, res) => {

    db.prepare("DELETE FROM cart_items").run();

    res.json({ message: "Carrito vacío" });

});

// servidor
app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});