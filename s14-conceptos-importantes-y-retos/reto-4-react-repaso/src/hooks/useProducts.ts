import { useState } from 'react';

export interface Category {
  name: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  image_url: string;
  category: Category;
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}

const INITIAL_PRODUCTS: Product[] = [
  { name: 'Jabón', description: 'Jabón antibacterial para manos', image_url: '', category: { name: 'Aseo', description: 'Productos de limpieza general' }, quantity: 10, price: 3500, height: 10, width: 5, length: 3, isEnabled: true },
  { name: 'Esponja', description: 'Esponja para lavar platos', image_url: '', category: { name: 'Aseo', description: 'Productos de limpieza general' }, quantity: 25, price: 1500, height: 8, width: 6, length: 2, isEnabled: true },
  { name: 'Escoba', description: 'Escoba de cerdas suaves', image_url: '', category: { name: 'Aseo', description: 'Productos de limpieza general' }, quantity: 5, price: 8000, height: 120, width: 30, length: 5, isEnabled: false },
  { name: 'Trapero', description: 'Trapero de algodón absorbente', image_url: '', category: { name: 'Aseo', description: 'Productos de limpieza general' }, quantity: 8, price: 7000, height: 130, width: 15, length: 5, isEnabled: true },
  { name: 'Ambientador', description: 'Ambientador spray olor lavanda', image_url: '', category: { name: 'Hogar', description: 'Elementos para la casa' }, quantity: 12, price: 9500, height: 20, width: 6, length: 6, isEnabled: true },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://electiva5-api.apolobyte.top/products');
      const data: Product[] = await res.json();
      setProducts(data);
    } catch (err) {
      console.error('Error al obtener productos:', err);
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, fetchProducts };
}
