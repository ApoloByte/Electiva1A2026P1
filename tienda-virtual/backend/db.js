const Database = require('better-sqlite3');
require('dotenv').config();

const db = new Database(process.env.DB_NAME || 'tienda.db');

// Tabla productos
db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
)
`).run();

// Tabla carrito
db.prepare(`
CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id)
)
`).run();

// Insertar productos de ejemplo (solo si no hay)
const count = db.prepare('SELECT COUNT(*) as total FROM products').get();

if (count.total === 0) {
    const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');

    insert.run('Camisa', 50000, '');
    insert.run('Pantalón', 80000, '');
    insert.run('Zapatos', 120000, '');
    insert.run('Gorra', 30000, '');
    insert.run('Chaqueta', 150000, '');
}

module.exports = db;
