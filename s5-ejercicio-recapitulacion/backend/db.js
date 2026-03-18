const Database = require('better-sqlite3');
const path = require('path');

// Creamos o abrimos el archivo de la base de datos
const db = new Database(path.join(__dirname, 'tienda.db'));

// 1. Crear tabla de Productos
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  )
`);

// 2. Crear tabla de Carrito (Relacionada con productos)
db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  )
`);

// 3. Insertar productos de ejemplo si la tabla está vacía
const row = db.prepare('SELECT count(*) as count FROM products').get();
if (row.count === 0) {
    const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
    insert.run('Laptop Gamer', 1200, 'https://via.placeholder.com/150');
    insert.run('Mouse Óptico', 25, 'https://via.placeholder.com/150');
    insert.run('Teclado Mecánico', 80, 'https://via.placeholder.com/150');
    insert.run('Monitor 4K', 350, 'https://via.placeholder.com/150');
    insert.run('Audífonos Pro', 120, 'https://via.placeholder.com/150');
    console.log("Productos iniciales insertados.");
}

module.exports = db;