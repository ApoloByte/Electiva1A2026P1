const Database = require("better-sqlite3");
const db = new Database("store.db");

// Crear tablas
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
  FOREIGN KEY(product_id) REFERENCES products(id)
);
`);

// Insertar productos de ejemplo
const count = db.prepare("SELECT COUNT(*) as c FROM products").get().c;
if (count === 0) {
  const insert = db.prepare("INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)");
  insert.run("Laptop", 1200, "https://via.placeholder.com/150");
  insert.run("Mouse", 25, "https://via.placeholder.com/150");
  insert.run("Teclado", 45, "https://via.placeholder.com/150");
  insert.run("Monitor", 300, "https://via.placeholder.com/150");
  insert.run("Auriculares", 60, "https://via.placeholder.com/150");
}

module.exports = db;