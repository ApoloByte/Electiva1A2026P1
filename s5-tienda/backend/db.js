const Database = require('better-sqlite3');
const path = require('path');
require('dotenv').config(); // Necesario para leer el .env aquí

// Novedad: Uso de variable de entorno para la BD (Requisito de la guía)
const dbPath = process.env.DB_PATH || 'data/tienda.db';
const db = new Database(path.join(__dirname, dbPath));

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
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

// Insertar productos de ejemplo si la tabla está vacía
const row = db.prepare('SELECT count(*) as count FROM products').get();
if (row.count === 0) {
  const insert = db.prepare('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)');
  
  // Precios reales en pesos colombianos y fotos de alta calidad
  insert.run('Laptop Gamer ASUS ROG', 4500000, 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=300&q=80');
  insert.run('Mouse Logitech G Pro', 350000, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80');
  insert.run('Teclado Mecánico Redragon', 220000, 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80');
  insert.run('Monitor LG 24" 144Hz', 750000, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80');
  insert.run('Audífonos HyperX Cloud', 420000, 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=300&q=80');
}

module.exports = db;