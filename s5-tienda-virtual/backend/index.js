// Librerias necesarias
const express = require('express'); //se crea el servidor
const cors = require('cors');  //permite que el frontend se comunique con el backend
const db = require('./db'); // Importamos la conexion a la base de datos

const app = express();  //app es el servidor
const PORT = 3000;


app.use(cors()); // Permite que el frontend se comunique con el backend
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

//Rutas de productos

// GET /products: Obtener todos los productos
app.get('/products', (req, res) => {
    try {
        // Preparamos la consulta SQL
        const statement = db.prepare('SELECT * FROM products');
        // Ejecutamos la consulta y obtenemos todos los resultados (.all())
        const products = statement.all();
        // Se envía los productos al frontend
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// GET /products/:id: Obtener un solo producto por su ID
app.get('/products/:id', (req, res) => {
    const { id } = req.params;    //se obtiene el id de la url
    try {
        // Usamos .get(id) porque solo esperamos un único resultado
        const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
        
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

// Encender el servidor
app.listen(PORT, () => {
    console.log(`Servidor de la tienda corriendo en http://localhost:${PORT}`);
});




//RUTAS DEL CARRITO

//GET /cart: Obtener los ítems del carrito con info del producto
app.get('/cart', (req, res) => {
    try {
        // se hace un JOIN para unir la tabla cart_items con la de products y asi poder ver el nombre y precio del producto en el carrito
        
        const statement = db.prepare(`
            SELECT cart_items.id, products.name, products.price, cart_items.quantity, 
            (products.price * cart_items.quantity) AS subtotal
            FROM cart_items
            JOIN products ON cart_items.product_id = products.id
        `);
        const cart = statement.all();

        // Calculamos el gran total sumando todos los subtotales
        const total = cart.reduce((acc, item) => acc + item.subtotal, 0);

        res.json({ items: cart, total: total });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
});

// POST /cart: Agregar producto al carrito
app.post('/cart', (req, res) => {
    const { productId, quantity } = req.body; //se recibe datos del frontend

    try {
        // Primero revisamos si el producto ya está en el carrito
        const existingItem = db.prepare('SELECT * FROM cart_items WHERE product_id = ?').get(productId); //tomamos el producto y lo guardamos

        if (existingItem) {
            // Si ya existe, sumamos la nueva cantidad a la anterior
            db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE product_id = ?')
              .run(quantity, productId);
        } else {
            // Si es nuevo, lo insertamos
            db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)')
              .run(productId, quantity);
        }
        res.json({ message: 'Carrito actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar al carrito' });
    }
});

// DELETE /cart/:id: Eliminar un ítem específico por su ID de carrito
app.delete('/cart/:id', (req, res) => {
    const { id } = req.params;  //toma el id
    try {
        db.prepare('DELETE FROM cart_items WHERE id = ?').run(id);  //elima el objeto segun el id
        res.json({ message: 'Ítem eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar ítem' });
    }
});