import { useImages } from '../hooks/useImages';
import { ImageCard } from './ImageCard';

export const ImageManager = () => {
    const { images, baseUrl } = useImages();

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-violet-500 text-white text-xs font-bold px-2 py-1 rounded-md font-mono">RETO 2</span>
                <h2 className="text-2xl font-bold text-white">Galería de Imágenes</h2>
            </div>

            {images === undefined ? (
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full" />
                    Cargando imágenes...
                </div>
            ) : images.length === 0 ? (
                <p className="text-slate-500 text-sm">No se encontraron imágenes.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <ImageCard
                            key={i}
                            name={img}
                            src={`${baseUrl}${img}`}
                            index={i}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
};