const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
app.use(cors());
app.use(express.json());

// Crear/conectar la base de datos (crea el archivo db.sqlite automáticamente)
const db = new Database('db.sqlite');

// Crear la tabla si no existe
db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        precio REAL NOT NULL
    )
`);

// Función de validación
function validarDatos(body) {
    const errores = [];

    if (!body || Object.keys(body).length === 0) {
        return ["El body no puede estar vacío"];
    }
    if (!body.nombre || body.nombre.trim() === "") {
        errores.push("El campo 'nombre' es obligatorio");
    }
    if (body.precio === undefined || body.precio === null) {
        errores.push("El campo 'precio' es obligatorio");
    } else if (typeof body.precio !== "number" || body.precio < 0) {
        errores.push("El campo 'precio' debe ser un número positivo");
    }

    return errores;
}

// GET - Obtener todos los usuarios
app.get('/user', (req, res) => {
    const usuarios = db.prepare('SELECT * FROM usuarios').all();
    res.json(usuarios);
});

// POST - Crear usuario
app.post('/user', (req, res) => {
    const errores = validarDatos(req.body);
    if (errores.length > 0) return res.status(400).json({ errores });

    const { nombre, precio } = req.body;
    const resultado = db.prepare('INSERT INTO usuarios (nombre, precio) VALUES (?, ?)').run(nombre, precio);

    res.status(201).json({ mensaje: "Usuario creado", id: resultado.lastInsertRowid, nombre, precio });
});

// PUT - Actualizar usuario por ID
app.put('/user/:id', (req, res) => {
    const errores = validarDatos(req.body);
    if (errores.length > 0) return res.status(400).json({ errores });

    const { nombre, precio } = req.body;
    const { id } = req.params;

    const resultado = db.prepare('UPDATE usuarios SET nombre = ?, precio = ? WHERE id = ?').run(nombre, precio, id);

    if (resultado.changes === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    res.json({ mensaje: "Usuario actualizado", id, nombre, precio });
});

// DELETE - Eliminar usuario por ID
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    const resultado = db.prepare('DELETE FROM usuarios WHERE id = ?').run(id);

    if (resultado.changes === 0) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    res.json({ mensaje: "Usuario eliminado", id });
});

// GET - Saludo personalizado
app.get('/hello/:nombre', (req, res) => {
    res.json({ mensaje: `¡Hola, ${req.params.nombre}!` });
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});