require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

// Ruta raíz informativa
app.get('/', (req, res) => {
  res.json({
    message: 'API Tienda Virtual',
    endpoints: {
      products: ['GET /products', 'GET /products/:id'],
      cart: [
        'GET /cart',
        'POST /cart',
        'DELETE /cart/:id',
        'DELETE /cart',
      ],
    },
  });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
