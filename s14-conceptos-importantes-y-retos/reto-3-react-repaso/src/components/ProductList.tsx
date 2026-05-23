// src/components/ProductList.tsx
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';
import { productStyles } from '../styles/productStyles';

export const ProductList = () => {
  const { products, fetchProducts } = useProducts();

  return (
    <div style={productStyles.container}>
      <h2 style={productStyles.mainTitle}>Catálogo de Productos ({products.length})</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={fetchProducts} style={productStyles.button}>
          Cargar Datos de la API
        </button>
      </div>
      
      <div style={productStyles.grid}>
        {products
          .filter(p => p.isEnabled)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};