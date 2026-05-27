import { useEffect, useState } from "react";

export const ImageManager = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async () => {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/list-images");
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div>
      <h1>Administrador de imagenes</h1>
      <h4>lista de todas las imagenes</h4>

      <ul>
        {images?.map((img, index) => (
          <li key={index}>
            <img
              src={`https://electiva5-api.apolobyte.top/uploads/${img}`}
              alt="img"
              width="200px"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};