import { useProduct } from "../hooks/useProduct";
import { Item } from "./Items";

export const Lista = () => {
 const { products, fetchProducts, loading } = useProduct();
  return (
    <div className="p-4">
      <button
       onClick={fetchProducts}
  className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
>
  {loading ? "Cargando..." : "Recargar productos"}
      </button>

      <ul className="grid grid-cols-2 gap-4">
        {products
          .filter((p) => p.isEnabled)
          .map((product) => (
            <Item key={product.name} product={product} />
          ))}
      </ul>
    </div>
  );
};