import { useImages } from '../hooks/useImages';
import { ImageItem } from './ImageItem';

export default function ImageManager() {
  // Usamos nuestro Custom Hook
  const { images } = useImages();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">List all images</h2>
      
      {/* Si images es undefined, mostramos un mensaje de carga */}
      {images === undefined ? (
        <p className="text-gray-400">Cargando imágenes desde el servidor...</p>
      ) : (
        /* Listar las imágenes utilizando map y nuestro componente hijo */
        <ul className="list-disc ml-6">
          {images.map((imageName, index) => (
            <ImageItem key={index} imageName={imageName} />
          ))}
        </ul>
      )}
    </div>
  );
}