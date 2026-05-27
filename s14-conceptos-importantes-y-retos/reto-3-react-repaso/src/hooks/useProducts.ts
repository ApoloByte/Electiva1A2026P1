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
      name: "Laptop Gamer", description: "Portátil de alto rendimiento", image_url: "https://portatil.com.co/wp-content/uploads/2023/10/Asus-Gamer-Intel-Core-i5-Inicio-X-portatil.com_.co_.jpg",
      category: categories[0], quantity: 5, price: 1200, height: 2, width: 35, length: 25, isEnabled: true
    },
    {
      name: "Smartphone", description: "Teléfono de última generación", image_url: "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-colors.png",
      category: categories[0], quantity: 15, price: 800, height: 1, width: 7, length: 15, isEnabled: true
    },
    {
      name: "Licuadora", description: "Licuadora de 3 velocidades", image_url: "https://hogaruniversal.vtexassets.com/arquivos/ids/167494-800-auto?v=638884680100670000&width=800&height=auto&aspect=true",
      category: categories[1], quantity: 10, price: 60, height: 30, width: 15, length: 15, isEnabled: true
    },
    {
      name: "Televisor Dañado", description: "Smart TV 55 pulgadas (Para reparar)", image_url: "https://media.istockphoto.com/id/1395191574/es/foto/pantalla-de-televisi%C3%B3n-led-negra-en-blanco-aislada.jpg?s=612x612&w=0&k=20&c=5x9hgnOmbIvniJnNGf5dTHoBlbGxsLVYe-OWCcidMgE=",
      category: categories[0], quantity: 0, price: 100, height: 80, width: 120, length: 10, isEnabled: false
    },
    {
      name: "Plancha", description: "Plancha a vapor", image_url: "https://media.falabella.com/falabellaCO/881653701_1/w=1500,h=1500,fit=cover",
      category: categories[1], quantity: 20, price: 30, height: 15, width: 12, length: 28, isEnabled: true
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