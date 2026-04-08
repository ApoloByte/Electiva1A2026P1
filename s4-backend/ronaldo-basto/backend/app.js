const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


let usr = {
    name: 'María',
    age: '33',
    email: 'maria@gmail.com'
};

//hola


app.use(cors()); // Habilitar CORS para todas las rutas

app.get('/user', (req, res) => {
    res.json(usr);
});

// POST
app.post('/user', (req, res) => {
    usr = req.body; // ← esto ya NO dará error
    res.json({
        message: 'Usuario creado',
        user: usr
    });
});

// PUT
app.put('/user', (req, res) => {
    usr = { ...usr, ...req.body };
    res.json({
        message: 'Usuario actualizado',
        user: usr
    });
});

// DELETE
app.delete('/user', (req, res) => {
    usr = {};
    res.json({
        message: 'Usuario eliminado'
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
