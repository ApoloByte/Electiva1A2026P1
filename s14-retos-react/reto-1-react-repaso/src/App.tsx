import React, { useState, useEffect } from 'react';
import { Animal } from './types/animal';

export default function App() {
  // 1. useState tipo lista (Animal[]) inicializado con 5 registros locales
  const [animals, setAnimals] = useState<Animal[]>([
    { name: 'Max', age: 3, color: 'Marrón', isPet: true, height: 45 },
    { name: 'Luna', age: 2, color: 'Blanco', isPet: true, height: 30 },
    { name: 'Rocky', age: 5, color: 'Negro', isPet: false, height: 80 },
    { name: 'Bella', age: 1, color: 'Gris', isPet: true, height: 25 },
    { name: 'Simba', age: 4, color: 'Dorado', isPet: false, height: 110 }
  ]);

  // 2. Función asíncrona para obtener datos de la API
  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://electiva5-api.apolobyte.top/animals');
      const data = await response.json();
      
      // Actualizamos el estado con los datos recibidos del servidor
      setAnimals(data);
    } catch (error) {
      console.error("Error al obtener los animales de la API:", error);
    }
  };

  // 3. useEffect para llamar a la API una sola vez al cargar el componente
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Mensaje de bienvenida solicitado */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 tracking-tight">
            ¡Bienvenido a la Aplicación de Repaso React!
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Reto 1: Control y visualización de registros de animales.
          </p>
        </header>

        {/* Lista de Animales recorridos con la función map */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {animals.map((animal, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-800">{animal.name}</h2>
                
                {/* Operador ternario para la propiedad isPet */}
                {animal.isPet ? (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    🐾 Mascota
                  </span>
                ) : (
                  <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    🦁 Salvaje
                  </span>
                )}
              </div>

              {/* Mostrar los valores restantes de cada animal */}
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold text-gray-700">Edad:</span> {animal.age} años</p>
                <p><span className="font-semibold text-gray-700">Color:</span> {animal.color}</p>
                <p><span className="font-semibold text-gray-700">Altura:</span> {animal.height} cm</p>
              </div>
            </div>
          ))}
        </main>

      </div>
    </div>
  );
}