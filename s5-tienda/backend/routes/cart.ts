import { Router, Request, Response } from 'express';
import db from '../db/main';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  try {
    const items = db
      .prepare(
        `SELECT ci.id, ci.product_id, ci.quantity, p.nombre, p.precio, p.stock, (ci.quantity * p.precio) as subtotal
       FROM cart_items ci
       LEFT JOIN productos p ON p.id = ci.product_id`
      )
      .all();

    const total = items.reduce(
      (sum: number, it: any) => sum + (it.subtotal ?? 0),
      0
    );
    res.json({ items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
});

router.post('/', (req: Request, res: Response) => {
  const { productId, quantity } = req.body as {
    productId?: number;
    quantity?: number;
  };
  if (!productId || !quantity || quantity <= 0) {
    return res
      .status(400)
      .json({ error: 'productId y quantity válidos son requeridos' });
  }

  try {
    const product: any = db
      .prepare('SELECT * FROM productos WHERE id = ?')
      .get(productId);
    if (!product)
      return res.status(404).json({ error: 'Producto no encontrado' });

    const existing: any = db
      .prepare('SELECT * FROM cart_items WHERE product_id = ?')
      .get(productId);
    if (existing) {
      const newQty = existing.quantity + quantity;
      db.prepare('UPDATE cart_items SET quantity = ? WHERE id = ?').run(
        newQty,
        existing.id
      );
      const updated: any = db
        .prepare('SELECT * FROM cart_items WHERE id = ?')
        .get(existing.id);
      return res.json(updated);
    }

    const result: any = db
      .prepare('INSERT INTO cart_items (product_id, quantity) VALUES (?, ?)')
      .run(productId, quantity);
    const inserted: any = db
      .prepare('SELECT * FROM cart_items WHERE id = ?')
      .get(result.lastInsertRowid as number);
    res.status(201).json(inserted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al agregar al carrito' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'id inválido' });

  try {
    const info = db.prepare('DELETE FROM cart_items WHERE id = ?').run(id);
    if (info.changes === 0)
      return res.status(404).json({ error: 'Item no encontrado' });
    res.json({ deleted: id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar item' });
  }
});

router.delete('/', (req: Request, res: Response) => {
  try {
    db.prepare('DELETE FROM cart_items').run();
    res.json({ emptied: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al vaciar carrito' });
  }
});

export default router;
