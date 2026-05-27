import { useEffect, useState } from "react";

export const useImage = () => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch("https://electiva5-api.apolobyte.top/list-images");
      const data = await res.json();

      setImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return { images };
};