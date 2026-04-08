require('dotenv').config();
const Database = require('better-sqlite3');

// Crear base de datos
const db = new Database(process.env.DB_NAME || 'database.sqlite');

// CREAR TABLAS
db.prepare(`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
)
`).run();

db.prepare(`
CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    FOREIGN KEY(product_id) REFERENCES products(id)
)
`).run();


// INSERTAR PRODUCTOS SI NO HAY
const count = db.prepare("SELECT COUNT(*) as total FROM products").get();

if (count.total === 0) {
    const insert = db.prepare("INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)");

    insert.run("Laptop", 2500, "");
    insert.run("Mouse", 50, "");
    insert.run("Teclado", 120, "");
    insert.run("Audífonos", 200, "");
    insert.run("Monitor", 800, "");
}

module.exports = db;