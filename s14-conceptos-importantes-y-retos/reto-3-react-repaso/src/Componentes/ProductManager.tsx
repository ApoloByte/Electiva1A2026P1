import { useEffect, useState } from "react";
import type { Product } from "../Interfaces/Product";

function ProductManager() {
  // lista inicial (punto 3)
  const initialCategories = [
    { name: "Limpieza", description: "Productos de limpieza" },
    { name: "Comida", description: "Alimentos" },
  ];

  const [products, setProducts] = useState<Product[]>([
    {
      name: "Jabón",
      description: "Jabón antibacterial",
      imageUrl: "https://via.placeholder.com/150",
      category: initialCategories[0],
      quantity: 10,
      price: 5,
      height: 10,
      width: 5,
      length: 2,
      isEnabled: true,
    },
    {
      name: "Arroz",
      description: "Arroz blanco",
      imageUrl: "https://via.placeholder.com/150",
      category: initialCategories[1],
      quantity: 20,
      price: 8,
      height: 15,
      width: 10,
      length: 5,
      isEnabled: true,
    },
    {
      name: "Detergente",
      description: "Limpieza profunda",
      imageUrl: "https://via.placeholder.com/150",
      category: initialCategories[0],
      quantity: 0,
      price: 12,
      height: 20,
      width: 10,
      length: 8,
      isEnabled: false,
    },
    {
      name: "Pan",
      description: "Pan fresco",
      imageUrl: "https://via.placeholder.com/150",
      category: initialCategories[1],
      quantity: 15,
      price: 2,
      height: 5,
      width: 5,
      length: 3,
      isEnabled: true,
    },
    {
      name: "Cloro",
      description: "Desinfectante",
      imageUrl: "https://via.placeholder.com/150",
      category: initialCategories[0],
      quantity: 8,
      price: 6,
      height: 12,
      width: 6,
      length: 4,
      isEnabled: true,
    },
  ]);

  //  API (punto 4)
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/products"
      );

      const data = await response.json();

      console.log("PRODUCTOS API:", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // botón para actualizar (punto 5)
  const handleUpdate = () => {
    const updated = products.map((p) => ({
      ...p,
      name: p.name + " ✔",
    }));

    setProducts(updated);
  };

  return (
    <div>
      <h1>PRODUCTOS</h1>

      <button onClick={handleUpdate}>Actualizar productos</button>

      {/* punto 6: filtrar isEnabled */}
      {products
        .filter((p) => p.isEnabled)
        .map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category.name}</p>

            <img
              src={product.imageUrl}
              alt={product.name}
              width={100}
            />
          </div>
        ))}
    </div>
  );
}

export default ProductManager;