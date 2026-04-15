const Database = require('better-sqlite3');
const db = new Database('tienda.db');

// Crear las tablas si no existen
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

// Insertar productos de prueba
const checkProducts = db.prepare('SELECT count(*) as count FROM products').get();
if (checkProducts.count === 0) {
  const insert = db.prepare('INSERT INTO products (name, price) VALUES (?, ?)');
  insert.run('Laptop Gamer', 3500000);
  insert.run('Mouse Ergonómico', 85000);
  insert.run('Teclado Mecánico', 250000);
  insert.run('Monitor 24"', 750000);
  insert.run('Audífonos Pro', 180000);
}

module.exports = db;