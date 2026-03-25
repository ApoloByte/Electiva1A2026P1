const express = require('express');  //crea el servidor
const cors = require('cors'); //permite la conexion con el fronted 


const db = require('./db');  //db conecta con la base de datos 


const app = express(); // crea la instancia del servidor

app.use(cors()); //permite la conexion con el fronted
app.use(express.json()); //permite leer el json 

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor funcionando '); //prueba para verificar que el servidor esta funcionando
});

// Obtener productos
app.get('/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all(); // sin el db.prepare no se puede ejecutar la consulta a la base de datos
    res.json(products); //devuelve los productos en formato json al fronted
});

// Obtener producto por ID
app.get('/products/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?')
        .get(req.params.id); // 

    res.json(product); 
});


// Agregar actualizar producto en el carrito
app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body; // extrae los datos del fronted 

    if (!productId || !quantity) {
        return res.status(400).json({ error: 'Faltan datos' }); // valida que este los datos
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

    const total = items.reduce((sum, item) => sum + item.total, 0); // calcula el total del carrito sumando el total de cada item

    res.json({ items, total }); // devuelve los items del carrito y el total en formato json al fronted
});

// Eliminar producto del carrito
app.delete('/cart/:id', (req, res) => {
    db.prepare('DELETE FROM cart_items WHERE id = ?')
        .run(req.params.id); // elimina el producto del carrito por su id

    res.json({ message: 'Producto eliminado del carrito' });
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

