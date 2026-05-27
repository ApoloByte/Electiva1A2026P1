import { useProducts } from './hooks/useProducts';
import { ProductCard } from './components/ProductCard';

export default function App() {
  // Extraemos las dos cosas que nos devuelve nuestro Custom Hook
  const { products, getProductsFromAPI } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => {
          
          // La validación se queda aquí para no renderizar componentes vacíos
          if (!product.isEnabled) {
            return null; 
          }

          // Llamamos a nuestro componente pasándole el prop "product"
          return <ProductCard key={index} product={product} />;
        })}
      </div>

    </div>
  );
}