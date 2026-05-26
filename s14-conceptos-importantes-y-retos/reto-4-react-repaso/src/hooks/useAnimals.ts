import { useState } from 'react';

export interface Animal {
  id: number;
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: string;
}

const LOCAL_ANIMALS: Animal[] = [
  { id: 1, name: 'Max', age: 5, color: 'Blanco', isPet: true, height: '30cm' },
  { id: 2, name: 'Toby', age: 3, color: 'Café', isPet: true, height: '40cm' },
  { id: 3, name: 'Luna', age: 2, color: 'Negro', isPet: false, height: '25cm' },
  { id: 4, name: 'Simba', age: 7, color: 'Dorado', isPet: false, height: '1.1m' },
  { id: 5, name: 'Oliver', age: 4, color: 'Gris', isPet: true, height: '35cm' },
];

export function useAnimals() {
  const [animals, setAnimals] = useState<Animal[]>(LOCAL_ANIMALS);
  const [apiAnimals, setApiAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleIsPet = (id: number) => {
    setAnimals(prev =>
      prev.map(a => (a.id === id ? { ...a, isPet: !a.isPet } : a))
    );
  };

  const fetchApiAnimals = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data = await res.json();
      setApiAnimals(data);
    } catch (err) {
      console.error('Error al cargar animales:', err);
    } finally {
      setLoading(false);
    }
  };

  return { animals, apiAnimals, loading, toggleIsPet, fetchApiAnimals };
}
