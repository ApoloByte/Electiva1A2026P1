-- ============================================================
-- Script SQL: Tienda Virtual
-- Motor: SQLite (compatible con better-sqlite3)
-- ============================================================

-- Tabla de productos
CREATE TABLE IF NOT EXISTS products (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  name      TEXT    NOT NULL,
  price     REAL    NOT NULL,
  image_url TEXT
);

-- Tabla de ítems del carrito
CREATE TABLE IF NOT EXISTS cart_items (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id INTEGER NOT NULL,
  quantity   INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- ============================================================
-- Datos de ejemplo
-- ============================================================
INSERT INTO products (name, price, image_url) VALUES
  ('Teclado Mecánico RGB',  149900, 'https://placehold.co/300x200?text=Teclado'),
  ('Mouse Inalámbrico',      79900, 'https://placehold.co/300x200?text=Mouse'),
  ('Monitor 24" Full HD',   699900, 'https://placehold.co/300x200?text=Monitor'),
  ('Auriculares Bluetooth', 189900, 'https://placehold.co/300x200?text=Auriculares'),
  ('Webcam 1080p',          129900, 'https://placehold.co/300x200?text=Webcam'),
  ('Hub USB-C 7 puertos',    89900, 'https://placehold.co/300x200?text=Hub+USB');

