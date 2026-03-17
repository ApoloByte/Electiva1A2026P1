const Database = require('better-sqlite3');
const db = new Database('./datos.db', { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id)
  )
`);

const row = db.prepare('SELECT count(*) as count FROM products').get();
if (row.count === 0) {
  const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
  insert.run('Laptop Pro', 1200, '');
  insert.run('Mouse Inalámbrico', 25, '');
  insert.run('Teclado Mecánico', 75, '');
  insert.run('Monitor 4K', 400, '');
  insert.run('Audífonos BT', 60, '');
}

module.exports = db;