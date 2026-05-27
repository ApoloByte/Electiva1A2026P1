import React from 'react';
import { useFetchImages } from '../hooks/useFetchImages';

export default function ImageManager() {
  const { images, loading } = useFetchImages();
  
  // Ruta base solicitada para armar la URL de cada imagen
  const BASE_URL = 'https://electiva5-api.apolobyte.top/uploads/';

  if (loading) {
    return <p className="text-center text-gray-500 py-10 font-medium">Cargando galería de imágenes...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">
        Galería de Imágenes Disponibles
      </h2>
      
      {/* Listar las imágenes utilizando la función map */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images && images.map((imgName, index) => (
          <li 
            key={index} 
            className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            {/* Construcción de la ruta dinámica de la imagen */}
            <img 
              src={`${BASE_URL}${imgName}`} 
              alt={imgName} 
              className="w-full h-44 object-cover rounded-lg shadow-sm mb-3"
            />
            {/* Texto descriptivo de la imagen */}
            <span className="text-xs font-mono text-gray-500 truncate w-full text-center">
              {imgName}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}