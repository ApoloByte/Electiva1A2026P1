const Database = require('better-sqlite3');

// Crear o abrir la base de datos
const db = new Database('database.db', { verbose: console.log });

// Habilitar llaves foráneas
db.pragma('foreign_keys = ON');

console.log('--- Configurando tablas ---');

// 1. Crear tabla 'products'
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  )
`);

// 2. Crear tabla 'cart_items'
db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  )
`);

console.log('✅ Tablas "products" y "cart_items" creadas correctamente.');

db.close();