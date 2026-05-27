import { useEffect, useState } from "react";

function ImageManager() {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async () => {
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/list-images"
      );

      const data = await response.json();

      setImages(data.images);
    } catch (error) {
      console.error("Error al obtener imágenes:", error);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div>
      <h2>Lista de imagenes</h2>

      {!images && <p>Cargando...</p>}

      <ul>
        {images?.map((img, index) => (
          <li key={index}>
            <p>{img}</p>

            <img
              src={`https://electiva5-api.apolobyte.top/uploads/${img}`}
              alt={img}
              width={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageManager;