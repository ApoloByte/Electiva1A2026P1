const Database = require('better-sqlite3');
require('dotenv').config();

const dbPath = process.env.DB_PATH || './tienda.db';

const db = new Database(dbPath);

// Habilitar modo WAL para mejor rendimiento
db.pragma('journal_mode = WAL');

// Crear tabla de productos
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    price     NUMERIC NOT NULL,
    image_url TEXT
  )
`);

// Crear tabla de ítems del carrito
db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity   INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  )
`);

// Insertar productos de ejemplo solo si la tabla está vacía
const productCount = db.prepare('SELECT COUNT(*) AS count FROM products').get();

if (productCount.count === 0) {
  const insertProduct = db.prepare(
    'INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)'
  );

  const sampleProducts = [
    ['Teclado Mecánico RGB', 89.99, 'https://placehold.co/200x150?text=Teclado'],
    ['Mouse Inalámbrico', 45.50, 'https://placehold.co/200x150?text=Mouse'],
    ['Monitor 24" Full HD', 249.00, 'https://placehold.co/200x150?text=Monitor'],
    ['Auriculares Bluetooth', 59.99, 'https://placehold.co/200x150?text=Auriculares'],
    ['Webcam 1080p', 39.90, 'https://placehold.co/200x150?text=Webcam'],
    ['Hub USB-C 7 puertos', 29.95, 'https://placehold.co/200x150?text=Hub+USB'],
    ['Alfombrilla Gaming XL', 18.00, 'https://placehold.co/200x150?text=Alfombrilla'],
  ];

  const insertMany = db.transaction((products) => {
    for (const [name, price, image_url] of products) {
      insertProduct.run(name, price, image_url);
    }
  });

  insertMany(sampleProducts);
  console.log('Productos de ejemplo insertados correctamente.');
}

module.exports = db;
