import { useState, useEffect } from "react";

const BASE_URL = "https://electiva5-api.apolobyte.top";

function ImageManager() {
  // 2. useState con tipo string[] | undefined
  const [images, setImages] = useState<string[] | undefined>(undefined);

  // 3. Función asíncrona para obtener la lista de imágenes
  const fetchImageList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/list-images`);
      const data = await response.json();

      // 4. Actualizar el estado con setImages
      setImages(data.images);
    } catch (error) {
      console.error("Error al obtener las imágenes:", error);
    }
  };

  // 5. useEffect para llamar fetchImageList una sola vez
  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🖼️ Galería de Imágenes</h2>

      {/* Mientras carga */}
      {images === undefined && <p>Cargando imágenes...</p>}

      {/* Si no hay imágenes */}
      {images?.length === 0 && <p>No hay imágenes disponibles.</p>}

      {/* 6. map para listar las imágenes */}
      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images?.map((imageName, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={`${BASE_URL}/uploads/${imageName}`}
              alt={imageName}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <p style={{ padding: "0.5rem", fontSize: "0.8rem", wordBreak: "break-all" }}>
              {imageName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageManager;