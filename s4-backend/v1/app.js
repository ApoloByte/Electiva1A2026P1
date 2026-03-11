const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());

let usr = {
    name: 'María',
    age: '33',
    email: 'maria.gmail.com'
};

app.use(cors());

// Validación
function isPositiveNumber(val) {
    const n = Number(val);
    return !Number.isNaN(n) && n > 0;
}

function isValidEmail(email) {
    return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

// Ruta Hola
app.get('/hello/:name', (req, res) => {
    const name = req.params.name || 'mundo';
    res.send(`¡Hola, ${decodeURIComponent(name)}!`);
});

// Ejemplo de recurso "item" que requiere `name` y `price`
let item = null;

app.get('/item', (req, res) => {
    if (!item) return res.status(404).json({ error: 'No item found' });
    res.json(item);
});

app.post('/item', (req, res) => {
    const newItem = req.body;
    if (!newItem || !newItem.name || newItem.price === undefined) {
        return res.status(400).json({ error: 'Falta el campo name o price' });
    }
    if (!isPositiveNumber(newItem.price)) {
        return res.status(400).json({ error: 'El price debe ser un número mayor que 0' });
    }
    item = newItem;
    res.status(201).json(item);
    console.log('Item creado:', item);
});

app.put('/item', (req, res) => {
    if (!item) return res.status(404).json({ error: 'No hay item para actualizar' });
    const updates = req.body || {};
    if (updates.price !== undefined && !isPositiveNumber(updates.price)) {
        return res.status(400).json({ error: 'El price debe ser un número mayor que 0' });
    }
    item = Object.assign({}, item, updates);
    console.log('Item actualizado:', item);
    res.json({ message: 'Item actualizado', item });
});

app.delete('/item', (req, res) => {
    if (!item) return res.status(404).json({ error: 'No hay item para eliminar' });
    item = null;
    console.log('Item eliminado');
    res.json({ message: 'Item eliminado' });
});

app.get('/user', (req, res) => {
    if (!usr) return res.status(404).json({ error: 'No user found' });
    res.json(usr); // envía el objeto literal al cliente
});

// Crear un usuario
app.post('/user', (req, res) => {
    const newUser = req.body;
    if (!newUser || !newUser.name) {
        return res.status(400).json({ error: 'Falta el campo name' });
    }
    if (newUser.email && !isValidEmail(newUser.email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }
    if (newUser.age !== undefined && Number.isNaN(Number(newUser.age))) {
        return res.status(400).json({ error: 'Age debe ser numérico' });
    }
    usr = newUser;
    res.status(201).json(usr);
    console.log('Usuario creado:', usr);
});

// Actualizar el usuario existente
app.put('/user', (req, res) => {
    if (!usr) return res.status(404).json({ error: 'No hay usuario para actualizar' });
    const updates = req.body || {};
    if (updates.email && !isValidEmail(updates.email)) {
        return res.status(400).json({ error: 'Email inválido' });
    }
    if (updates.age !== undefined && Number.isNaN(Number(updates.age))) {
        return res.status(400).json({ error: 'Age debe ser numérico' });
    }
    usr = Object.assign({}, usr, updates);
    const response = { message: 'Usuario actualizado', user: usr };
    console.log('Usuario actualizado:', usr);
    res.json(response);
});

// Eliminar el usuario
app.delete('/user', (req, res) => {
    if (!usr) return res.status(404).json({ error: 'No hay usuario para eliminar' });
    usr = null;
    console.log('Usuario eliminado');
    res.json({ message: 'Usuario eliminado' });
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});