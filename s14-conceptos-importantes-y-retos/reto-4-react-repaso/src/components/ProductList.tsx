import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

const ProductList = () => {

  const { products, fetchProducts } = useProducts();

  return (

    <div className="p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Lista de Productos
      </h1>

      <div className="flex justify-center mb-8">

        <button
          onClick={() => void fetchProducts()}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Cargar productos API
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          products.map((product, index) => (

            product.isEnabled && (
              <ProductCard
                key={index}
                product={product}
              />
            )
          ))
        }

      </div>

    </div>
  );
};

export default ProductList;