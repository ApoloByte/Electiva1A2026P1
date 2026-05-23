// src/components/ProductCard.tsx
import type { Product } from '../types/product';
import { productStyles } from '../styles/productStyles';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div style={productStyles.card}>
      <img src={product.image_url} alt={product.name} style={productStyles.image} />
      <h3 style={productStyles.title}>{product.name}</h3>
      <p style={productStyles.text}><strong>Descripción:</strong> {product.description}</p>
      <p style={productStyles.text}><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
};