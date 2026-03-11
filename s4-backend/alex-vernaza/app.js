const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const usr = {

	name: 'María',
	
	age: '33',
	
	email: 'maria.gmail.com'

};

app.use(cors()); // Habilitar CORS para todas las rutas

app.get('/user', (req, res) => {
	res.json(usr); // envía el objeto literal al cliente
});
// TODO: CREAR AQUÍ LOS DEMÁS MÉTODOS
app.listen(3000, () => {
	console.log('El servidor está escuchando en el puerto 3000');
});