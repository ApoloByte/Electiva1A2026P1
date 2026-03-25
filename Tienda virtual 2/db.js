require('dotenv').config();
const fs   = require('fs');
const path = require('path');
const initSqlJs = require('sql.js');

const dbPath = path.resolve(process.env.DB_PATH || './tienda.db');

let db; // instancia de la BD en memoria

// ─── Persiste la BD en disco ─────────────────────────────────────────────────
function persistDb() {
  const data = db.export();
  fs.writeFileSync(dbPath, Buffer.from(data));
}

// ─── Devuelve todas las filas como array de objetos ──────────────────────────
function all(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

// ─── Devuelve una sola fila (o undefined) ────────────────────────────────────
function get(sql, params = []) {
  return all(sql, params)[0];
}

// ─── Ejecuta SQL que modifica datos → { changes, lastInsertRowid } ───────────
function run(sql, params = []) {
  db.run(sql, params);
  const changes = db.getRowsModified();
  const lastRow = get('SELECT last_insert_rowid() as id');
  persistDb();
  return { changes, lastInsertRowid: lastRow ? lastRow.id : null };
}

// ─── Inicialización (llamar una vez al arrancar) ──────────────────────────────
async function initDb() {
  const SqlJs = await initSqlJs();

  // Cargar BD existente o crear nueva en memoria
  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new SqlJs.Database(fileBuffer);
  } else {
    db = new SqlJs.Database();
  }

  // Crear tablas
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      name      TEXT NOT NULL,
      price     REAL NOT NULL,
      image_url TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS cart_items (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      quantity   INTEGER NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `);

  // Insertar productos de ejemplo si la tabla está vacía
  const count = get('SELECT COUNT(*) as total FROM products');
  if (!count || count.total === 0) {
    const productos = [
      ['Laptop Gamer Pro',            1299.99, 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400'],
      ['Mouse Inalámbrico Ergonómico',   45.50, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400'],
      ['Teclado Mecánico RGB',           89.99, 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'],
      ['Monitor 27" 4K',                549.00, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'],
      ['Auriculares Bluetooth',          120.00, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
      ['Webcam HD 1080p',                65.00, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400'],
      ['Hub USB-C 7 en 1',               39.99, 'https://images.unsplash.com/photo-1618410320928-25228d811631?w=400'],
    ];

    for (const [name, price, image_url] of productos) {
      db.run('INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)', [name, price, image_url]);
    }

    persistDb();
    console.log('Productos de ejemplo insertados.');
  }

  console.log('Base de datos lista.');
}

module.exports = { initDb, all, get, run };
