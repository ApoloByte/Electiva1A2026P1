const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");



// Crear la tabla si no existe
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER,
        email TEXT
    )`);
});


/*simulacion de base de datos, formato sin sql
let users = [
    {
        id: 1,
        name: 'María',
        age: '33',
        email: 'maria.gmail.com'
    }
];*/

/* Obtener usuarios sin sql
app.get('/user', (req, res) => {
    res.json(users); 
});*/


//Obtener usuarios en sql
app.get('/user', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});


/* Agregar un nuevo usuario forma sin validacion de datos sin sql
app.post("/user", (req, res) => {
    const nuevoUsuario = req.body;
    
    users.push(nuevoUsuario);
    res.json(users);
});*/


/*Forma con validacion de datos sin sql
app.post("/user", (req, res) => {

    const { id, name, age, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: "El nombre y el email son obligatorios"
        });
    }

    const nuevoUsuario = { id, name, age, email };

    users.push(nuevoUsuario);

    res.json(users);
});*/


//Agregar usuario con sql y validacion
app.post("/user", (req, res) => {
    const { name, age, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Datos faltantes" });

    const sql = `INSERT INTO users (name, age, email) VALUES (?, ?, ?)`;
    db.run(sql, [name, age, email], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, name, age, email });
    });
});


/* Modificar un usuario Existente sin restriccion sin sql
app.put("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const nuevoNombre = req.body.name; 
    users = users.map(user =>
        user.id === id ? { ...user, name: nuevoNombre } : user
    );

    res.json(users);
});*/




/*Modificar con restriccion sin sql
app.put("/user/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "El nombre es obligatorio"
        });
    }

    users = users.map(user =>
        user.id === id ? { ...user, name } : user
    );

    res.json(users);
});*/


//Modificar usuario con sql y restriccion
app.put("/user/:id", (req, res) => {
    const { name } = req.body;
    const id = req.params.id;

    db.run(`UPDATE users SET name = ? WHERE id = ?`, [name, id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Actualizado", cambios: this.changes });
    });
});


/* Eliminar un usuario sin sql
app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json(users);
});*/

//Eliminar usuario con sql
app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    db.run(`DELETE FROM users WHERE id = ?`, id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Eliminado", filasBorradas: this.changes });
    });
});




// EL LISTEN SIEMPRE AL FINAL
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto:${PORT}`);
});

//Mensaje dinámico
app.get("/hello/:name", (req, res) => {

    const nombre = req.params.name;

    res.send(`¡Hola, ${nombre}!`);

});