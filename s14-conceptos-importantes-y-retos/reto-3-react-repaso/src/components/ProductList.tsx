import { useState, useEffect } from "react";
import type { Category, Product } from "../interfaces/Product";

const ProductList = () => {
  const categories: Category[] = [
    { name: "Limpieza", description: "Productos de limpieza" },
    { name: "Alimentos", description: "Productos alimenticios" },
  ];

  const [products, setProducts] = useState<Product[]>([
    { name: "Jabón", description: "Jabón antibacterial", image_url: "", category: categories[0], quantity: 10, price: 2500, height: 5, width: 3, length: 2, isEnabled: true },
    { name: "Shampoo", description: "Shampoo para cabello", image_url: "", category: categories[0], quantity: 5, price: 8000, height: 10, width: 5, length: 3, isEnabled: true },
    { name: "Arroz", description: "Arroz blanco", image_url: "", category: categories[1], quantity: 20, price: 3000, height: 8, width: 6, length: 4, isEnabled: false },
    { name: "Leche", description: "Leche entera", image_url: "", category: categories[1], quantity: 15, price: 4000, height: 12, width: 4, length: 4, isEnabled: true },
    { name: "Detergente", description: "Detergente en polvo", image_url: "", category: categories[0], quantity: 8, price: 6000, height: 15, width: 8, length: 5, isEnabled: false },
  ]);

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

  return (
    <div>
      <h1>Lista de Productos</h1>
      <button onClick={fetchProducts}>Cargar productos de la API</button>
      {products.map((product, index) => (
        product.isEnabled ? (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>Descripción: {product.description}</p>
            <p>Categoría: {product.category.name}</p>
            <p>Precio: {product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default ProductList;