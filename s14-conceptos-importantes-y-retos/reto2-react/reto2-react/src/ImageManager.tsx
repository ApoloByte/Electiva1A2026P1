import { useState, useEffect } from 'react';

export default function ImageManager() {
  // 1. Crear el useState que acepta <string[] | undefined>

  const [images, setImages] = useState<string[] | undefined>(undefined);

 

  // 4. Utilizar useEffect para llamar a fetchImageList una sola vez 
  useEffect(() => {

     // 2. Crear la función asíncrona para obtener la lista de imágenes
  const fetchImageList = async () => {
    try {
  
      const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const data = await response.json(); 
    // Accedemos directamente a la propiedad "images" que vimos en la consola
      setImages(data.images); 
      
    } catch (error) {
    
        console.error("Error al obtener la lista:", error);
    }
  };
    
  fetchImageList(); 
  }, []);

  return (
  
  <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">List all images</h2>
      
      {/* Si images es undefined, mostramos un mensaje de carga */}
      {images === undefined ? (
        <p className="text-gray-400">Cargando imágenes desde el servidor...</p>
      ) : (
        /* 5. Listar las imágenes utilizando la función map */
        <ul className="list-disc ml-6">
          {images.map((imageName, index) => (
            <li key={index} className="mb-8 font-bold">
              {/* Nombre de la imagen */}
              {imageName}
              
              {/* Etiqueta img apuntando a la ruta de uploads + NOMBRE_IMAGEN */}
              <img 
                src={`https://electiva5-api.apolobyte.top/uploads/${imageName}`} 
                alt={imageName} 
                className="mt-3 max-w-md rounded shadow-lg border border-gray-600"
              />
            </li>
          ))}

        </ul>
      )}
      
    </div>
  );
}