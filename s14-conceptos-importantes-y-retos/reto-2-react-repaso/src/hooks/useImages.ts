import { useState, useEffect } from 'react';

export const useImages = () => {
  // Estado para almacenar las imágenes (inicia en undefined)
  const [images, setImages] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
        const data = await response.json(); 
        
        // Guardamos las imágenes
        setImages(data.images); 
      } catch (error) {
        console.error("Error al obtener la lista:", error);
      }
    };

    fetchImageList(); 
  }, []);

  // Retornamos el estado para que cualquier componente pueda usarlo
  return { images };
};