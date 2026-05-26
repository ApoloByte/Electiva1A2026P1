import type { ProductData } from '../hooks/useProducts';

interface ProductCardProps {
  producto: ProductData;
}

export const ProductCard = ({ producto }: ProductCardProps) => {
  if (!producto.isEnabled) return null;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">{producto.name}</h3>
      <p className="text-slate-300 text-sm mb-4">{producto.description}</p>
      
      <div className="space-y-1 text-xs bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 mb-4">
        <p><span className="text-slate-400 font-medium">Categoría:</span> {producto.category.name}</p>
        <p><span className="text-slate-400 font-medium">Descripción Cat:</span> {producto.category.description}</p>
        <p><span className="text-slate-400 font-medium">Dimensiones:</span> {producto.height}x{producto.width}x{producto.length} cm</p>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-slate-700/50">
        <span className="text-lg font-extrabold text-emerald-400">${producto.price}</span>
        <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full text-xs font-semibold">
          Stock: {producto.quantity}
        </span>
      </div>

      {producto.image_url && (
        <img 
          src={producto.image_url} 
          alt={producto.name} 
          className="w-full h-32 object-cover rounded-lg mt-4 border border-slate-600" 
        />
      )}
    </div>
  );
};