const express = require('express');
const cors = require('cors');

const rutasProductos = require('./rutas/productos');
const rutasCarrito = require('./rutas/carrito');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/productos', rutasProductos);
app.use('/carrito', rutasCarrito);

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});