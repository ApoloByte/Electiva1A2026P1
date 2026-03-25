const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // Movido arriba

const app = express();

// --- CONFIGURACIÓN DE BASE DE DATOS ---
const db = new sqlite3.Database('./usuarios.db'); 
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age TEXT)");

// --- MIDDLEWARES ---
app.use(bodyParser.json());
app.use(cors());

// Objeto de prueba 
const usr = {
    name: 'María',
    age: '33',
    email: 'maria.gmail.com'
};

// --- RUTAS GET ---

// Saludo personalizado
app.get('/hello/:name', (req, res) => {
    const nombre = req.params.name; 
    res.send(`¡Hola, ${nombre}!`);
});

// Obtener usuario 
app.get('/user', (req, res) => {
    res.json(usr);
});

// --- RUTA POST (CON VALIDACIÓN Y SQLITE) ---
app.post('/user', (req, res) => {
    const { name, age } = req.body;

    // Validación de datos
    if (!name || !age) {
        return res.status(400).send("Faltan datos obligatorios: name y age");
    }

    const sql = "INSERT INTO users (name, age) VALUES (?, ?)";
    db.run(sql, [name, age], function(err) {
        if (err) return res.status(500).send(err.message);
        res.json({ 
            message: "Usuario guardado en base de datos",
            id: this.lastID, 
            name, 
            age 
        });
    });
});

// --- RUTAS PUT Y DELETE (SIMULADAS) ---
app.put('/user', (req, res) => {
    res.json({ message: "Usuario actualizado (simulado)" });
});

app.delete('/user', (req, res) => {
    res.json({ message: "Usuario eliminado (simulado)" });
});

// --- INICIO DEL SERVIDOR ---
app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});