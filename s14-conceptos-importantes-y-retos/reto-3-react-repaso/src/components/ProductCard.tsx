import type { Product } from "../hooks/useProducts";

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {

    return (

        <div
            className="
            bg-white
            rounded-xl
            shadow-md
            p-4
            space-y-3
            "
        >

            <h2 className="text-2xl font-bold">
                {product.name}
            </h2>

            <img
                src={product.image_url}
                alt={product.name}
                className="
                w-full
                h-60
                object-cover
                rounded-lg
                "
            />

            <p className="text-gray-600">
                {product.description}
            </p>

            <p>
                <span className="font-bold">
                    Categoría:
                </span>

                {" "}

                {product.category?.name}
            </p>

            <p>
                <span className="font-bold">
                    Precio:
                </span>

                {" "}

                ${product.price}
            </p>

            <p>
                <span className="font-bold">
                    Cantidad:
                </span>

                {" "}

                {product.quantity}
            </p>

        </div>

    );
};