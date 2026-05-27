import { useState, useEffect } from 'react';

// Definición de la interfaz Animal
interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height?: number; 
}

// Componente de bienvenida
const WelcomeMessage = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-blue-600">Solucion Reto 1</h1>
      <p className="text-gray-600">Bienvenidos chavales</p>
    </div>
  );
};

export default function App() {
  // 1. Crear el useState con al menos 5 registros iniciales
  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Firulais", age: 5, color: "café", isPet: true, height: 50 },
    { name: "Michi", age: 2, color: "blanco", isPet: true, height: 25 },
    { name: "Rex", age: 4, color: "negro", isPet: true, height: 60 },
    { name: "Leo", age: 3, color: "naranja", isPet: true, height: 30 },
    { name: "Tigre Salvaje", age: 8, color: "rayado", isPet: false, height: 120 }
  ]);

 // 3. useEffect para llamar a la API cuando el componente se monte por primera vez
  useEffect(() => {
    // Definimos la función ADENTRO del useEffect
    const getAnimalsFromAPI = async () => {
      try {
        const response = await fetch('https://electiva5-api.apolobyte.top/animals');
        const data = await response.json();
        
        // Actualizamos el estado con los datos obtenidos
        setAnimals(data);
      } catch (error) {
        console.error("Error al obtener los animales:", error);
      }
    };

    // La ejecutamos inmediatamente después de declararla
    getAnimalsFromAPI();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Mensaje de bienvenida */}
      <WelcomeMessage />

      {/* 4. Utilizar map para recorrer la lista de animales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {animals.map((animal, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-gray-800">{animal.name}</h2>
            <ul className="mt-2 text-gray-600">
              <li><strong>Edad:</strong> {animal.age} años</li>
              <li><strong>Color:</strong> {animal.color}</li>
              {/* Mostramos la altura solo si existe */}
              {animal.height && <li><strong>Altura:</strong> {animal.height} cm</li>}
            </ul>

            <div className="mt-4">
              {/* 5. Uso del operador ternario para la propiedad isPet */}
              {animal.isPet ? (
                <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-semibold">
                   Es una mascota
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-semibold">
                  D No es una mascota
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}