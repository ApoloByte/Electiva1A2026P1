import { useState } from 'react';
import Bienvenida from './components/Bienvenida';
import { type Animal } from './interfaces/Animal'; // Importamos la interfaz correctamente

function App() {
  // Creamos el useState especificando que es un arreglo de tipo Animal -> <Animal[]>
  const [animals, setAnimals] = useState<Animal[]>([
    {
      name: "perro",
      age: 3,
      color: "Blanco y café",
      isPet: true,
      height: 0.55
    },
    {
      name: "Luna",
      age: 2,
      color: "Gris",
      isPet: true,
      height: 0.25
    },
    {
      name: "Simba",
      age: 5,
      color: "Dorado",
      isPet: false, 
      height: 1.2
    },
    {
      name: "Copito",
      age: 1,
      color: "Blanco",
      isPet: true,
      height: 0.15
    },
    {
      name: "Zeus",
      age: 4,
      color: "Negro",
      isPet: true,
      height: 0.70
    }
  ]);

  return (
    <div>
      <Bienvenida />

      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Lista de Animales ({animals.length})</h2>
        
        {/* Renderizamos la lista en el HTML */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {animals.map((animal, index) => (
            <li 
              key={index} 
              style={{ 
                background: '#f9f9f9', 
                margin: '10px 0', 
                padding: '15px', 
                borderRadius: '6px',
                borderLeft: animal.isPet ? '5px solid #22c55e' : '5px solid #ef4444' 
              }}
            >
              <strong>{animal.name}</strong> - {animal.age} años | Color: {animal.color} | Altura: {animal.height}m 
              <br />
              <small>{animal.isPet ? '🏡 Mascota' : '🌲 Salvaje / Santuario'}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;