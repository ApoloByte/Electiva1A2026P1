import { useFetchImages } from '../../hooks/useFetchImages';
import { ImageCard } from './ImageCard';

export const Images = () => {
  const { images } = useFetchImages();
  const baseUrl = 'https://electiva5-api.apolobyte.top/uploads/';

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2 style={{ color: '#fff', marginBottom: '5px', textAlign: 'center' }}>
        Galería de Mascotas - Reto 2
      </h2>
      <p style={{ color: '#a1a1aa', fontSize: '14px', textAlign: 'center', marginTop: '0', marginBottom: '25px' }}>
        Refactorizado con Hooks y Props
      </p>

      {images === undefined ? (
        <p style={{ color: '#60a5fa', textAlign: 'center', fontSize: '15px' }}>
          ⏳ Conectando al Custom Hook y descargando fotos...
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {images.map((imgName, index) => (
            <ImageCard key={index} imgName={imgName} baseUrl={baseUrl} />
          ))}
        </div>
      )}
    </div>
  );
};