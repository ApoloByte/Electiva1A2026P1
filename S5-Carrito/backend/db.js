// carga las variables de entorno desde el archivo .env
require("dotenv").config();

const Database = require("better-sqlite3");
const path = require("path");

// ruta de la base de datos tomada de la variable de entorno
const DB_PATH = process.env.DB_PATH || "./tienda.db";

// abre o crea el archivo de base de datos sqlite
const db = new Database(path.resolve(DB_PATH));

// activa modo wal y habilita las foreign keys
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// crea las tablas si no existen
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    name      TEXT    NOT NULL,
    price     REAL    NOT NULL,
    image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS cart_items (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    quantity   INTEGER NOT NULL CHECK(quantity > 0)
  );
`);

// inserta productos de ejemplo solo si la tabla esta vacia
const count = db.prepare("SELECT COUNT(*) AS n FROM products").get().n;

if (count === 0) {
  const insert = db.prepare(
    "INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)"
  );

  // lista de productos iniciales
  const products = [
    ["Auriculares Bluetooth Pro", 89.99,  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"],
    ["Smartwatch Series X",       149.99, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"],
    ["Teclado Mecanico RGB",       74.99, "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"],
    ["Mouse Inalambrico",          39.99, "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"],
    ["Webcam HD 1080p",            59.99, "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400"],
    ["Hub USB-C 7 en 1",           49.99, "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400"],
    ["Altavoz Bluetooth Portátil",   64.99, "https://picsum.photos/seed/speaker/400/300"],
    ["Cámara de Seguridad WiFi",     89.99, "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400"],
    ["Lámpara LED Inteligente",      29.99, "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400"],
    ["Soporte Ajustable para Laptop",34.99, "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"],
    ["Tablet Android 10 pulgadas",  199.99, "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=400"],
    ["Disco SSD Portátil 1TB",      129.99, "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400"],
    ["Micrófono USB para Streaming", 79.99, "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400"],
    ["Silla Gamer Ergonómica",      249.99, "https://picsum.photos/seed/speaker/400/300"],
    ["Monitor Curvo 27 pulgadas",   329.99, "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400"],
    ["Base de Carga Inalámbrica",    24.99, "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400"],
    ];

  // inserta todos los productos dentro de una transaccion
  const insertMany = db.transaction((rows) => {
    for (const row of rows) insert.run(...row);
  });

  insertMany(products);
  console.log("productos de ejemplo insertados");
}

module.exports = db;