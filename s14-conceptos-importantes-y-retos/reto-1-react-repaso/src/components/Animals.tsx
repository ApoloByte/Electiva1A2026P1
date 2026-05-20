import { useState } from 'react';

// 1. CREAR LA INTERFACE ANIMAL
interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

export const AnimalsManager = () => {
  // 2. USESTATE TIPO LISTA CON AL MENOS 5 REGISTROS
  const [animals] = useState<Animal[]>([
    { name: 'Lucas', age: 3, color: 'Marrón', isPet: true, height: 45 },
    { name: 'Michi', age: 2, color: 'Blanco', isPet: true, height: 25 },
    { name: 'Zeus', age: 5, color: 'Negro', isPet: false, height: 60 },
    { name: 'Paco', age: 1, color: 'Verde', isPet: true, height: 15 },
    { name: 'Sombra', age: 4, color: 'Gris', isPet: false, height: 50 }
  ]);

  return (
    <div style={{ marginTop: '20px', fontFamily: 'sans-serif' }}>
      <h3>Lista de Animales Registrados</h3>
      
      {/* 3. UTILIZAR LA FUNCIÓN MAP PARA RECORRER LA LISTA */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {animals.map((animal, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '200px', backgroundColor: '#f9f9f9' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>🐾 {animal.name}</h4>
            <p style={{ margin: '4px 0' }}><strong>Edad:</strong> {animal.age} años</p>
            <p style={{ margin: '4px 0' }}><strong>Color:</strong> {animal.color}</p>
            <p style={{ margin: '4px 0' }}><strong>Altura:</strong> {animal.height} cm</p>
            
            {/* 4. OPERADOR TERNARIO PARA COMPROBAR ISPET */}
            <div style={{ marginTop: '10px' }}>
              {animal.isPet ? (
                <span style={{ backgroundColor: '#d4edda', color: '#155724', padding: '6px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', display: 'inline-block' }}>
                  🏠 Es una Mascota
                </span>
              ) : (
                <span style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '6px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', display: 'inline-block' }}>
                  🌳 Salvaje
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};