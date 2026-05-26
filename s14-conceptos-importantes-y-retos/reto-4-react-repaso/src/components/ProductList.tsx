import { useProducts } from '../hooks/useProducts';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const { products, loading, fetchProducts } = useProducts();

    const enabledProducts = products.filter(p => p.isEnabled);

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2 py-1 rounded-md font-mono">RETO 3</span>
                <h2 className="text-2xl font-bold text-white">Productos Disponibles</h2>
            </div>

            <button
                onClick={fetchProducts}
                disabled={loading}
                className="bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-semibold px-5 py-2 rounded-lg transition-colors duration-200 cursor-pointer mb-6"
            >
                {loading ? 'Cargando...' : 'Cargar Productos desde API'}
            </button>

            {enabledProducts.length === 0 ? (
                <p className="text-slate-500 text-sm">No hay productos habilitados.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {enabledProducts.map((product, i) => (
                        <ProductCard key={i} product={product} index={i} />
                    ))}
                </div>
            )}
        </section>
    );
};
