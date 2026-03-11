import { Router, Request, Response } from 'express';
import db from '../db/main';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const products = db.prepare('SELECT * FROM productos').all();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'id inválido' });

  try {
    const product: any = db
      .prepare('SELECT * FROM productos WHERE id = ?')
      .get(id);
    if (!product)
      return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

export default router;
