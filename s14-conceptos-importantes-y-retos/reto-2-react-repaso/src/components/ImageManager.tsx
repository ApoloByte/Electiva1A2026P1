import { useEffect, useState } from "react";

function ImageManager() {

  // 2. useState tipo string[] | undefined
  const [images, setImages] = useState(undefined);

  // 3. Función asíncrona
  const fetchImageList = async () => {
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/list-images"
      );

      const data = await response.json();

      // 4. Actualizar estado
      setImages(data.images);

    } catch (error) {
      console.error("Error obteniendo imágenes:", error);
    }
  };

  // 5. useEffect para ejecutar una sola vez
  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div>
      <h2>Lista de Imágenes</h2>

      <ul>
        {
          // 6. map para listar imágenes
          images?.map((image, index) => (
            <li key={index}>
              <img
                src={`https://electiva5-api.apolobyte.top/uploads/${image}`}
                alt={image}
                width="250"
              />

              <p>{image}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ImageManager;