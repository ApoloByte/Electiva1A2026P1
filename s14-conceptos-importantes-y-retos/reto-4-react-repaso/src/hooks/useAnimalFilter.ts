import { useState } from 'react';

export interface Animal {
  name: string;
  type: string;
  isPet: boolean;
}

export const useAnimalFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const initialAnimals: Animal[] = [
    { name: 'Perro', type: 'Mamífero', isPet: true },
    { name: 'Gato', type: 'Mamífero', isPet: true },
    { name: 'Águila', type: 'Ave', isPet: false },
    { name: 'Serpiente', type: 'Reptil', isPet: false },
    { name: 'Salmón', type: 'Pez', isPet: false }
  ];

  const filteredAnimals = initialAnimals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { searchTerm, setSearchTerm, filteredAnimals };
};