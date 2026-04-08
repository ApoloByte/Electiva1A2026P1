const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


// BASE DE DATOS

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Base de datos conectada");
    }
});

// Crear tabla
db.run(`
CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL
)
`);



// RUTA RAÍZ (ARREGLA TU ERROR)

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});



// GET TODOS

app.get("/productos", (req, res) => {
    db.all("SELECT * FROM productos", [], (err, rows) => {
        if (err) return res.status(500).json(err);
        res.json(rows);
    });
});



// GET DINÁMICO

app.get("/hello/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send(`¡Hola, ${nombre}!`);
});



// POST (CREAR)

app.post("/productos", (req, res) => {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
    }

    const sql = "INSERT INTO productos (nombre, precio) VALUES (?, ?)";
    db.run(sql, [nombre, precio], function (err) {
        if (err) return res.status(500).json(err);
        res.json({
            mensaje: "Producto creado",
            id: this.lastID,
            nombre,
            precio
        });
    });
});



// PUT (ACTUALIZAR)

app.put("/productos/:id", (req, res) => {
    const { nombre, precio } = req.body;
    const { id } = req.params;

    if (!nombre || !precio) {
        return res.status(400).json({ error: "Nombre y precio son obligatorios" });
    }

    const sql = "UPDATE productos SET nombre=?, precio=? WHERE id=?";
    db.run(sql, [nombre, precio, id], function (err) {
        if (err) return res.status(500).json(err);

        if (this.changes === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ mensaje: "Producto actualizado" });
    });
});



// DELETE (ELIMINAR)

app.delete("/productos/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM productos WHERE id=?";
    db.run(sql, [id], function (err) {
        if (err) return res.status(500).json(err);

        if (this.changes === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ mensaje: "Producto eliminado" });
    });
});



// SERVIDOR

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});