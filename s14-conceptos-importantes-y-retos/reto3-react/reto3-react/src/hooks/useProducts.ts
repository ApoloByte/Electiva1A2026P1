import { useState } from 'react';
import type { Product } from '../interfaces/Product';
import type { Category } from '../interfaces/Category';

export const useProducts = () => {
  // Lista de categorías
  const categories: Category[] = [
    { name: "Tecnología", description: "Dispositivos y gadgets electrónicos" },
    { name: "Hogar", description: "Artículos para el cuidado del hogar" }
  ];

  // Estado inicial
  const [products, setProducts] = useState<Product[]>([
      {
        name: "Portatil Gamer", description: "Portátil Ryzen7,32GB ram, rtx3050", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAdcK88lfp6IyDmTkeW5nBa8X1Ta6WkcuXBw&s",
        category: categories[0], quantity: 7, price: 1600, height: 2, width: 35, length: 25, isEnabled: true
      },
      {
        name: "IPhone 17pro", description: "Teléfono de última generación", image_url: "https://hsi.com.co/wp-content/uploads/2023/01/Imagen-iPhone-14-Pro-Max-Morado-400x400.jpg",
        category: categories[0], quantity: 25, price: 1000, height: 1, width: 7, length: 15, isEnabled: true
      },
      {
        name: "Licuadora", description: "Licuadora de 3 velocidades", image_url: "https://d2j6dbq0eux0bg.cloudfront.net/images/122639504/5283769709.jpg",
        category: categories[1], quantity: 30, price: 80, height: 30, width: 15, length: 15, isEnabled: true
      },
      {
        name: "Televisor Dañado", description: "Smart TV 55 pulgadas (Para reparar)", image_url: "https://covercompany.com.uy/cdn/shop/files/UN43U8000FGXPR3.jpg?v=1764695302&width=400",
        category: categories[0], quantity: 0, price: 120, height: 80, width: 120, length: 10, isEnabled: false
      },
      {
        name: "Plancha", description: "Plancha electrica", image_url: "https://cdn.dam.alkomprar.com/products/7702561406002/7702561406002-001.webp/plancha-ropa-universal-seca-406-negro?scale.option=fill&w=400&h=0",
        category: categories[1], quantity: 20, price: 25, height: 15, width: 12, length: 28, isEnabled: true
      }
    ]);

  // Función asíncrona
  const getProductsFromAPI = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data = await response.json();
      
      console.log("Datos obtenidos de la API:", data); 
      setProducts(data); 
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  // Exportamos tanto la lista como la función para que el botón la pueda usar
  return { products, getProductsFromAPI };
};