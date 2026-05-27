import type { Product } from "../interfaces/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p>Categoría: {product.category.name}</p>
      <p>Precio: {product.price}</p>
      <p>Cantidad: {product.quantity}</p>
    </div>
  );
};

export default ProductCard;