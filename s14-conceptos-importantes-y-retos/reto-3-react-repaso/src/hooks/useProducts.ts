import { useState } from 'react';
import type { Product } from '../types/product';

export const useProducts = () => {
  // Movemos el estado aquí
  const [products, setProducts] = useState<Product[]>([]);

  // Movemos la función asíncrona aquí
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return { products, fetchProducts };
};