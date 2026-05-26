import { useState, useEffect } from "react";

const ImageManager = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async () => {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/list-images");
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
      <h2>Administrador de imágenes</h2>
      <p>List all images</p>
      <ul>
        {images?.map((image, index) => (
          <li key={index}>
            {image}
            <br />
            <img
              src={`https://electiva5-api.apolobyte.top/uploads/${image}`}
              alt={image}
              width={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImageManager;