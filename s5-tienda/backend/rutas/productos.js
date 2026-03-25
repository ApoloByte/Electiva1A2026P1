const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const productos = db.prepare("SELECT * FROM productos").all();
    res.json(productos);
});

module.exports = router;