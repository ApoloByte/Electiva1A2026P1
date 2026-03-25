const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a SQLite
const db = new sqlite3.Database("./products.db");
db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
)`);

// GET /products
app.get("/products", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST /products
app.post("/products", (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) return res.status(400).json({ error: "Faltan datos" });

    db.run("INSERT INTO products(name, price) VALUES(?, ?)", [name, price], function(err){
        if(err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, name, price });
    });
});

// PUT /products/:id
app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    if(!name || !price) return res.status(400).json({ error: "Faltan datos" });

    db.run("UPDATE products SET name=?, price=? WHERE id=?", [name, price, id], function(err){
        if(err) return res.status(500).json({ error: err.message });
        if(this.changes === 0) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ id, name, price });
    });
});

// DELETE /products/:id
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM products WHERE id=?", [id], function(err){
        if(err) return res.status(500).json({ error: err.message });
        if(this.changes === 0) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ message: "Producto eliminado" });
    });
});

// GET /hello/:name
app.get("/hello/:name", (req, res) => {
    const { name } = req.params;
    res.send(`¡Hola, ${name}!`);
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));