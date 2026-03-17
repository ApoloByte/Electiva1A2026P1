const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // Importamos SQLite

const app = express();
app.use(cors());
app.use(express.json());

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
// Se creará un archivo llamado 'database.db' en tu carpeta
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error("Error al abrir base de datos:", err.message);
    else console.log("Conectado a la base de datos SQLite.");
});

// Crear la tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    age TEXT
)`);

// --- RUTAS DE LA API REST ---

// 1. READ (GET) - Obtener todos de la DB
app.get('/user', (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// 2. CREATE (POST) - Insertar en la DB
app.post('/user', (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email) return res.status(400).json({ mensaje: "Faltan datos" });

    const sql = `INSERT INTO usuarios (name, email, age) VALUES (?, ?, ?)`;
    db.run(sql, [name, email, age || "No especificada"], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, name, email });
    });
});

// 3. UPDATE (PUT) - Modificar en la DB
app.put('/user/:id', (req, res) => {
    const { name, email, age } = req.body;
    const sql = `UPDATE usuarios SET name = ?, email = ?, age = ? WHERE id = ?`;
    
    db.run(sql, [name, email, age, req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ mensaje: "No encontrado" });
        res.json({ mensaje: "Usuario actualizado" });
    });
});

// 4. DELETE (DELETE) - Eliminar de la DB
app.delete('/user/:id', (req, res) => {
    db.run(`DELETE FROM usuarios WHERE id = ?`, req.params.id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: "Eliminado", cambios: this.changes });
    });
});

// Saludo dinámico (Punto 3)
app.get('/hello/:name', (req, res) => {
    res.send(`¡Hola, ${req.params.name}!`);
});

app.listen(3000, () => console.log('Servidor con SQLite en puerto 3000'));