import { useState } from 'react';
// Importamos el componente del Punto 1
import { Title } from './Title';

// 2. Crear una interface llamada Category que contenga las propiedades name y description.
interface Category {
  name: string;
  description: string;
}

// 2.a. Crear una interface llamada Product que contenga las propiedades...
interface Product {
  name: string;
  description: string;
  image_url: string; // Usamos el nombre de la captura del profesor
  category: Category; // Interfaz anidada
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}

export const ProductManager = () => {
  // 4. Primero crea la lista de categorías para asignar luego una categoría de esta lista a cada producto.
  const catBelleza: Category = { name: 'Belleza', description: 'Cuidado personal' };
  const catHogar: Category = { name: 'Hogar', description: 'Artículos para casa' };

  // 4 y 6. Crear un useState del tipo lista de productos con al menos 5 registros.
  const [products, setProducts] = useState<Product[]>([
    { name: 'Jabón', description: 'Jabón antibacterial', image_url: '', category: catBelleza, quantity: 10, price: 2500, height: 5, width: 8, length: 3, isEnabled: true },
    { name: 'Champú', description: 'Champú anticaspa', image_url: '', category: catBelleza, quantity: 15, price: 12000, height: 18, width: 6, length: 6, isEnabled: true },
    { name: 'Esponja', description: 'Esponja de cocina', image_url: '', category: catHogar, quantity: 50, price: 1500, height: 3, width: 10, length: 7, isEnabled: false }, // No se muestra por el Punto 9
    { name: 'Crema', description: 'Crema hidratante', image_url: '', category: catBelleza, quantity: 8, price: 8500, height: 12, width: 5, length: 5, isEnabled: true },
    { name: 'Toalla', description: 'Toalla de manos', image_url: '', category: catHogar, quantity: 20, price: 6000, height: 1, width: 40, length: 40, isEnabled: true }
  ]);

  // 7 y 8. Utilice una función asíncrona para obtener los datos de la API al dar clic en un botón
  const fetchAndStoreProducts = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data = await response.json();
      
      // 7. Imprimirlos por consola.
      console.log('Datos de la API:', data);

      // Mapeamos los datos para asegurar que respeten las interfaces
      const apiProducts: Product[] = data.map((item: any) => ({
        name: item.name,
        description: item.description,
        image_url: item.image_url || '',
        category: {
          name: item.category?.name || 'General',
          description: item.category?.description || 'Sin descripción'
        },
        quantity: Number(item.quantity || 0),
        price: Number(item.price || 0),
        height: Number(item.height || 0),
        width: Number(item.width || 0),
        length: Number(item.length || 0),
        isEnabled: item.isEnabled === 'true' || item.isEnabled === true || item.isEnabled === undefined
      }));

      // 8. Modifique la variable products mediante la función asíncrona para que actualice en la pantalla
      setProducts(apiProducts);
    } catch (error) {
      console.error('Error al consultar los productos:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '10px' }}>
      {/* Renderizamos el componente del Punto 1 */}
      <Title />

      {/* 8. Botón requerido para desencadenar la actualización al dar clic */}
      <button 
        onClick={fetchAndStoreProducts} 
        style={{ padding: '8px 16px', fontSize: '14px', cursor: 'pointer', marginBottom: '20px' }}
      >
        Cargar Productos desde API
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* 5. Utilice la función map para recorrer la lista y mostrar los valores */}
        {products.map((product, index) => {
          {/* 9. Implemente una validación que muestre el producto solo si el valor de isEnabled es true */}
          if (!product.isEnabled) return null;

          return (
            <div key={index} style={{ fontSize: '14px', marginBottom: '15px' }}>
              <h4 style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>📦 Producto {index + 1}: {product.name}</h4>
              <p style={{ margin: '2px 0' }}>Descripción: {product.description}</p>
              <p style={{ margin: '2px 0' }}>Precio: ${product.price}</p>
              <p style={{ margin: '2px 0' }}>Cantidad: {product.quantity}</p>
              <p style={{ margin: '2px 0' }}>Categoría: {product.category.name} - {product.category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};