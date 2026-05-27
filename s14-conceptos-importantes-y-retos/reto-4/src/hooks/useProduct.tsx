import { useEffect, useState } from "react";

export interface Category {
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

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false); 

  console.log(" HOOK ACTIVO");

  const fetchProducts = async () => {
    console.log("🚀 FETCH PRODUCTS LLAMADO");

    setLoading(true); 

    try {
      const res = await fetch("https://electiva5-api.apolobyte.top/products");
      const data = await res.json();

      console.log("📦 DATA:", data);

      // 🔥 VALIDACIÓN SEGURA
      const arrayData = Array.isArray(data) ? data : data.products || [];

      const formatted: Product[] = arrayData.map((item: any) => ({
        name: item.name, 
        description: item.description,
        image_url: `https://electiva5-api.apolobyte.top/uploads/${item.imageUrl}`,
        category: {
          name: "API",
          description: "Desde servidor",
        },
        quantity: 1,
        price: item.price,
        height: 0,
        width: 0,
        length: 0,
        isEnabled: true,
      }));

      setProducts(formatted); 

    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
  fetchProducts();
}, []);

  return { products, fetchProducts, loading }; 
};