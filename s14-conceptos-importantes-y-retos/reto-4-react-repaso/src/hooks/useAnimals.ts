import { useState, useEffect } from 'react';

interface AnimalData {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

export const useAnimals = () => {
  const [animals, setAnimals] = useState<AnimalData[]>([
    { name: 'Max', age: 5, color: 'white', isPet: true, height: 45 },
    { name: 'Toby', age: 3, color: 'black', isPet: true, height: 30 },
    { name: 'Leon', age: 8, color: 'golden', isPet: false, height: 120 },
    { name: 'Luna', age: 2, color: 'gray', isPet: true, height: 25 },
    { name: 'Milo', age: 4, color: 'brown', isPet: false, height: 50 }
  ]);

  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data: AnimalData[] = await response.json();
      setAnimals((prevAnimals) => [...prevAnimals, ...data]);
    } catch (error) {
      console.error('Error al traer los animales de la API:', error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return { animals };
};

export type { AnimalData }; 