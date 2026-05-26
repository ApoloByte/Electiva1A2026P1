import { useState } from 'react';

interface Category {
  name: string;
  description: string;
}

interface ProductData {
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

export const useProducts = () => {
  const categoriasIniciales: Category[] = [
    { name: 'Aseo', description: 'Productos de limpieza general' },
    { name: 'Hogar', description: 'Elementos para la casa' }
  ];

  const [productList, setProductList] = useState<ProductData[]>([
    { name: 'Jabón', description: 'Jabón antibacterial para manos', image_url: '', category: categoriasIniciales[0], quantity: 10, price: 3500, height: 10, width: 5, length: 3, isEnabled: true },
    { name: 'Esponja', description: 'Esponja para lavar platos', image_url: '', category: categoriasIniciales[0], quantity: 25, price: 1500, height: 8, width: 6, length: 2, isEnabled: true },
    { name: 'Escoba', description: 'Escoba de cerdas suaves', image_url: '', category: categoriasIniciales[0], quantity: 5, price: 8000, height: 120, width: 30, length: 5, isEnabled: false },
    { name: 'Trapero', description: 'Trapero de algodón absorbente', image_url: '', category: categoriasIniciales[0], quantity: 8, price: 7000, height: 130, width: 15, length: 5, isEnabled: true },
    { name: 'Ambientador', description: 'Ambientador spray olor lavanda', image_url: '', category: categoriasIniciales[1], quantity: 12, price: 9500, height: 20, width: 6, length: 6, isEnabled: true }
  ]);

  const fetchAndModifyProducts = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data: ProductData[] = await response.json();
      console.log('Datos obtenidos de la API:', data);
      setProductList(data);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return { productList, fetchAndModifyProducts };
};
export type { ProductData }; 