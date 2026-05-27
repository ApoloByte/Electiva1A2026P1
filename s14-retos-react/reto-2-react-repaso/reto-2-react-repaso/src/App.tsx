import React from 'react';
import ImageManager from './components/ImageManager';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-tight">
            Reto 2: Gestor de Recursos Multimedia
          </h1>
          <p className="text-gray-500 mt-1">Repaso de hooks personalizados y listas remotas</p>
        </header>

        <main>
          {/* Importación del componente ImageManager */}
          <ImageManager />
        </main>
      </div>
    </div>
  );
}