import type { Product } from '../hooks/useProducts';

interface ProductCardProps {
    product: Product;
    index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-amber-500 transition-colors duration-200">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="text-lg font-bold text-amber-400">{product.name}</h3>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
                        {product.category.name}
                    </span>
                </div>
                <span className="text-xl font-mono font-bold text-white">${product.price.toLocaleString()}</span>
            </div>

            <p className="text-sm text-slate-400 mb-4">{product.description}</p>

            <div className="grid grid-cols-2 gap-1 text-sm">
                <span className="text-slate-500">Stock</span>
                <span className="text-white">{product.quantity} unidades</span>
                <span className="text-slate-500">Dimensiones</span>
                <span className="text-white font-mono text-xs">{product.height}×{product.width}×{product.length} cm</span>
                <span className="text-slate-500">Categoría</span>
                <span className="text-slate-300">{product.category.description}</span>
            </div>

            {product.image_url && (
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="mt-4 w-32 h-32 object-cover rounded-lg"
                />
            )}
        </div>
    );
};
