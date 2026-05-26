import { useState, useEffect } from 'react';

export const useImages = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const data = await response.json();
      const listadoImagenes: string[] = Array.isArray(data) ? data : data.images || [];
      setImages(listadoImagenes);
    } catch (error) {
      console.error('Error al cargar la lista de imágenes:', error);
      setImages([]);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return { images, baseUrl: 'https://electiva5-api.apolobyte.top/uploads/' };
};