import { useState, useEffect } from 'react';

export const useFetchImages = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const data = await response.json();
      setImages(data.images);
    } catch (error) {
      console.error('Error cargando imágenes en el hook:', error);
    }
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return { images };
};