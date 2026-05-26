import type { Product } from "../interfaces/product.interface";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {

  return (

    <div className="border rounded-xl shadow-lg p-5">

      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-40 mx-auto"
      />

      <h2 className="text-2xl font-bold mt-4">
        {product.name}
      </h2>

      <p>{product.description}</p>

      <p>
        <strong>Categoría:</strong> {product.category.name}
      </p>

      <p>
        <strong>Precio:</strong> ${product.price}
      </p>

      <p>
        <strong>Cantidad:</strong> {product.quantity}
      </p>

    </div>
  );
};

export default ProductCard;