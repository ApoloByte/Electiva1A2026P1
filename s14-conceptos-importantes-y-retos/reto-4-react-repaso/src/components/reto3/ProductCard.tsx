import type { Product } from '../../hooks/useProductList';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div style={{
      background: '#1c1c1e',
      border: '1px solid #3a3a3c',
      borderRadius: '8px',
      padding: '16px',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between'
    }}>
      <div>
        <h3 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '18px' }}>{product.name}</h3>
        <p style={{ margin: '0 0 12px 0', color: '#a1a1aa', fontSize: '14px', lineHeight: '1.4' }}>
          {product.description}
        </p>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', background: '#27272a', padding: '4px 8px', borderRadius: '4px', color: '#a1a1aa' }}>
          {product.category}
        </span>
        <span style={{ color: '#fbbf24', fontWeight: 'bold', fontSize: '16px' }}>
          ${product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};