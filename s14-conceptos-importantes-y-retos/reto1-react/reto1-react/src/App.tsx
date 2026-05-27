import { useAnimals } from './hooks/useAnimals';
import { WelcomeMessage } from './components/WelcomeMessage';
import { AnimalCard } from './components/AnimalCard';

export default function App() {
  // Consumimos nuestro Custom Hook
  const { animals } = useAnimals();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Usamos el componente y le pasamos la información por Props */}
      <WelcomeMessage 
        title="Solucion Reto 1" 
        subtitle="Bienvenidos chavales" 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Recorremos la lista y renderizamos el componente AnimalCard */}
        {animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} />
        ))}
      </div>
      
    </div>
  );
}