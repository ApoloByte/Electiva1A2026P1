import ImageManager from './ImageManager';

export default function App() {
  return (
    <div className="min-h-screen bg-[#222222] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Administrador de imágenes</h1>
      
      {/* Si no pones esta etiqueta, la pantalla quedará vacía */}
      <ImageManager />
    </div>
  );
}