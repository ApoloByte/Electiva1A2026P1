import { useState, useEffect } from 'react';

const BASE_URL = 'https://electiva5-api.apolobyte.top';

const fetchImageList = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/list-images`);
  const data = await response.json();
  if (Array.isArray(data)) return data;
  if (data.images && Array.isArray(data.images)) return data.images;
  return [];
};

export const ImageManager = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    fetchImageList()
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div>
      <h1>Administrador de imágenes</h1>
      <p>Lista</p>
      <ul>
        {images?.map((imageName, index) => (
          <li key={index}>
            <p>{imageName}</p>
            <img
              src={`${BASE_URL}/uploads/${imageName}`}
              alt={imageName}
              style={{ width: '200px', height: 'auto' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
