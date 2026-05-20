import React, { useEffect, useState } from 'react';

const BASE = 'https://electiva5-api.apolobyte.top';

export const ImageManager: React.FC = () => {
  const [images, setImages] = useState<string[] | undefined>(undefined);

  const fetchImageList = async (): Promise<string[] | undefined> => {
    try {
      const res = await fetch(`${BASE}/list-images`);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();

      let list: string[] | undefined;
      if (Array.isArray(data)) {
        list = data as string[];
      } else if (data && Array.isArray(data.images)) {
        list = data.images;
      } else if (data && Array.isArray(data.files)) {
        list = data.files;
      } else if (data && typeof data === 'object') {
        const values = (Object.values(data).flat?.() || []) as unknown[];
        const isString = (v: unknown): v is string => typeof v === 'string';
        list = values.filter(isString);
      }

      return list;
    } catch (err) {
      console.error('fetchImageList error:', err);
      return [];
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      const list = await fetchImageList();
      if (mounted) setImages(list);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Image Manager</h2>

      {images === undefined ? (
        <p>Cargando imágenes...</p>
      ) : images.length === 0 ? (
        <p>No hay imágenes para mostrar.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => {
            const src = img.startsWith('http') ? img : `${BASE}/uploads/${img}`;
            return (
              <li key={`${img}-${idx}`} className="border p-2 rounded">
                <img
                  src={src}
                  alt={img}
                  className="w-full h-32 object-cover mb-2 rounded"
                />
                <div className="text-sm break-words">{img}</div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};
