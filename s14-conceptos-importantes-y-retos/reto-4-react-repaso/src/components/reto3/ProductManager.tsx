import { useProductList } from '../../hooks/useProductList';
import { ProductCard } from './ProductCard';
import { Title } from './Title';

export const ProductManager = () => {
  const { products, loading } = useProductList();

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <Title text="Catálogo de Maquillaje - Reto 3" />
      <p style={{ color: '#a1a1aa', fontSize: '14px', textAlign: 'center', marginTop: '0', marginBottom: '30px' }}>
        Refactorizado con Hooks y Props en un Grid dinámico
      </p>

      {loading ? (
        <p style={{ color: '#60a5fa', textAlign: 'center', fontSize: '15px' }}>
          ⏳ Extrayendo lista de productos desde la API...
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};