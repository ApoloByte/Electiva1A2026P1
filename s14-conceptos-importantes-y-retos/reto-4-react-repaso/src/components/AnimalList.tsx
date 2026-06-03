import { useAnimals } from '../hooks/useAnimals';

export const AnimalComponent = () => {

  const { animals, fetchAnimals } = useAnimals();

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
