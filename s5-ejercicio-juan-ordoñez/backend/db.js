const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config();

const dbPath = process.env.DB_PATH || path.join(__dirname, 'database.db');
const db = new Database(dbPath);

// Crear tabla products
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  )
`).run();

// Crear tabla cart_items
db.prepare(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  )
`).run();

// Insertar productos de ejemplo (solo si no existen)
const count = db.prepare('SELECT COUNT(*) AS count FROM products').get().count;
if (count === 0) {
  const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
  insert.run('Camiseta', 15000, 'https://via.placeholder.com/150');
  insert.run('Pantalón', 30000, 'https://via.placeholder.com/150');
  insert.run('Zapatos', 45000, 'https://via.placeholder.com/150');
  insert.run('Gorra', 10000, 'https://via.placeholder.com/150');
  insert.run('Mochila', 35000, 'https://via.placeholder.com/150');
}

module.exports = db;