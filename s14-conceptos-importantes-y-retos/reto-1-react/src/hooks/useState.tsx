import { useState } from 'react';
import { Animal } from '../types/animal'; // Importamos la interface del paso 2

export const AnimalList = () => {
  // Inicializamos el useState con un array de 5 animales tipado como Animal[]
  const [animals, setAnimals] = useState<Animal[]>([
    {
      name: "Firulais",
      age: 3,
      color: "Café",
      isPet: true,
      height: 0.45
    },
    {
      name: "Michi",
      age: 2,
      color: "Blanco con negro",
      isPet: true,
      height: 0.25
    },
    {
      name: "Lucas",
      age: 5,
      color: "Verde",
      isPet: true,
      height: 0.15
    },
    {
      name: "Simba",
      age: 4,
      color: "Dorado",
      isPet: false, // Es un león salvaje, por ejemplo
      height: 1.20
    },
    {
      name: "Dumbo",
      age: 7,
      color: "Gris",
      isPet: false,
      height: 2.50
    }
  ]);

  return (
    <div>
      <h2>Lista de Animales ({animals.length} registrados)</h2>
      {/* El siguiente paso seguro será renderizarlos, pero el estado ya está listo */}
    </div>
  );
};