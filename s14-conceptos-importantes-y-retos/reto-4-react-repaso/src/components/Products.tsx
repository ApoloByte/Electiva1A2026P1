import { useImages } from '../hooks/useImages';
import { useProducts } from '../hooks/useProducts';
import { useAnimals } from '../hooks/useAnimals';
import { ProductCard } from '../components/ProductCard';
import { AnimalCard } from '../components/AnimalCard';

export const Products = () => {
  const { images, baseUrl } = useImages();
  const { productList, fetchAndModifyProducts } = useProducts();
  const { animals } = useAnimals();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">

      <header className="max-w-7xl mx-auto mb-10 border-b border-slate-800 pb-6">
        <h1> SOLUCION RETO 4 REACT XD </h1>
        <div className="mt-2 text-slate-400">
          <p className="text-sm font-semibold text-slate-300">WELCOME TO MARIO KART</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">

        <section className="xl:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-100">Productos</h2>
              <p className="text-slate-400 text-xs">Gestión de inventario activo</p>
            </div>
            <button
              onClick={fetchAndModifyProducts}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-200 active:scale-95"
            >
              Cargar API de Productos
            </button>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
            {productList.map((producto, index) => (
              <ProductCard key={index} producto={producto} />
            ))}
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-slate-100">Animales</h2>
            <p className="text-slate-400 text-xs">5 Recorrer la lista de animales</p>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
            {animals.map((animal, index) => (
              <AnimalCard key={index} animal={animal} index={index} />
            ))}
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col gap-4">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-slate-100">Galería</h2>
            <p className="text-slate-400 text-xs">List all images</p>
          </div>

          {images === undefined ? (
            <div className="flex items-center justify-center p-8 text-slate-400 text-xs animate-pulse">
              Cargando imágenes del servidor...
            </div>
          ) : (
            <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
              {images.map((imgName, index) => (
                <li key={index} className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-3 shadow-sm">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2 truncate bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    📄 {imgName}
                  </span>
                  <div className="overflow-hidden rounded-lg bg-slate-950 aspect-video flex items-center justify-center border border-slate-800">
                    <img
                      src={`${baseUrl}${imgName}`}
                      alt={imgName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

      </main>
    </div>
  );
};

export default Products;