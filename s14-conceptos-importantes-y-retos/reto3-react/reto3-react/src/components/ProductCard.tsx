import type { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
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
          <p><span className="font-bold">Dimensiones:</span> {product.height}x{product.width}x{product.length} cm</p>
        </div>
        
        <div className="text-right">
          <span className="text-2xl font-extrabold text-green-600">${product.price}</span>
        </div>
      </div>
    </div>
  );
};