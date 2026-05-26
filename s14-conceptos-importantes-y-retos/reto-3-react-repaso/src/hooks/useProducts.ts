import { useEffect, useState } from "react";

interface Category {
    name: string;
    description: string;
}

export interface Product {
    name: string;
    description: string;
    image_url: string;
    category: Category;
    quantity: number;
    price: number;
    height: number;
    width: number;
    length: number;
    isEnabled: boolean;
}

export const useProducts = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {

        const response = await fetch(
            "https://electiva5-api.apolobyte.top/products"
        );

        const data = await response.json();

        setProducts(data);
    };

    useEffect(() => {

        fetchProducts();

    }, []);

    return {

        products,
        fetchProducts

    };
};