// http://localhost:3000/hello/Tatiana -> toma el nombre que va en la URL y responde: ¡Hola, Tatiana!
// http://localhost:3000/user -> Esta URL maneja los usuarios en la base de datos.

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(express.json());
app.use(cors());

// Usuario en la memoria (comentado)
// let usr = {
//     name: 'Tatiana Daza',
//     age: 22,
//     email: 'tmunozd@gmail.com'
// };

// Crear base de datos
const db = new sqlite3.Database('./database.db');

// Crear tabla si no existe
db.run(`
    CREATE TABLE IF NOT EXISTS user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL,
        email TEXT NOT NULL
    )
`);

// Ruta hola
app.get('/hello/:name', (req, res) => {
    res.send('¡Hola, ' + req.params.name + '!');
});

// GET - muestra los usuarios guardados.
app.get('/user', (req, res) => {

    db.all('SELECT * FROM user', [], (err, rows) => {

        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(rows);
    });
});

// POST - crear o reemplazar usuario
app.post('/user', (req, res) => {

    const { name, age, email } = req.body;

    // Validación basica
    if (!name || !age || !email) {
        return res.status(400).json({ message: 'Todos los espacios son obligatorios' });
    }

    db.run(
        'INSERT INTO user (name, age, email) VALUES (?, ?, ?)',
        [name, age, email],
        function(err) {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                id: this.lastID,
                name,
                age,
                email
            });
        }
    );
});

// PUT - actualizar usuario
app.put('/user', (req, res) => {

    const { id, name, age, email } = req.body;

    // validación basica
    if (!id || !name || !age || !email) {
        return res.status(400).json({ message: 'Todos los espacios son obligatorios' });
    }

    db.run(
        'UPDATE user SET name = ?, age = ?, email = ? WHERE id = ?',
        [name, age, email, id],
        function(err) {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: 'Usuario actualizado' });
        }
    );
});

// DELETE - eliminar usuario
app.delete('/user', (req, res) => {

    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'Debe enviar el id' });
    }

    db.run(
        'DELETE FROM user WHERE id = ?',
        id,
        function(err) {

            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({ message: 'Usuario ha sido eliminado' });
        }
    );
});

// iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});