import { useState, useEffect } from 'react';
import type { Animal } from '../interfaces/Animal';

export const useAnimals = () => {
  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Firulais", age: 5, color: "café", isPet: true, height: 50 },
    { name: "Michi", age: 2, color: "blanco", isPet: true, height: 25 },
    { name: "Rex", age: 4, color: "negro", isPet: true, height: 60 },
    { name: "Leo", age: 3, color: "naranja", isPet: true, height: 30 },
    { name: "Tigre Salvaje", age: 8, color: "rayado", isPet: false, height: 120 }
  ]);

  useEffect(() => {
    const getAnimalsFromAPI = async () => {
      try {
        const response = await fetch('https://electiva5-api.apolobyte.top/animals');
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error("Error al obtener los animales:", error);
      }
    };

    getAnimalsFromAPI();
  }, []);

  // Retornamos el estado para que cualquier componente que use el hook pueda acceder a él
  return { animals };
};