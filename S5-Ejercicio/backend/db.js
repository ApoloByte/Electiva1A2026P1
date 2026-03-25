const path = require("path");
const Database = require("better-sqlite3");
require("dotenv").config();

const dbFileName = process.env.DB_FILE || "database.sqlite";
const dbPath = path.resolve(__dirname, dbFileName);
const db = new Database(dbPath);

db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    image_url TEXT
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

const productCountRow = db
  .prepare("SELECT COUNT(*) AS count FROM products")
  .get();

if (productCountRow.count === 0) {
  const insertProduct = db.prepare(`
    INSERT INTO products (name, price, image_url)
    VALUES (@name, @price, @image_url)
  `);

  const sampleProducts = [
    {
      name: "Wireless Mouse",
      price: 24.99,
      image_url: "https://example.com/images/wireless-mouse.jpg",
    },
    {
      name: "Mechanical Keyboard",
      price: 79.5,
      image_url: "https://example.com/images/mechanical-keyboard.jpg",
    },
    {
      name: "USB-C Hub",
      price: 34.0,
      image_url: "https://example.com/images/usb-c-hub.jpg",
    },
    {
      name: "Noise Cancelling Headphones",
      price: 129.99,
      image_url: "https://example.com/images/headphones.jpg",
    },
    {
      name: "Laptop Stand",
      price: 42.25,
      image_url: "https://example.com/images/laptop-stand.jpg",
    },
  ];

  const insertMany = db.transaction((items) => {
    for (const item of items) {
      insertProduct.run(item);
    }
  });

  insertMany(sampleProducts);
}

module.exports = db;
