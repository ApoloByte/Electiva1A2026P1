const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const items = db.prepare(`
        SELECT carrito.id, productos.nombre, productos.precio, carrito.cantidad,
        (productos.precio * carrito.cantidad) as subtotal
        FROM carrito
        JOIN productos ON productos.id = carrito.producto_id
    `).all();

    const total = items.reduce((acc, item) => acc + item.subtotal, 0);

    res.json({ items, total });
});

router.post('/', (req, res) => {
    const { productId } = req.body;

    const existe = db.prepare("SELECT * FROM carrito WHERE producto_id = ?").get(productId);

    if (existe) {
        db.prepare("UPDATE carrito SET cantidad = cantidad + 1 WHERE producto_id = ?")
          .run(productId);
    } else {
        db.prepare("INSERT INTO carrito (producto_id, cantidad) VALUES (?, 1)")
          .run(productId);
    }

    res.json({ ok: true });
});

router.delete('/', (req, res) => {
    db.prepare("DELETE FROM carrito").run();
    res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
    db.prepare("DELETE FROM carrito WHERE id = ?").run(req.params.id);
    res.json({ ok: true });
});

module.exports = router;