import { useEffect, useState } from "react";

interface ImageResponse {
  images: string[];
}

const ImageManager = () => {

  const [images, setImages] = useState<string[] | undefined>([]);

  const fetchImageList = async (): Promise<void> => {

    try {

      const response = await fetch(
        "https://electiva5-api.apolobyte.top/list-images"
      );

      const data: ImageResponse = await response.json();

      setImages(data.images);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    const loadImages = async () => {
      await fetchImageList();
    };

    void loadImages();

  }, []);

  return (

    <div>

      <h1>Administrador de imágenes</h1>

      <h3>List all images</h3>

      <ul>

        {
          images?.map((image, index) => (

            <li key={index}>

              <p>{image}</p>

              <img
                src={`https://electiva5-api.apolobyte.top/uploads/${image}`}
                alt={image}
                width="300"
              />

            </li>
          ))
        }

      </ul>

    </div>
  );
};

export default ImageManager;