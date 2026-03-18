const Database = require('better-sqlite3');
const path = require('path');


const db = new Database(path.join(__dirname, 'database.db'));


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
    FOREIGN KEY (product_id) REFERENCES products (id)
  );
`);

// Insertar productos iniciales si no hay
const row = db.prepare('SELECT COUNT(*) as count FROM products').get();
if (row.count === 0) {
    const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
    insert.run('Laptop Pro', 1200.00, '');
    insert.run('Mouse Óptico', 25.50, '');
    insert.run('Teclado Mecánico', 80.00, '');
    insert.run('Monitor 4K', 350.00, '');
    insert.run('Audífonos BT', 60.00, "");
    console.log("Productos iniciales creados.");
}

// Exportamos solo el objeto db
module.exports = db;