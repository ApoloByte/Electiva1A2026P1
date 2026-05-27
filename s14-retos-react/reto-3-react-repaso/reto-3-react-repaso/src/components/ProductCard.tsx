import React from 'react';
// Usamos "import type" para cumplir estrictamente con 'verbatimModuleSyntax'
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 ${
      product.isEnabled 
        ? 'bg-white border-slate-200 shadow-sm hover:shadow-md' 
        : 'bg-slate-100 border-slate-200 opacity-60 grayscale'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-md">
            {product.category.name}
          </span>
          <h3 className="text-xl font-bold text-slate-800 mt-2">{product.name}</h3>
        </div>
        
        {/* Renderizado condicional basado en la propiedad isEnabled */}
        {product.isEnabled ? (
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
            ● Disponible
          </span>
        ) : (
          <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-full">
            ✕ Agotado
          </span>
        )}
      </div>

      <div className="flex justify-between items-center mt-6 border-t pt-4 border-slate-100">
        <span className="text-sm text-slate-500 font-medium">Precio Unitario</span>
        <span className="text-2xl font-black text-slate-900">${product.price.toLocaleString()}</span>
      </div>
    </div>
  );
}