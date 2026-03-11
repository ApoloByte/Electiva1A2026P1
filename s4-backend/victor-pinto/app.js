const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexión a SQLite y creación de tabla
const db = new Database('./users.db');
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age TEXT NOT NULL,
    email TEXT NOT NULL
  )
`).run();

// Ruta de prueba
app.get('/', (req, res) => res.send('Microservicio funcionando '));

// Ruta dinámica
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`¡Hola, ${name}!`);
});

// GET todos los usuarios
app.get('/user', (req, res) => {
  const rows = db.prepare('SELECT * FROM users').all();
  res.json(rows);
});

// POST crear usuario
app.post('/user', (req, res) => {
  const { name, age, email } = req.body;
  if (!name || !age || !email) return res.status(400).json({ message: 'Faltan campos obligatorios' });

  const stmt = db.prepare('INSERT INTO users (name, age, email) VALUES (?, ?, ?)');
  const info = stmt.run(name, age, email);

  res.status(201).json({ message: 'Usuario creado', user: { id: info.lastInsertRowid, name, age, email } });
});

// PUT actualizar usuario
app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  if (!name || !age || !email) return res.status(400).json({ message: 'Faltan campos obligatorios' });

  const stmt = db.prepare('UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?');
  const info = stmt.run(name, age, email, id);

  if (info.changes === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json({ message: 'Usuario actualizado', user: { id: parseInt(id), name, age, email } });
});

// DELETE eliminar usuario
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('DELETE FROM users WHERE id = ?');
  const info = stmt.run(id);

  if (info.changes === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
  res.json({ message: 'Usuario eliminado', id: parseInt(id) });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));