import { useState, useEffect } from "react";

// 2. Interface Animal
interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

// 3. useState con lista de animales
function App() {
  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Max",     age: 3,  color: "Café",    isPet: true,  height: 0.5 },
    { name: "León",    age: 7,  color: "Amarillo", isPet: false, height: 1.8 },
    { name: "Michi",   age: 2,  color: "Blanco",   isPet: true,  height: 0.3 },
    { name: "Goldie",  age: 1,  color: "Dorado",   isPet: true,  height: 0.2 },
    { name: "Pantera", age: 5,  color: "Negro",    isPet: false, height: 1.2 },
  ]);

  // 6. Función asíncrona para obtener datos del endpoint
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch("https://electiva5-api.apolobyte.top/animals");
        const data: Animal[] = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error("Error al obtener los animales:", error);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>

      {/* 1. Mensaje de bienvenida */}
      <h1>🐾 Bienvenido al Registro de Animales</h1>

      {/* 4. map para recorrer la lista */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {animals.map((animal, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{animal.name}</h3>
            <p>🎂 Edad: {animal.age} años</p>
            <p>🎨 Color: {animal.color}</p>
            <p>📏 Altura: {animal.height} m</p>

            {/* 5. Operador ternario para isPet */}
            {animal.isPet ? (
              <p style={{ color: "green", fontWeight: "bold" }}>
                🏠 Es una mascota
              </p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold" }}>
                🌿 No es una mascota
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;