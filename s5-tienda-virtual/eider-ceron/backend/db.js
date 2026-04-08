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
    insertProduct.run('Teclado Mecánico RGB',  149900, 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop');
    insertProduct.run('Mouse Inalámbrico',      79900, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=200&fit=crop');
    insertProduct.run('Monitor 24" Full HD',   699900, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop');
    insertProduct.run('Auriculares Bluetooth', 189900, 'https://unsplash.com/es/fotos/un-par-de-auriculares-sentados-uno-al-lado-del-otro-JphZSKMy2qA');
    insertProduct.run('Webcam 1080p',          129900, 'https://unsplash.com/es/fotos/microfono-negro-y-gris-en-microfono-negro-y-gris-VAoSKP_ocN0');
    insertProduct.run('Hub USB-C 7 puertos',    89900, 'https://unsplash.com/es/fotos/concentrador-usb-negro-con-siete-puertos-y-conmutadores-XxvKhAUs2PA');
  });

  seedProducts();
  console.log('✅ Productos de ejemplo insertados.');
}

module.exports = db;
