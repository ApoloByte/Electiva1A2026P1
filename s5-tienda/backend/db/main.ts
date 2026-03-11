import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const dbPath = process.env.DB_PATH ?? './tienda.db';
const resolvedPath = path.resolve(dbPath);

const db = new Database(resolvedPath);
console.log(`Conexión exitosa a la base de datos: ${resolvedPath}`);

db.exec(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);
console.log("Tabla 'productos' creada correctamente");

db.exec(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);
console.log("Tabla 'clientes' creada correctamente");

db.exec(`
  CREATE TABLE IF NOT EXISTS ordenes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER REFERENCES clientes(id),
    total REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);
console.log("Tabla 'ordenes' creada correctamente");

db.exec(`
  CREATE TABLE IF NOT EXISTS cart_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL REFERENCES productos(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);
console.log("Tabla 'cart_items' creada correctamente");

/* db.exec(`
INSERT INTO productos (nombre, precio, stock) VALUES
  ('Laptop', 899.99,  10),
  ('Mouse Inalambrico', 299.99, 20),
  ('USB-C Cable', 149.99, 15),
  ('Monitor 24"', 1999.99, 5),
  ('Teclado Mecanico', 499.99, 8)
`);
console.log("Datos de ejemplo insertados en 'productos'");
*/
export default db;