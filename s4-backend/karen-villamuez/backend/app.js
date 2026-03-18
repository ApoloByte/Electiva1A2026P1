const express = require('express');
const bodyParser = require('body-parser'); // Nota: express.json() hace lo mismo actualmente
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors()); 
app.use(bodyParser.json());

// 1. CAMBIO: Usar "let" en lugar de "const" para poder editar la lista
let users = [
    {
        id: 1,
        name: 'María',
        age: '33',
        email: 'maria@gmail.com' // Corregido el @
    }
];

// 2. GET: Corregido el nombre de la variable
app.get('/user', (req, res) => {
    res.json(users); 
});

// 2. POST: (Está perfecto)
app.post('/user', (req, res) => {
    const nuevoUsuario = req.body;
    users.push(nuevoUsuario);
    res.status(201).json({ mensaje: "Usuario guardado", data: nuevoUsuario });
});

// 3. PUT: Corregido para que coincida con tu propiedad "name" (antes tenías "nombre")
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body; // Cambiado a 'name' para que coincida con tu objeto
    
    users = users.map(u => u.id === id ? { ...u, name: name } : u);
    
    res.json({ mensaje: "Usuario actualizado" });
});

// 4. DELETE: Te lo añado para completar el CRUD
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json({ mensaje: `Usuario ${id} eliminado` });
});

app.listen(3001, () => {
    console.log('El servidor está escuchando en http://localhost:3001');
});