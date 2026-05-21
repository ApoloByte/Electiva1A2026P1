const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /products — lista todos los productos
router.get('/', (req, res) => {
  try {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos', detail: err.message });
  }
});

// GET /products/:id — obtiene un producto por id
router.get('/:id', (req, res) => {
  try {
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el producto', detail: err.message });
  }
});

module.exports = router;
