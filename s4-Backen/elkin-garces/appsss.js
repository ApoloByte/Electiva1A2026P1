const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); 
const app = express();

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database('./datos.db', (err) => {
    if (err) return console.error("Error al abrir base de datos", err.message);
    console.log("Conectado a SQLite correctamente.");
});


db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT
)`);


// GET
app.get('/user', (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

// POST
app.post('/user', (req, res) => {
    const { name, age, email } = req.body;
    if (!name || !age) return res.status(400).json({ error: "Faltan datos" });

    const sql = `INSERT INTO usuarios (name, age, email) VALUES (?, ?, ?)`;
    db.run(sql, [name, age, email], function(err) {
        if (err) return res.status(500).send(err.message);
        res.status(201).json({ id: this.lastID, name, age, email });
    });
});

// PUT
app.put('/user/:id', (req, res) => {
    const { name, age } = req.body;
    const sql = `UPDATE usuarios SET name = ?, age = ? WHERE id = ?`;
    db.run(sql, [name, age, req.params.id], function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ mensaje: "Actualizado en DB", filasAfectadas: this.changes });
    });
});

// DELETE
app.delete('/user/:id', (req, res) => {
    db.run(`DELETE FROM usuarios WHERE id = ?`, req.params.id, function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ mensaje: "Eliminado de la DB" });
    });
});

app.listen(3000, () => {
    console.log('Servidor con SQLite en http://localhost:3000');
});