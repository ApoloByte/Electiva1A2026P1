import { useState } from 'react';


interface Animal {
  id?: number; 
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: string;
}

export const Bienvenida = () => {
  const [animals, setAnimals] = useState<Animal[]>([
    { id: 1, name: 'Max', age: 5, color: 'Blanco', isPet: true, height: '30cm' },
    { id: 2, name: 'Toby', age: 3, color: 'Café', isPet: true, height: '40cm' },
    { id: 3, name: 'Luna', age: 2, color: 'Negro', isPet: false, height: '25cm' },
    { id: 4, name: 'Simba', age: 7, color: 'Dorado', isPet: false, height: '1.1m' },
    { id: 5, name: 'Oliver', age: 4, color: 'Gris', isPet: true, height: '35cm' },
  ]);

  const [apiAnimals, setApiAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(false);


  const toggleIsPet = (id: number) => {
    setAnimals(animals.map(animal => 
      animal.id === id ? { ...animal, isPet: !animal.isPet } : animal
    ));
  };

  const fetchApiAnimals = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data = await response.json();
      setApiAnimals(data);
    } catch (error) {
      console.error("Error al cargar la API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h1>Solución de los retos planteados</h1>
      <h2>2 mensaje de bienvenida</h2>
      <p>BIENVENIDO</p>
      <h2>5 Recorrer la lista de animales (Datos Locales)</h2>

      {animals.map((animal, index) => (
        <div key={`local-${animal.id}`} style={{ marginBottom: '20px' }}>
          <h3>Animal {index + 1}: {animal.name}</h3>
          <p>Nombre: {animal.name}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          <p>Altura: {animal.height}</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '15px 0' }}>
            <input 
              type="checkbox" 
              checked={animal.isPet} 
              onChange={() => toggleIsPet(animal.id as number)} // Esto revive la funcionalidad
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label>¿Es una mascota? (Marca para "Sí")</label>
          </div>
          
          <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
            Resultado: <strong>Es mascota: {animal.isPet ? 'Sí' : 'No'}</strong>
          </p>
        </div>
      ))}
      
      <h2>Datos desde la API</h2>
      <button 
        onClick={fetchApiAnimals}
        style={{ padding: '10px 15px', fontSize: 'auto', cursor: 'pointer', marginBottom: '20px' }}
      >
        {loading ? 'Cargando...' : 'Obtener animales de la API'}
      </button>

      {apiAnimals.map((animal, index) => {
        let mascotaTexto = "";
        if (animal.isPet === true) {
          mascotaTexto = "Sí";
        } else {
          mascotaTexto = "No";
        }

        return (
          <div key={`api-${index}`} style={{ marginBottom: '20px' }}>
            <h3>Animal API {index + 1}: {animal.name}</h3>
            <p>Nombre: {animal.name}</p>
            <p>Edad: {animal.age}</p>
            <p>Color: {animal.color}</p>
            <p>Altura: {animal.height}</p>
            
            <p style={{ fontSize: '1.1rem', color: '#bbb' }}>
              Es mascota: <strong>{mascotaTexto}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};