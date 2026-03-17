const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());


const usr = {

	name: 'María',
	
	age: '33',
	
	email: 'maria.gmail.com'
    };


app.use(cors()); // Habilitar CORS para todas las rutas



app.get('/hello/:name', (req, res) => {
    const nombre = req.params.name; 
    res.send(`¡Hola, ${nombre}!`);
});



app.get('/user', (req, res) => {
	res.json(usr); // envía el objeto literal al cliente
});
// TODO: CREAR AQUÍ LOS DEMÁS MÉTODOS
app.listen(3000, () => {
	console.log('El servidor está escuchando en el puerto 3000');
}); 


// Método POST: Para recibir datos
app.post('/user', (req, res) => {
    const nuevoUsuario = req.body; // Aquí llega lo que escribes en el Body de Postman
    console.log(nuevoUsuario); 
    res.json({ message: "Usuario recibido con éxito", data: nuevoUsuario });
});

// Método PUT: Para simular actualización
app.put('/user', (req, res) => {
    res.json({ message: "Usuario actualizado (simulado)" });
});

// Método DELETE: Para simular eliminación
app.delete('/user', (req, res) => {
    res.json({ message: "Usuario eliminado (simulado)" });
});






//node ./app.js