const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  try {
    const items = db.prepare(`
      SELECT
        ci.id,
        ci.product_id,
        ci.quantity,
        p.name,
        p.price,
        p.image_url,
        (ci.quantity * p.price) AS subtotal
      FROM cart_items ci
      JOIN products p ON p.id = ci.product_id
    `).all();

    const total = items.reduce((sum, item) => sum + item.subtotal, 0);
    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el carrito', detail: err.message });
  }
});

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ error: 'productId y quantity (>= 1) son requeridos' });
  }
  try {
    const product = db.prepare('SELECT id FROM products WHERE id = ?').get(productId);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    const existing = db.prepare('SELECT id, quantity FROM cart_items WHERE product_id = ?').get(productId);
    if (existing) {
      db.prepare('UPDATE cart_items SET quantity = ? WHERE id = ?').run(existing.quantity + quantity, existing.id);
    } else {
      db.prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)').run(productId, quantity);
    }
    res.status(201).json({ message: 'Ítem agregado/actualizado en el carrito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar al carrito', detail: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const result = db.prepare('DELETE FROM cart_items WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Ítem no encontrado' });
    res.json({ message: 'Ítem eliminado del carrito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el ítem', detail: err.message });
  }
});

router.delete('/', (req, res) => {
  try {
    db.prepare('DELETE FROM cart_items').run();
    res.json({ message: 'Carrito vaciado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al vaciar el carrito', detail: err.message });
  }
});

module.exports = router;