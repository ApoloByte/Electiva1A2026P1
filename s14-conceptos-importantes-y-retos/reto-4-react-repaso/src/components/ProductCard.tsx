import type { Product } from '../hooks/useProducts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <p><span className="font-semibold">Nombre:</span> {product.name}</p>
      <p><span className="font-semibold">Descripción:</span> {product.description}</p>
      <p><span className="font-semibold">Categoría:</span> {product.category.name}</p>
      <p><span className="font-semibold">Cantidad:</span> {product.quantity}</p>
      <p><span className="font-semibold">Precio:</span> ${product.price}</p>
      <p><span className="font-semibold">Alto:</span> {product.height} cm</p>
      <p><span className="font-semibold">Ancho:</span> {product.width} cm</p>
      <p><span className="font-semibold">Largo:</span> {product.length} cm</p>
    </div>
  );
};
