// Importamos desde la nueva ubicación
import ImageManager from './components/ImageManager';

export default function App() {
  return (
    <div className="min-h-screen bg-[#222222] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Administrador de imágenes</h1>
      
      <ImageManager />
    </div>
  );
}