const express = require('express');  //crea el servidor
const cors = require('cors'); //permite la conexion con el fronted 
require('dotenv').config(); //lee las variables del .env

const db = require('./db');  //db conecta con la base de datos 


const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando ');
});

// Obtener productos
app.get('/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

// Obtener producto por ID
app.get('/products/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?')
        .get(req.params.id);

    res.json(product);
});


// Agregar actualizar producto en el carrito
app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    // Verificar si ya existe en el carrito
    const existing = db.prepare('SELECT * FROM cart_items WHERE product_id = ?')
        .get(productId);

    if (existing) {
        // Actualiza cantidad
        db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE product_id = ?')
            .run(quantity, productId);
    } else {
        // Inserta nuevo
        db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)')
            .run(productId, quantity);
    }

    res.json({ message: 'Producto agregado al carrito' });
});
// Ver carrito con total
app.get('/cart', (req, res) => {
    const items = db.prepare(`
        SELECT cart_items.id, products.name, products.price, cart_items.quantity,
        (products.price * cart_items.quantity) as total
        FROM cart_items
        JOIN products ON products.id = cart_items.product_id
    `).all();

    const total = items.reduce((sum, item) => sum + item.total, 0);

    res.json({ items, total });
});
app.delete('/cart/:id', (req, res) => {
    db.prepare('DELETE FROM cart_items WHERE id = ?')
        .run(req.params.id);

    res.json({ message: 'Producto eliminado del carrito' });
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
