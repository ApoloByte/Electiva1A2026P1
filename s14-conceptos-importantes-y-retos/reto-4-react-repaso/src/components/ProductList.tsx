import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
  const { products, fetchAndUpdateProducts } = useProducts();

  return (
    <section className="mb-10">
      <h1 className="text-3xl font-bold mb-4">Lista de Productos</h1>

      <button
        onClick={fetchAndUpdateProducts}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Actualizar productos desde API
      </button>

      <div className="flex flex-col gap-4">
        {products.map((product, index) =>
          product.isEnabled ? (
            <ProductCard key={index} product={product} />
          ) : null
        )}
      </div>
    </section>
  );
};
