import { useState } from "react";
import Title from "./components/Title";
import ProductCard from "./components/ProductCard";
import type { Product } from "./interfaces";
import { initialProducts } from "./data/products";
import "./App.css";

function App() {
  // Paso 5 & 3: useState del tipo lista de productos
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  // Paso 6 & 7: Función asíncrona para obtener datos de la API
  const fetchProducts = async () => {
    setLoading(true);
    setApiMessage("");
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/products"
      );
      const data = await response.json();

      // Imprime los datos por consola (Paso 6)
      console.log("📦 Datos obtenidos de la API:", data);

      // Paso 7: Actualiza el estado con los datos de la API
      if (Array.isArray(data) && data.length > 0) {
        setProducts(data);
        setApiMessage(`✅ ${data.length} productos cargados desde la API.`);
      } else {
        setApiMessage("⚠️ La API no retornó productos válidos.");
      }
    } catch (error) {
      console.error("❌ Error al obtener productos:", error);
      setApiMessage("❌ Error al conectar con la API. Revisa la consola.");
    } finally {
      setLoading(false);
    }
  };

  const resetProducts = () => {
    setProducts(initialProducts);
    setApiMessage("🔄 Productos locales restaurados.");
  };

  // Paso 8: Filtrar solo productos con isEnabled === true
  const enabledProducts = products.filter((p) => p.isEnabled);

  return (
    <div className="app">
      {/* Paso 1: Componente Title con h1 */}
      <Title />

      <div className="controls">
        {/* Paso 7: Botón para llamar la función asíncrona */}
        <button
          className="btn btn-primary"
          onClick={fetchProducts}
          disabled={loading}
        >
          {loading ? "⏳ Cargando..." : "🌐 Cargar desde API"}
        </button>

        <button className="btn btn-secondary" onClick={resetProducts}>
          🔄 Restaurar productos
        </button>
      </div>

      {apiMessage && <div className="api-message">{apiMessage}</div>}

      <div className="stats">
        <span>
          📋 Total productos: <strong>{products.length}</strong>
        </span>
        <span>
          ✅ Habilitados: <strong>{enabledProducts.length}</strong>
        </span>
        <span>
          ❌ Deshabilitados:{" "}
          <strong>{products.length - enabledProducts.length}</strong>
        </span>
      </div>

      {/* Paso 4 & 8: map + validación isEnabled */}
      <div className="products-grid">
        {products.map((product, index) => {
          // Paso 8: Solo mostrar si isEnabled es true
          if (!product.isEnabled) return null;
          return <ProductCard key={index} product={product} />;
        })}
      </div>

      {enabledProducts.length === 0 && (
        <div className="empty-state">
          <p>😔 No hay productos habilitados para mostrar.</p>
        </div>
      )}
    </div>
  );
}

export default App;