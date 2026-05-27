import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Lista local de respaldo por si el navegador bloquea la API por CORS
  const backupProducts: Product[] = [
    {
      id: 1,
      name: 'Base de Maquillaje Matte',
      price: 45000,
      description: 'Base de alta cobertura y larga duración con acabado matte para todo tipo de piel.',
      category: 'Rostro'
    },
    {
      id: 2,
      name: 'Labial Líquido Indeleble',
      price: 25000,
      description: 'Labial de textura suave con acabado mate que dura hasta 16 horas sin transferir.',
      category: 'Labios'
    },
    {
      id: 3,
      name: 'Paleta de Sombras Nude',
      price: 65000,
      description: 'Colección de 12 tonos ultra pigmentados ideales para looks naturales y de noche.',
      category: 'Ojos'
    },
    {
      id: 4,
      name: 'Pestañina Efecto Voluminoso',
      price: 32000,
      description: 'Máscara para pestañas lavable que aporta volumen extremo y definición sin grumos.',
      category: 'Ojos'
    },
    {
      id: 5,
      name: 'Rubor en Crema Natural',
      price: 28000,
      description: 'Fórmula ligera y construible que aporta un toque de color fresco y radiante en las mejillas.',
      category: 'Rostro'
    }
  ];

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/api/products');
      if (!response.ok) throw new Error('Error en la respuesta de la red');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.warn('API bloqueada o caída. Usando datos locales de respaldo:', error);
      // Inyectamos los datos de respaldo si hay problemas de CORS o red
      setProducts(backupProducts);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading };
};