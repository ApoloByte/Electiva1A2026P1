import { useState } from 'react';


export interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

const initialAnimals: Animal[] = [
  { name: 'Firulais', age: 3, color: 'Café', isPet: true, height: 40 },
  { name: 'Simba', age: 5, color: 'Naranja', isPet: true, height: 25 },
  { name: 'Lobo Gris', age: 7, color: 'Gris', isPet: false, height: 80 },
  { name: 'Nemo', age: 1, color: 'Naranja y blanco', isPet: false, height: 5 },
  { name: 'Buddy', age: 4, color: 'Dorado', isPet: true, height: 50 },
];

export const useAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>(initialAnimals);

  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };


  return {
    animals,
    fetchAnimals,
  };
};