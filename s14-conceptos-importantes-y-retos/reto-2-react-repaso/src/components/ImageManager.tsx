import { useEffect, useState } from 'react';

export const ImageManager = () => {
  // 2. Cree un useState llamado images que acepte datos del tipo <string[] | undefined>
  // Inicia en undefined para saber cuándo está cargando la información de la red
  const [images, setImages] = useState<string[] | undefined>(undefined);

  // 3. Cree una función asíncrona llamada fetchImageList para recibir un objeto con la lista de imágenes
  const fetchImageList = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/list-images');
      const data = await response.json();
      
      // 4. Con la función setImages del useState, actualice la lista dentro de la función asíncrona
      // Ojo: entramos a data.images porque el JSON real viene envuelto en un objeto
      setImages(data.images);
    } catch (error) {
      console.error('Error al recibir la lista de imágenes desde el servidor:', error);
    }
  };

  // 5. Utilice un useEffect con el fin de llamar a la función fetchImageList() una sola vez
  useEffect(() => {
    fetchImageList();
  }, []);

  // Ruta base entregada por el profesor en la guía para construir las imágenes
  const baseUrl = 'https://electiva5-api.apolobyte.top/uploads/';

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '10px' }}>
      {/* 6. El resultado esperado se presenta en la imagen (Títulos idénticos a la guía) */}
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '5px 0' }}>
        Administrador de imágenes
      </h1>
      <p style={{ fontSize: '14px', color: '#aaa', margin: '0 0 20px 0' }}>
        List all images
      </p>

      {/* Controlamos el estado inicial: si sigue en undefined, muestra un texto de carga */}
      {images === undefined ? (
        <p>Cargando lista de imágenes desde el servidor...</p>
      ) : (
        // 6. Liste las imágenes utilizando la función map; dentro del li utilice lo siguiente
        <ul style={{ paddingLeft: '20px', margin: 0 }}>
          {images.map((imgName, index) => (
            <li key={index} style={{ marginBottom: '25px', fontSize: '14px' }}>
              {/* Muestra el nombre de la imagen (ej: bakery.jpg) */}
              <span style={{ display: 'block', marginBottom: '8px' }}>
                {imgName}
              </span>
              
              {/* Muestra el componente img utilizando la ruta completa combinando baseUrl y el nombre de la foto */}
              <img 
                src={`${baseUrl}${imgName}`} 
                alt={imgName} 
                style={{ 
                  width: '100%', 
                  maxWidth: '500px', // Acotamos el tamaño para que se vea cómodo e idéntico al ejemplo
                  display: 'block', 
                  borderRadius: '4px' 
                }} 
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};