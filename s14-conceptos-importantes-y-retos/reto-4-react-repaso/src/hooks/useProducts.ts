import { useState, useEffect } from "react";
import type { Product } from "../interfaces/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};