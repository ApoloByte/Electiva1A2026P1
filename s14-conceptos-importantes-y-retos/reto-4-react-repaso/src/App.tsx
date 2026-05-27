import { useProducts } from "./hooks/useProducts";
import ProductCard from "./components/ProductCard";

function App() {
  const { products, fetchProducts } = useProducts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Lista de Productos</h1>
      <button
        onClick={fetchProducts}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Cargar productos de la API
      </button>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) =>
          product.isEnabled ? (
            <ProductCard key={index} product={product} />
          ) : null
        )}
      </div>
    </div>
  );
}

export default App;