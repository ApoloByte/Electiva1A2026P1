// carga las variables de entorno
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares globales
app.use(cors());
app.use(express.json());


// --- rutas de productos ---

// devuelve todos los productos
app.get("/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

// devuelve un producto por su id
app.get("/products/:id", (req, res) => {
  const product = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(req.params.id);

  if (!product) {
    return res.status(404).json({ error: "producto no encontrado" });
  }

  res.json(product);
});


// --- rutas del carrito ---

// devuelve todos los items del carrito con datos del producto y el total
app.get("/cart", (req, res) => {
  const items = db
    .prepare(`
      SELECT
        ci.id,
        ci.product_id,
        ci.quantity,
        p.name,
        p.price,
        p.image_url,
        ROUND(p.price * ci.quantity, 2) AS subtotal
      FROM cart_items ci
      JOIN products p ON p.id = ci.product_id
    `)
    .all();

  // calcula el total sumando los subtotales de cada item
  const total = Math.round(
    items.reduce((sum, item) => sum + item.subtotal, 0) * 100
  ) / 100;

  res.json({ items, total });
});

// agrega un item al carrito o incrementa su cantidad si ya existe
app.post("/cart", (req, res) => {
  const { productId, quantity = 1 } = req.body;

  if (!productId) {
    return res.status(400).json({ error: "productId es requerido" });
  }

  if (quantity < 1) {
    return res.status(400).json({ error: "quantity debe ser al menos 1" });
  }

  // verifica que el producto exista antes de agregarlo
  const product = db
    .prepare("SELECT id FROM products WHERE id = ?")
    .get(productId);

  if (!product) {
    return res.status(404).json({ error: "producto no encontrado" });
  }

  // si el producto ya esta en el carrito, suma la cantidad
  const existing = db
    .prepare("SELECT id, quantity FROM cart_items WHERE product_id = ?")
    .get(productId);

  if (existing) {
    db.prepare("UPDATE cart_items SET quantity = ? WHERE id = ?").run(
      existing.quantity + quantity,
      existing.id
    );
  } else {
    db.prepare(
      "INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)"
    ).run(productId, quantity);
  }

  res.status(201).json({ message: "item agregado al carrito" });
});

// elimina un item del carrito por su id
app.delete("/cart/:id", (req, res) => {
  const result = db
    .prepare("DELETE FROM cart_items WHERE id = ?")
    .run(req.params.id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "item no encontrado en el carrito" });
  }

  res.json({ message: "item eliminado del carrito" });
});

// vacia todo el carrito
app.delete("/cart", (req, res) => {
  db.prepare("DELETE FROM cart_items").run();
  res.json({ message: "carrito vaciado" });
});


// inicia el servidor
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});