import { useImages } from '../hooks/useImages';
import { ImageCard } from './ImageCard';

export const ImageManager = () => {
  const { images } = useImages();

  return (
    <section className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Administrador de imágenes</h1>
      <p className="mb-4 text-gray-600">Lista</p>
      <ul className="flex flex-col gap-4">
        {images?.map((imageName, index) => (
          <ImageCard key={index} imageName={imageName} />
        ))}
      </ul>
    </section>
  );
};
