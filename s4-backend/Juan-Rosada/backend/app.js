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



//FUNCION ASINCRONA

function setDataUserElement(user) {
    let dataUser = document.getElementById("data-user");
    if (dataUser) {
        dataUser.textContent = JSON.stringify(user, null, 2);
    }
}

async function fetchUser() {
    try {
        const respuesta = await fetch("http://localhost:3000/user");
        const data = await respuesta.json();
        setDataUserElement(data);
        console.log("data", data);
    } catch (error) {
        console.error("Error al obtener data:", error);
    }
}
fetchUser();

//node ./app.js