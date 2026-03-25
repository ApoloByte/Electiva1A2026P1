const express = require('express'); // Importamos Express para crear el servidor y manejar rutas 
const bodyParser = require('body-parser'); // Importamos body-parser para parsear el cuerpo de las solicitudes POST y PUT
const cors = require('cors');  // Importamos cors para permitir solicitudes desde diferentes orígenes (útil para desarrollo frontend y backend separados)

const app = express(); // Creamos una instancia de Express

app.use(bodyParser.json()); // Configuramos body-parser para que pueda manejar solicitudes con cuerpo en formato JSON
app.use(cors()); // Configuramos CORS para permitir solicitudes desde cualquier origen 

let usr = {
    name: 'María',
    age: 33,
    email: 'maria@gmail.com'
}; // Creamos un objeto de usuario con información inicial

app.get('/user', (req, res) => {
    res.json(usr);
}); // Definimos una ruta GET para obtener la información del usuario, que responde con el objeto usr en formato JSON

app.post('/user', (req, res) => {
    const { name, age, email } = req.body; // Extraemos las propiedades name, age y email del cuerpo de la solicitud

    usr = { name, age, email }; // Actualizamos el objeto usr con los nuevos valores recibidos en la solicitud

    res.json({
        message: 'Usuario actualizado',
        usr
    }); // Definimos una ruta POST para actualizar la información del usuario. El servidor espera recibir un objeto JSON con las propiedades name, age y email en el cuerpo de la solicitud. Luego, actualiza el objeto usr con los nuevos valores y responde con un mensaje de confirmación y el nuevo objeto usr.
});

app.put('/user', (req, res) => {
    const { name, age, email } = req.body;

    if (name) usr.name = name; // Si se proporciona un nuevo valor para name en el cuerpo de la solicitud, actualizamos la propiedad name del objeto usr. De lo contrario, mantenemos el valor actual.
    if (age) usr.age = age;
    if (email) usr.email = email;

    res.json({
        message: 'Usuario modificado',
        usr
    });
});// Definimos una ruta PUT para modificar la información del usuario. El servidor espera recibir un objeto JSON con las propiedades name, age y email en el cuerpo de la solicitud. Luego, actualiza solo las propiedades que se proporcionan en el objeto usr y responde con un mensaje de confirmación y el nuevo objeto usr.

app.delete('/user', (req, res) => {
    usr = {}; // Vaciamos el objeto usr para eliminar la información del usuario

    res.json({
        message: 'Usuario eliminado'
    });
});// Definimos una ruta DELETE para eliminar la información del usuario. El servidor simplemente vacía el objeto usr y responde con un mensaje de confirmación de que el usuario ha sido eliminado.

app.get('/hello/:name', (req, res) => {
    res.send(`Hola, ${req.params.name}`);
}); // Definimos una ruta GET con un parámetro dinámico :name. Cuando se accede a esta ruta, el servidor responde con un mensaje de saludo que incluye el valor del parámetro name proporcionado en la URL.

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
}); // Iniciamos el servidor en el puerto 3000 y mostramos un mensaje en la consola para indicar que el servidor está corriendo.
