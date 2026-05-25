import { useState } from "react";

// 2. Interfaces
interface Category {
  name: string;
  description: string;
}

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  quantity: number;
  price: number;
  height: number;
  width: number;
  length: number;
  isEnabled: boolean;
}

// Categorías base
const categorias: Category[] = [
  { name: "Limpieza",   description: "Productos de limpieza del hogar" },
  { name: "Alimentos",  description: "Productos comestibles" },
  { name: "Bebidas",    description: "Bebidas y líquidos" },
  { name: "Mascotas",   description: "Productos para mascotas" },
  { name: "Belleza",    description: "Productos de cuidado personal" },
];

// 3. Lista inicial
const initialProducts: Product[] = [
  {
    name: "Jabón Antibacterial",
    description: "Jabón para manos con fórmula antibacterial",
    imageUrl: "https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg",
    category: categorias[0],
    quantity: 100,
    price: 3500,
    height: 8,
    width: 5,
    length: 3,
    isEnabled: true,
  },
  {
    name: "Pan Integral",
    description: "Pan de trigo integral artesanal",
    imageUrl: "https://electiva5-api.apolobyte.top/uploads/bakery.jpg",
    category: categorias[1],
    quantity: 50,
    price: 8000,
    height: 10,
    width: 15,
    length: 25,
    isEnabled: true,
  },
  {
    name: "Cola de Uva",
    description: "Bebida gaseosa sabor uva",
    imageUrl: "https://electiva5-api.apolobyte.top/uploads/cola-drink.png",
    category: categorias[2],
    quantity: 200,
    price: 2500,
    height: 20,
    width: 7,
    length: 7,
    isEnabled: false,
  },
  {
    name: "Comida para Perro",
    description: "Alimento balanceado para perros adultos",
    imageUrl: "https://electiva5-api.apolobyte.top/uploads/dog-food.jpg",
    category: categorias[3],
    quantity: 75,
    price: 45000,
    height: 30,
    width: 20,
    length: 10,
    isEnabled: true,
  },
  {
    name: "Crema Hidratante",
    description: "Crema para piel seca con vitamina E",
    imageUrl: "https://electiva5-api.apolobyte.top/uploads/handmade-soap.jpg",
    category: categorias[4],
    quantity: 60,
    price: 15000,
    height: 12,
    width: 6,
    length: 4,
    isEnabled: true,
  },
];

function ProductManager() {
  // 5. useState de productos
  const [products, setProducts] = useState<Product[]>(initialProducts);

  // 6 y 7. Función asíncrona + actualiza estado al hacer clic
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/products");
      const data = await response.json();
      console.log("Productos del servidor:", data);

      // Ajusta según la estructura real: data, data.products, etc.
      const lista = Array.isArray(data) ? data : data.products ?? [];
      setProducts(lista);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      {/* 1. Título h1 */}
      <h1>🛒 Administrador de Productos</h1>

      {/* Botón para cargar desde API */}
      <button
        onClick={fetchProducts}
        style={{
          marginBottom: "1.5rem",
          padding: "0.6rem 1.5rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        🔄 Cargar productos desde API
      </button>

      {/* 4. map + 8. validación isEnabled */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((product, index) =>
          product.isEnabled ? (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                width: "220px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div style={{ padding: "0.8rem" }}>
                <h3 style={{ margin: "0 0 0.3rem" }}>{product.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#555", margin: "0 0 0.3rem" }}>
                  {product.description}
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  🏷️ <strong>Categoría:</strong> {product.category.name}
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  💰 <strong>Precio:</strong> ${product.price.toLocaleString()}
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  📦 <strong>Cantidad:</strong> {product.quantity}
                </p>
                <p style={{ fontSize: "0.85rem" }}>
                  📐 <strong>Medidas:</strong> {product.height}x{product.width}x{product.length} cm
                </p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "0.5rem",
                    padding: "0.2rem 0.7rem",
                    backgroundColor: "#d1fae5",
                    color: "#065f46",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  ✅ Activo
                </span>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default ProductManager;