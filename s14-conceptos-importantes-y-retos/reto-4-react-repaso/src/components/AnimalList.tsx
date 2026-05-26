import { useAnimals } from '../hooks/useAnimals';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
  const { animals } = useAnimals();

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-2">Mensaje de bienvenida</h2>
      <p className="mb-4 text-gray-600">¡Bienvenido a la lista de animales!</p>

      <h2 className="text-2xl font-bold mb-4">Recorrer la lista de animales</h2>
      <div className="flex flex-col gap-3">
        {animals.map((animal, index) => (
          <AnimalCard key={index} animal={animal} index={index} />
        ))}
      </div>
    </section>
  );
};
