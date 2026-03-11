//  node ./app.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(cors());
app.use(express.json());

// Crear / conectar base de datos
const db = new sqlite3.Database('./database.db');

// Crear tabla si no existe
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    email TEXT
)
`);

// GET -> obtener usuarios
app.get('/user', (req, res) => {

    db.all("SELECT * FROM users", [], (err, rows) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(rows);

    });

});

// POST -> crear usuario
app.post('/user', (req, res) => {

    const { name, age, email } = req.body;

    // Validación
    if (!name || !age || !email) {
        return res.status(400).json({
            message: "Todos los campos son obligatorios"
        });
    }

    db.run(
        "INSERT INTO users(name, age, email) VALUES(?,?,?)",
        [name, age, email],
        function(err) {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Usuario creado",
                id: this.lastID
            });

        }
    );

});

// PUT -> actualizar usuario
app.put('/user/:id', (req, res) => {

    const { name, age, email } = req.body;
    const id = req.params.id;

    if (!name || !age || !email) {
        return res.status(400).json({
            message: "Todos los campos son obligatorios"
        });
    }

    db.run(
        "UPDATE users SET name=?, age=?, email=? WHERE id=?",
        [name, age, email, id],
        function(err){

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: "Usuario actualizado"
            });

        }
    );

});

// DELETE -> eliminar usuario
app.delete('/user/:id', (req, res) => {

    const id = req.params.id;

    db.run(
        "DELETE FROM users WHERE id=?",
        [id],
        function(err){

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message: "Usuario eliminado"
            });

        }
    );

});

// Endpoint dinámico
app.get('/hello/:name', (req, res) => {

    const name = req.params.name;

    res.send(`¡Hola, ${name}!`);

});

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor ejecutándose en http://localhost:3000");
});