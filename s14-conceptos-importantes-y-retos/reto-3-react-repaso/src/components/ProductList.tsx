import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

export const ProductList = () => {

    const { products, fetchProducts } = useProducts();

    return (

        <div className="space-y-6">

            <button
                onClick={fetchProducts}
                className="
                bg-blue-500
                hover:bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                "
            >
                Actualizar productos
            </button>

            <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                "
            >

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