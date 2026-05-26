import { useState } from "react";
import type { Product, Category } from "../interfaces/product.interface";

const useProducts = () => {

  const categories: Category[] = [
    {
      name: "Aseo",
      description: "Productos de limpieza"
    },
    {
      name: "Tecnología",
      description: "Productos tecnológicos"
    }
  ];

  const [products, setProducts] = useState<Product[]>([
    {
      name: "Jabón",
      description: "Jabón antibacterial",
      imageUrl: "https://placehold.co/150",
      category: categories[0],
      quantity: 10,
      price: 5000,
      height: 10,
      width: 5,
      length: 3,
      isEnabled: true
    },
    {
      name: "Laptop",
      description: "Laptop gamer",
      imageUrl: "https://placehold.co/150",
      category: categories[1],
      quantity: 5,
      price: 3500000,
      height: 4,
      width: 35,
      length: 25,
      isEnabled: true
    },
    {
      name: "Celular",
      description: "Smartphone Android",
      imageUrl: "https://placehold.co/150",
      category: categories[1],
      quantity: 7,
      price: 1200000,
      height: 1,
      width: 8,
      length: 16,
      isEnabled: true
    }
  ]);

  const fetchProducts = async (): Promise<void> => {

    try {

      const response = await fetch(
        "https://electiva5-api.apolobyte.top/products"
      );

      const data = await response.json();

      setProducts(data);

    } catch (error) {

      console.log(error);

    }
  };

  return {
    products,
    fetchProducts
  };
};

export default useProducts;