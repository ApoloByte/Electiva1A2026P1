import React, { useState } from 'react';
import type { Product } from './types/product'; 
import ProductCard from './components/ProductCard';

export default function App() {
  // useState solicitado: Inicializado con un array vacío []
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Función asíncrona encargada de consumir los productos de la API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/products');
      const data = await response.json();
      
      // Actualizamos el estado con los datos del servidor
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado con título h1 solicitado */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-indigo-600 tracking-tight">
            Reto 3: Catálogo Avanzado de Productos
          </h1>
          <p className="text-slate-500 mt-2">Peticiones bajo demanda, interfaces complejas y Props</p>
          
          {/* Botón para activar el consumo de la API */}
          <button
            onClick={fetchProducts}
            disabled={loading}
            className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Cargando Catálogo...' : 'Consultar Productos'}
          </button>
        </header>

        {/* Zona de Renderizado con la función map */}
        <main>
          {products.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-400 font-medium">Presiona el botón de arriba para cargar el catálogo remoto.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}