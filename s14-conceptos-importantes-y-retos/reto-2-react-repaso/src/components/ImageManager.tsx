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

    <div className="min-h-screen bg-slate-900 p-10">

      <h1 className="text-5xl font-extrabold text-center text-cyan-400 mb-12">
        🖼️ Galería de Imágenes
      </h1>

      <div className="max-w-7xl mx-auto">

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images?.map((image, index) => (

            <li
              key={index}
              className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-cyan-500/30 transition duration-300"
            >

              <div className="overflow-hidden">

                <img
                  src={`${BASE_URL}/uploads/${image}`}
                  alt={image}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-5">

                <p className="text-cyan-300 font-bold text-lg text-center break-words">
                  {image}
                </p>

              </div>

            </li>

          ))}

        </ul>

      </div>

    </div>

  );
};
