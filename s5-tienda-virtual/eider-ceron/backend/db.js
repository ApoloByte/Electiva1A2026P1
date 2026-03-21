const Database = require('better-sqlite3');
require('dotenv').config();

const DB_PATH = process.env.DB_PATH || './tienda.db';

const db = new Database(DB_PATH);

// Activar foreign keys
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Crear tabla products
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    name    TEXT    NOT NULL,
    price   REAL    NOT NULL,
    image_url TEXT
  )
`);

// Crear tabla cart_items
db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity   INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  )
`);

// Insertar productos de ejemplo solo si la tabla está vacía
const productCount = db.prepare('SELECT COUNT(*) AS count FROM products').get();

if (productCount.count === 0) {
  const insertProduct = db.prepare(
    'INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)'
  );

  const seedProducts = db.transaction(() => {
    insertProduct.run('Teclado Mecánico RGB',       149900, 'https://placehold.co/300x200?text=Teclado');
    insertProduct.run('Mouse Inalámbrico',           79900, 'https://placehold.co/300x200?text=Mouse');
    insertProduct.run('Monitor 24" Full HD',        699900, 'https://placehold.co/300x200?text=Monitor');
    insertProduct.run('Auriculares Bluetooth',      189900, 'https://placehold.co/300x200?text=Auriculares');
    insertProduct.run('Webcam 1080p',               129900, 'https://placehold.co/300x200?text=Webcam');
    insertProduct.run('Hub USB-C 7 puertos',         89900, 'https://placehold.co/300x200?text=Hub+USB');
  });

  seedProducts();
  console.log('✅ Productos de ejemplo insertados.');
}

module.exports = db;
