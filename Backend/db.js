require("dotenv").config();
const Database = require("better-sqlite3");

const db = new Database(process.env.DB_NAME);

// Crear tabla productos
db.prepare(`
CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
price REAL NOT NULL,
image_url TEXT
)
`).run();

// Crear tabla carrito
db.prepare(`
CREATE TABLE IF NOT EXISTS cart_items (
id INTEGER PRIMARY KEY AUTOINCREMENT,
product_id INTEGER,
quantity INTEGER NOT NULL,
FOREIGN KEY(product_id) REFERENCES products(id)
)
`).run();

// Insertar productos si la tabla está vacía
const count = db.prepare("SELECT COUNT(*) as total FROM products").get();

if(count.total === 0){

const insert = db.prepare(`
INSERT INTO products (name, price, image_url)
VALUES (?, ?, ?)
`);

insert.run("Labial Rojo",25000,"");
insert.run("Base Liquida",45000,"");
insert.run("Rimel Volumen",30000,"");
insert.run("Sombras Nude",55000,"");
insert.run("Delineador Negro",20000,"");

}

module.exports = db;