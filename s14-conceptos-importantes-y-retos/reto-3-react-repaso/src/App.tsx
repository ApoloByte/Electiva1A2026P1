import { useState } from 'react';

// 1. Crear la interface Category
interface Category {
  name: string;
  description: string;
}

// 2. Crear la interface Product (exactamente como en image_036231.png)
interface Product {
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

export default function App() {
  // 3. Crear primero la lista de categorías
  const categories: Category[] = [
    { name: "Tecnología", description: "Dispositivos y gadgets electrónicos" },
    { name: "Hogar", description: "Artículos para el cuidado del hogar" }
  ];

  // 4. Crear el useState del tipo lista de productos con al menos 5 registros
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

  // 5. Función asíncrona para obtener los datos e imprimirlos por consola
  const getProductsFromAPI = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data = await response.json();
      
      console.log("Datos obtenidos de la API:", data); // Imprimir por consola
      setProducts(data); // 6. Modificar el estado products para que actualice la pantalla
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* 7. Crear un nuevo componente/elemento que muestre un título h1 */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Catálogo de Productos
      </h1>

      {/* Botón para activar la función asíncrona */}
      <div className="flex justify-center mb-8">
        <button 
          onClick={getProductsFromAPI}
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow"
        >
          Cargar Productos desde la API
        </button>
      </div>

      {/* 8. Utilizar map para recorrer la lista de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          
          // 9. Implementar validación para mostrar solo si isEnabled es true
          if (!product.isEnabled) {
            return null; // Si es falso, no renderiza nada
          }

          // Si es verdadero, muestra la tarjeta del producto
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <img 
                src={product.image_url} 
                alt={product.name} 
                className="w-full h-48 object-cover bg-gray-200"
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
                
                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 mb-4">
                  <p><span className="font-bold">Categoría:</span> {product.category.name}</p>
                  <p><span className="font-bold">Stock:</span> {product.quantity} unidades</p>
                  <p><span className="font-bold">Dimensiones (AlxAnxL):</span> {product.height}x{product.width}x{product.length} cm</p>
                </div>
                
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-green-600">${product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}