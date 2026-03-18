const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// --- CONFIGURACIÓN DE BASE DE DATOS ---
let db;

(async () => {
    db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            email TEXT
        )
    `);
    console.log("¡Base de datos SQLite conectada y tabla lista!");
})();

// --- RUTAS ---

// 1. OBTENER TODOS LOS USUARIOS (GET)
app.get('/user', async (req, res) => {
    const rows = await db.all('SELECT * FROM users');
    res.json(rows);
});

// 2. CREAR USUARIO (POST) con validación
app.post('/user', async (req, res) => {
    const { name, age, email } = req.body;
    
    if (!name || !age || !email) {
        return res.status(400).json({ error: "Nombre, edad y email son obligatorios" });
    }

    const result = await db.run(
        'INSERT INTO users (name, age, email) VALUES (?, ?, ?)',
        [name, age, email]
    );
    
    res.status(201).json({ 
        message: "Usuario guardado en SQLite", 
        id: result.lastID 
    });
});

// 3. ACTUALIZAR USUARIO (PUT)
app.put('/user/:id', async (req, res) => {
    const id = req.params.id;
    const { name, age, email } = req.body;
    
    const result = await db.run(
        'UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?',
        [name, age, email, id]
    );

    if (result.changes > 0) {
        res.json({ message: "Usuario actualizado en la DB" });
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});

// 4. ELIMINAR USUARIO (DELETE)
app.delete('/user/:id', async (req, res) => {
    const id = req.params.id;
    const result = await db.run('DELETE FROM users WHERE id = ?', id);

    if (result.changes > 0) {
        res.json({ message: "Usuario eliminado de la DB" });
    } else {
        res.status(404).json({ message: "No existe ese ID" });
    }
});

// 5. SALUDO PERSONALIZADO (GET)
app.get('/hello/:name', (req, res) => {
    const nombreUsuario = req.params.name;
    res.send(`¡Hola, ${nombreUsuario}!`);
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});