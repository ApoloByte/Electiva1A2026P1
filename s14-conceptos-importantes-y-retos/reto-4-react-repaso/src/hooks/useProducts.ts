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

const categorias: Category[] = [
  { name: 'Electrónica', description: 'Dispositivos electrónicos' },
  { name: 'Ropa', description: 'Prendas de vestir' },
  { name: 'Hogar', description: 'Artículos para el hogar' },
];

const initialProducts: Product[] = [
  { name: 'Jabón', description: 'Jabón antibacterial', image_url: '', category: categorias[2], quantity: 50, price: 3000, height: 5, width: 3, length: 10, isEnabled: true },
  { name: 'Camiseta', description: 'Camiseta de algodón', image_url: '', category: categorias[1], quantity: 20, price: 25000, height: 1, width: 30, length: 40, isEnabled: true },
  { name: 'Laptop', description: 'Laptop ultradelgada', image_url: '', category: categorias[0], quantity: 10, price: 2500000, height: 2, width: 35, length: 25, isEnabled: false },
  { name: 'Silla', description: 'Silla ergonómica', image_url: '', category: categorias[2], quantity: 5, price: 350000, height: 90, width: 50, length: 50, isEnabled: true },
  { name: 'Auriculares', description: 'Auriculares inalámbricos', image_url: '', category: categorias[0], quantity: 15, price: 120000, height: 20, width: 18, length: 8, isEnabled: true },
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const fetchAndUpdateProducts = async () => {
    const response = await fetch('https://electiva5-api.apolobyte.top/products');
    const data: Product[] = await response.json();
    console.log('Productos obtenidos:', data);
    setProducts(data);
  };

  return { products, fetchAndUpdateProducts };
};
