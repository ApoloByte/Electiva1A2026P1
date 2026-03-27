const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(express.json());

// Conectar a SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) console.error('Error al conectar DB:', err.message);
  else console.log('Conectado a SQLite');
});

// Crear tabla (si no existe)
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
  )
`);

// =====================
// Rutas
// =====================

// Ruta dinámica
app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.send(`¡Hola, ${name}!`);
});

// GET todos los productos
app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// GET producto por ID
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(row);
  });
});

// POST crear producto
app.post('/products', (req, res) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Nombre inválido' });
  }
  if (price === undefined || isNaN(price) || price <= 0) {
    return res.status(400).json({ message: 'Precio inválido' });
  }

  db.run('INSERT INTO products (name, price) VALUES (?, ?)', [name, price], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    // Devuelve el ID generado automáticamente
    res.status(201).json({
      id: this.lastID,
      name,
      price
    });
  });
});

// PUT actualizar producto por ID
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Nombre inválido' });
  }
  if (price === undefined || isNaN(price) || price <= 0) {
    return res.status(400).json({ message: 'Precio inválido' });
  }

  db.run('UPDATE products SET name = ?, price = ? WHERE id = ?', [name, price, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto actualizado', id: Number(id), name, price });
  });
});

// DELETE producto por ID
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM products WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado', id: Number(id) });
  });
});

// =====================
// Servidor
// =====================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});