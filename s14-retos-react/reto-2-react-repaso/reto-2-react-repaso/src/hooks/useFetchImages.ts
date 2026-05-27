import { useState, useEffect } from 'react';

export function useFetchImages() {
  // useState solicitado: acepta datos del tipo string[] o undefined
  const [images, setImages] = useState<string[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Función asíncrona para recibir el objeto con la lista de imágenes
  const fetchImageList = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const data = await response.json();
      
      // Con setImages actualizamos la lista dentro de la función asíncrona
      // (Ajustamos por si la API devuelve el array directo o un objeto con propiedad 'images')
      if (Array.isArray(data)) {
        setImages(data);
      } else if (data && Array.isArray(data.images)) {
        setImages(data.images);
      }
    } catch (error) {
      console.error("Error al recibir la lista de imágenes:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect solicitado para llamar a la función una sola vez
  useEffect(() => {
    fetchImageList();
  }, []);

  return { images, loading };
}