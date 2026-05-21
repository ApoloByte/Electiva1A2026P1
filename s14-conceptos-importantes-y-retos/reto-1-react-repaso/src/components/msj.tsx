import React, { useState } from 'react';

// 1. Definición de la interfaz Animal
interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: string; // Ejemplo: "30cm" o "1.2m"
}

export default function WelcomeAnimals() {
  // 2. Estado 'animals' inicializado con tipo Lista de Animales (Animal[]) y 5 registros
  const [animals] = useState<Animal[]>([
    { name: 'Max', age: 3, color: 'Marrón', isPet: true, height: '45 cm' },
    { name: 'Luna', age: 2, color: 'Blanco', isPet: true, height: '25 cm' },
    { name: 'Simba', age: 5, color: 'Dorado', isPet: false, height: '1.1 m' },
    { name: 'Rocky', age: 1, color: 'Negro', isPet: true, height: '30 cm' },
    { name: 'Melman', age: 7, color: 'Manchado', isPet: false, height: '4.2 m' },
  ]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      {/* Mensaje de bienvenida */}
      <header style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
        <p style={{ color: '#333' }}>¡Bienvenido a nuestro Registro de Animales!</p>
        <p style={{ color: '#666' }}>Aquí puedes explorar la lista de ejemplares registrados en nuestro sistema.</p>
      </header>

      {/* Lista de animales utilizando map */}
      <main>
        <h2 style={{ fontSize: '1.2rem', color: '#444' }}>Lista de Animales:</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
          {animals.map((animal, index) => (
            <div 
              key={index} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '15px',
                backgroundColor: '#f9f9f9',
                position: 'relative'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#0070f3' }}>{animal.name}</h3>
              <p style={{ margin: '4px 0' }}><strong>Edad:</strong> {animal.age} {animal.age === 1 ? 'año' : 'años'}</p>
              <p style={{ margin: '4px 0' }}><strong>Color:</strong> {animal.color}</p>
              <p style={{ margin: '4px 0' }}><strong>Estatura:</strong> {animal.height}</p>
              
              {/* Operador ternario para la propiedad isPet */}
              {animal.isPet ? (
                <span style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '4px 8px',
                  backgroundColor: '#e6f4ea',
                  color: '#137333',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  🐾 Mascota Doméstica
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}