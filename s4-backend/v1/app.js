const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

app.use(cors());

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL NOT NULL
    )`);
});

// Validación
function isPositiveNumber(val) {
    const n = Number(val);
    return !Number.isNaN(n) && n > 0;
}

function isValidEmail(email) {
    return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

function isNonEmptyString(v) {
    return typeof v === 'string' && v.trim().length > 0;
}

// Ruta Hola
app.get('/hello/:name', (req, res) => {
    const name = req.params.name || 'mundo';
    res.send(`¡Hola, ${decodeURIComponent(name)}!`);
});

// Items backed by SQLite
app.get('/item', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!rows || rows.length === 0) return res.status(404).json({ error: 'No item found' });
        res.json(rows);
    });
});

app.post('/item', (req, res) => {
    const newItem = req.body;
    if (!newItem) return res.status(400).json({ error: 'Cuerpo inválido' });
    if (!isNonEmptyString(newItem.name)) return res.status(400).json({ error: 'El campo "name" es requerido y debe ser texto no vacío' });
    if (newItem.price === undefined || !isPositiveNumber(newItem.price)) return res.status(400).json({ error: 'El campo "price" es requerido y debe ser un número mayor que 0' });
    const name = newItem.name.trim();
    const price = Number(newItem.price);
    db.run('INSERT INTO items (name, price) VALUES (?, ?)', [name, price], function (err) {
        if (err) return res.status(500).json({ error: String(err) });
        db.get('SELECT * FROM items WHERE id = ?', [this.lastID], (err2, row) => {
            if (err2) return res.status(500).json({ error: String(err2) });
            res.status(201).json(row);
            console.log('Item creado:', row);
        });
    });
});

app.put('/item/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    const updates = req.body || {};
    if (updates.name !== undefined && !isNonEmptyString(updates.name)) return res.status(400).json({ error: 'Si se envía "name" debe ser texto no vacío' });
    if (updates.price !== undefined && !isPositiveNumber(updates.price)) return res.status(400).json({ error: 'Si se envía "price" debe ser un número mayor que 0' });
    db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!row) return res.status(404).json({ error: 'Item no encontrado' });
        const name = updates.name !== undefined ? updates.name.trim() : row.name;
        const price = updates.price !== undefined ? Number(updates.price) : row.price;
        db.run('UPDATE items SET name = ?, price = ? WHERE id = ?', [name, price, id], function (err2) {
            if (err2) return res.status(500).json({ error: String(err2) });
            db.get('SELECT * FROM items WHERE id = ?', [id], (err3, updated) => {
                if (err3) return res.status(500).json({ error: String(err3) });
                res.json({ message: 'Item actualizado', item: updated });
                console.log('Item actualizado:', updated);
            });
        });
    });
});

app.delete('/item/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!row) return res.status(404).json({ error: 'Item no encontrado' });
        db.run('DELETE FROM items WHERE id = ?', [id], function (err2) {
            if (err2) return res.status(500).json({ error: String(err2) });
            res.json({ message: 'Item eliminado' });
            console.log('Item eliminado id=', id);
        });
    });
});
// -------------------------------------------------------------------------------------------

// Listar todos los usuarios
app.get('/user', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) return res.status(500).json({ error: String(err) });
        res.json(rows || []);
    });
});

// Crear
app.post('/user', (req, res) => {
    const payload = req.body;
    const entries = Array.isArray(payload) ? payload : [payload];
    if (!entries || entries.length === 0) return res.status(400).json({ error: 'Cuerpo inválido' });

    const results = [];
    const errors = [];
    let remaining = entries.length;

    entries.forEach((u, idx) => {
        if (!u || !isNonEmptyString(u.name)) {
            errors.push({ index: idx, error: 'El campo "name" es requerido y debe ser texto no vacío' });
            if (--remaining === 0) finish();
            return;
        }
        if (u.email && !isValidEmail(u.email)) {
            errors.push({ index: idx, error: 'Email inválido' });
            if (--remaining === 0) finish();
            return;
        }
        if (u.age !== undefined && Number.isNaN(Number(u.age))) {
            errors.push({ index: idx, error: 'Age debe ser numérico' });
            if (--remaining === 0) finish();
            return;
        }

        const name = u.name.trim();
        const age = u.age !== undefined ? Number(u.age) : null;
        const email = u.email || null;
        const id = (u.id !== undefined && Number.isFinite(Number(u.id))) ? Number(u.id) : null;

        db.run('INSERT OR REPLACE INTO users (id, name, age, email) VALUES (?, ?, ?, ?)', [id, name, age, email], function (err) {
            if (err) {
                errors.push({ index: idx, error: String(err) });
                if (--remaining === 0) finish();
                return;
            }
            const rowId = (id !== null) ? id : this.lastID;
            db.get('SELECT * FROM users WHERE id = ?', [rowId], (err2, row) => {
                if (err2) {
                    errors.push({ index: idx, error: String(err2) });
                } else {
                    results.push(row);
                }
                if (--remaining === 0) finish();
            });
        });
    });

    function finish() {
        if (errors.length > 0) {
            // 207 Multi-Status for partial success
            return res.status(207).json({ message: 'Parcial', errors, results });
        }
        return res.status(201).json(Array.isArray(payload) ? results : results[0]);
    }
});

// Eliminar el usuario
app.delete('/user', (req, res) => {
    const bodyId = req.body && Number.isFinite(Number(req.body.id)) ? Number(req.body.id) : 1;
    const id = bodyId;
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!row) return res.status(404).json({ error: 'No hay usuario para eliminar' });
        db.run('DELETE FROM users WHERE id = ?', [id], function (err2) {
            if (err2) return res.status(500).json({ error: String(err2) });
            console.log('Usuario eliminado id=', id);
            res.json({ message: 'Usuario eliminado', id });
        });
    });
});

// Eliminar usuario por id en la ruta
app.delete('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || id <= 0) return res.status(400).json({ error: 'ID inválido' });
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!row) return res.status(404).json({ error: 'Usuario no encontrado' });
        db.run('DELETE FROM users WHERE id = ?', [id], function (err2) {
            if (err2) return res.status(500).json({ error: String(err2) });
            console.log('Usuario eliminado id=', id);
            res.json({ message: 'Usuario eliminado', id });
        });
    });
});

// Actualizar usuario por id
app.put('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || id <= 0) return res.status(400).json({ error: 'ID inválido' });
    const updates = req.body || {};
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) return res.status(500).json({ error: String(err) });
        if (!row) return res.status(404).json({ error: 'Usuario no encontrado' });
        if (updates.name !== undefined) {
            if (!isNonEmptyString(updates.name)) return res.status(400).json({ error: 'Si se envía "name" debe ser texto no vacío' });
            updates.name = updates.name.trim();
        }
        if (updates.email !== undefined && updates.email !== null && !isValidEmail(updates.email)) return res.status(400).json({ error: 'Email inválido' });
        if (updates.age !== undefined) {
            if (Number.isNaN(Number(updates.age))) return res.status(400).json({ error: 'Age debe ser numérico' });
            updates.age = Number(updates.age);
        }
        const name = updates.name !== undefined ? updates.name : row.name;
        const age = updates.age !== undefined ? updates.age : row.age;
        const email = updates.email !== undefined ? updates.email : row.email;
        db.run('UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?', [name, age, email, id], function (err2) {
            if (err2) return res.status(500).json({ error: String(err2) });
            db.get('SELECT * FROM users WHERE id = ?', [id], (err3, updated) => {
                if (err3) return res.status(500).json({ error: String(err3) });
                res.json({ message: 'Usuario actualizado', user: updated });
                console.log('Usuario actualizado id=', id, updated);
            });
        });
    });
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});