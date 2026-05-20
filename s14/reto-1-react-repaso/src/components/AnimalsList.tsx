import React, { useEffect, useState } from 'react';

interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

const initialAnimals: Animal[] = [
  { name: 'Max', age: 5, color: 'white', isPet: true, height: 40 },
  { name: 'Toby', age: 2, color: 'brown', isPet: true, height: 35 },
  { name: 'Luna', age: 3, color: 'black', isPet: false, height: 30 },
  { name: 'Rocky', age: 4, color: 'gray', isPet: false, height: 45 },
  { name: 'Bella', age: 1, color: 'golden', isPet: true, height: 25 },
];

export const AnimalsList: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>(initialAnimals);

  const toggleIsPet = (index: number) => {
    setAnimals((prev) =>
      prev.map((a, i) => (i === index ? { ...a, isPet: !a.isPet } : a))
    );
  };

  useEffect(() => {
    let mounted = true;
    const fetchAnimals = async () => {
      try {
        const res = await fetch('https://electiva5-api.apolobyte.top/animals');
        if (!res.ok) throw new Error('Network failed');
        const data = await res.json();
        const fetched: Animal[] = data.map((item: Animal) => ({
          name: item.name,
          age: item.age,
          color: item.color,
          isPet: item.isPet,
          height: 0,
        }));
        if (mounted) setAnimals((prev) => [...prev, ...fetched]);
      } catch (err) {
        console.error('Error fetching:', err);
      }
    };
    fetchAnimals();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="p-6">
      <h2>5 Recorrer la lista de animales</h2>
      {animals.map((animal, idx) => (
        <article key={`${animal.name}-${idx}`} className="mb-6">
          <h3>Animal {idx + 1}</h3>
          <p>Nombre: {animal.name}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          <p>Altura: {animal.height}</p>

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={animal.isPet}
              onChange={() => toggleIsPet(idx)}
            />
            Mostrar como mascota
          </label>

          {animal.isPet ? (
            <div className="mt-2">
              <strong>Es mascota: Sí</strong>
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
};
