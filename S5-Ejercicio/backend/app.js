const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/products", (request, response) => {
  const products = db.prepare("SELECT * FROM products").all();
  response.json(products);
});

app.get("/products/:id", (request, response) => {
  const productId = Number(request.params.id);
  const product = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(productId);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  response.json(product);
});

app.get("/cart", (request, response) => {
  const cartItems = db
    .prepare(
      `
      SELECT
        cart_items.id,
        products.name,
        products.price,
        cart_items.quantity,
        (products.price * cart_items.quantity) AS subtotal
      FROM cart_items
      INNER JOIN products ON products.id = cart_items.product_id
    `
    )
    .all();

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  response.json({ items: cartItems, total });
});

app.post("/cart", (request, response) => {
  const { productId, quantity } = request.body;
  const product = db.prepare("SELECT id FROM products WHERE id = ?").get(productId);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
    return;
  }

  const existingCartItem = db
    .prepare("SELECT id, quantity FROM cart_items WHERE product_id = ?")
    .get(productId);

  if (existingCartItem) {
    const newQuantity = existingCartItem.quantity + quantity;
    db.prepare("UPDATE cart_items SET quantity = ? WHERE id = ?").run(
      newQuantity,
      existingCartItem.id
    );
  } else {
    db.prepare("INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)").run(
      productId,
      quantity
    );
  }

  response.json({ message: "Cart updated" });
});

app.delete("/cart/:id", (request, response) => {
  const cartItemId = Number(request.params.id);
  const result = db.prepare("DELETE FROM cart_items WHERE id = ?").run(cartItemId);

  if (result.changes === 0) {
    response.status(404).json({ message: "Cart item not found" });
    return;
  }

  response.json({ message: "Cart item deleted" });
});

app.delete("/cart", (request, response) => {
  db.prepare("DELETE FROM cart_items").run();
  response.json({ message: "Cart cleared" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
