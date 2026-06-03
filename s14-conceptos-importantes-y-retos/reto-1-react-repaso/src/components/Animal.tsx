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

export const AnimalComponent = () => { // Nota: Cambié el nombre a AnimalComponent para evitar conflictos con la interfaz Animal
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



  return (
    <div>
      <h2>Mensaje de bienvenida</h2>
      <p>¡Bienvenido a la lista de animales!</p>

     
      <button 
        onClick={fetchAnimals} 
        style={{ margin: '10px 0', padding: '8px 16px', cursor: 'pointer' }}
      >
        Cargar lista de la API
      </button>

      <h2>Recorrer la lista de animales</h2>
      {animals.map((animal, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
          <strong>Animal {index + 1}</strong>
          <p>Nombre: {animal.name}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          {animal.isPet ? <p>Es mascota: Sí</p> : null}
          <p>Altura: {animal.height} cm</p>
        </div>
      ))}
    </div>
  );
};