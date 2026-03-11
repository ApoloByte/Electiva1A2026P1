import express, { Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

import db from './db/main';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Servidor funcionando' });
});

import productsRouter from './routes/products';
import cartRouter from './routes/cart';

app.use('/products', productsRouter);
app.use('/cart', cartRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

export default app;
