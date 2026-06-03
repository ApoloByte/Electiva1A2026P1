import { useEffect, useState } from 'react';
import { Mensaje } from './Mensaje';

// 2. Crear una interface llamada Animal
interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number; 
}

export const AnimalsManager = () => {
  // 3. Crear un useState tipo lista llamada animals con al menos 5 registros iniciales
  const [animals, setAnimals] = useState<Animal[]>([
    { name: 'Lucas', age: 3, color: 'Marrón', isPet: true, height: 45 },
    { name: 'Michi', age: 2, color: 'Blanco', isPet: true, height: 25 },
    { name: 'Zeus', age: 5, color: 'Negro', isPet: false, height: 60 },
    { name: 'Paco', age: 1, color: 'Verde', isPet: true, height: 15 },
    { name: 'Sombra', age: 4, color: 'Gris', isPet: false, height: 50 }
  ]);

  // 6. Utilice una función asíncrona para obtener y almacenar los datos del endpoint
  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data = await response.json();
      
      // Mapeamos el JSON real de la API 
      const apiAnimals: Animal[] = data.map((item: any) => ({
        name: item.name,
        age: Number(item.age),
        color: item.color,
        isPet: item.isPet === 'true' || item.isPet === true,
        // Como el JSON real no trae height, le asignamos 0 por defecto para respetar la interface del punto 2
        height: item.height ? Number(item.height) : 0 
      }));

      // Almacenamos los datos de la API en el estado, reemplazando los 5 iniciales
      setAnimals(apiAnimals);
    } catch (error) {
      console.error('Error al obtener los datos de la API:', error);
    }
  };

  // useEffect para llamar a la función fetchAnimals una sola vez al cargar el componente
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '10px' }}>
      {/* 1. Componente que muestra el mensaje de bienvenida */}
      <Mensaje />

      {/* Título de la sección según el formato estricto de la guía */}
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
        5 Recorrer la lista de animales
      </h2>
      
      {/* Estructura de lista simple y limpia basada en la captura de la guía */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* 4. Utilice la función map para recorrer la lista */}
        {animals.map((animal, index) => (
          <div key={index} style={{ fontSize: '14px' }}>
            {/* Imprime de forma dinámica: Animal 1, Animal 2, etc. */}
            <h4 style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>
              Animal {index + 1}
            </h4>
            <p style={{ margin: '2px 0' }}>Nombre: {animal.name}</p>
            <p style={{ margin: '2px 0' }}>Edad: {animal.age}</p>
            <p style={{ margin: '2px 0' }}>Color: {animal.color}</p>
            
            {/* 5. Operador ternario para definir si mostrar o no el elemento según isPet */}
            <p style={{ margin: '2px 0' }}>
              Es mascota: {animal.isPet ? 'SI' : 'NO'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};