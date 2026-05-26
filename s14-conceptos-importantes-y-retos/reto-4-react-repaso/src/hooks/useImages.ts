import { useState, useEffect } from 'react';

const BASE_URL = 'https://electiva5-api.apolobyte.top/uploads/';

export function useImages() {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://electiva5-api.apolobyte.top/list-images');
        const data = await res.json();
        const list: string[] = Array.isArray(data) ? data : data.images ?? [];
        setImages(list);
      } catch (err) {
        console.error('Error al cargar imágenes:', err);
        setImages([]);
      }
    };
    fetchImages();
  }, []);

  return { images, baseUrl: BASE_URL };
}
