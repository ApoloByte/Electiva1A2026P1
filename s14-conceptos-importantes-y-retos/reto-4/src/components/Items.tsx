import type { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}

export const Item = ({ product }: Props) => {
  return (
    <li className="border p-2 rounded">
      <img
        src={product.image_url} // 🔥 CORREGIDO (antes error común)
        alt={product.name}
        width={100}
      />
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>
    </li>
  );
};