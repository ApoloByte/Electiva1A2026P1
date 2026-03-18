const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('database.db');
const port = 3000;

app.use(express.json());
app.use(cors());

// GET /products: devuelve todos los productos
app.get('/products', (req, res) => {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

// GET /products/:id: devuelve un producto por id
app.get('/products/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// POST /products: Insertar un nuevo producto 
app.post('/products', (req, res) => {
    const { name, price, image_url } = req.body;

    // Validación de campos
    if (!name || !price) {
        return res.status(400).json({ error: 'El nombre y el precio son obligatorios' });
    }

    try {
        const statement = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
        const info = statement.run(name, price, image_url);
        
        res.status(201).json({ 
            id: info.lastInsertRowid, 
            message: 'Producto creado correctamente' 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al insertar el producto en la base de datos' });
    }
});

// GET /cart: devuelve ítems con datos del producto y total
app.get('/cart', (req, res) => {
    const query = `
        SELECT cart_items.id, products.name, products.price, cart_items.quantity, 
        (products.price * cart_items.quantity) AS total_item
        FROM cart_items
        JOIN products ON cart_items.product_id = products.id
    `;
    const items = db.prepare(query).all();
    
    // Cálculo del total general del carrito
    const totalCarrito = items.reduce((sum, item) => sum + item.total_item, 0);
    
    res.json({ items, total_general: totalCarrito });
});

// POST /cart: agrega o actualiza ítem
app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    
    // Verificamos si ya existe el producto en el carrito
    const existing = db.prepare('SELECT id, quantity FROM cart_items WHERE product_id = ?').get(productId);

    if (existing) {
        // Actualizamos la cantidad sumando la nueva
        const newQuantity = existing.quantity + quantity;
        db.prepare('UPDATE cart_items SET quantity = ? WHERE product_id = ?').run(newQuantity, productId);
        res.json({ message: 'Cantidad actualizada en el carrito' });
    } else {
        // Agregamos nuevo ítem
        db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)').run(productId, quantity);
        res.status(201).json({ message: 'Producto agregado al carrito' });
    }
});

// DELETE /cart/:id: elimina un ítem por su id (id del carrito)
app.delete('/cart/:id', (req, res) => {
    const result = db.prepare('DELETE FROM cart_items WHERE id = ?').run(req.params.id);
    if (result.changes > 0) {
        res.json({ message: 'Ítem eliminado del carrito' });
    } else {
        res.status(404).json({ error: 'Ítem no encontrado' });
    }
});

// DELETE /cart: vacía todo el carrito
app.delete('/cart', (req, res) => {
    db.prepare('DELETE FROM cart_items').run();
    res.json({ message: 'Carrito vaciado correctamente' });
});

// DELETE /products/:id: Elimina un producto por su ID 
app.delete('/products/:id', (req, res) => {
    try {
        const { id } = req.params;
        
        // Verificamos si el producto está siendo usado en el carrito para mantener integridad
        const isUsed = db.prepare('SELECT id FROM cart_items WHERE product_id = ?').get(id);
        
        if (isUsed) {
            return res.status(400).json({ 
                error: 'No se puede eliminar el producto porque está en el carrito' 
            });
        }

        const result = db.prepare('DELETE FROM products WHERE id = ?').run(id);

        if (result.changes > 0) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al intentar eliminar el producto' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});