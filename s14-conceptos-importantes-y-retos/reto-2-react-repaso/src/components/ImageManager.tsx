import { useEffect, useState } from "react";

const BASE_URL = "https://electiva5-api.apolobyte.top";

export const ImageManager = () => {

  // useState tipo string[] | undefined
  const [images, setImages] = useState<string[] | undefined>(undefined);

  // función asíncrona
  const fetchImageList = async () => {

    try {

      const response = await fetch(
        `${BASE_URL}/list-images`
      );

      const data = await response.json();

      console.log(data);

      // actualizar estado
      setImages(data.images);

    } catch (error) {

      console.log(error);

    }
  };

  // useEffect una sola vez
  useEffect(() => {
    fetchImageList();
  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-200 p-8">

      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Lista de Imágenes
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {images?.map((image, index) => (

          <li
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition duration-300"
          >

            <img
              src={`${BASE_URL}/uploads/${image}`}
              alt={image}
              className="w-full h-60 object-cover rounded-xl"
            />

            <p className="mt-4 text-center font-semibold text-gray-700">
              {image}
            </p>

          </li>

        ))}

      </ul>

    </div>
  );
};
