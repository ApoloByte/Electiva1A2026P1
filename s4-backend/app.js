const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const usr = {
    name: 'María',
    age: '33',
    email: 'maria.gmail.com'
};

// TODO: Rutas implementadas
app.get('/user', (res) => {
    res.json(usr);
});

app.post('/user', (req, res) => {
    Object.assign(usr, req.body);
    res.json(usr);
});

app.put('/user', (req, res) => {
    Object.assign(usr, req.body);
    res.json(usr);
});

app.delete('/user', (res) => {
    Object.keys(usr).forEach(key => delete usr[key]);
    res.json({ message: 'Usuario eliminado' });
});



// TODO: Iniciar el servidor
app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});