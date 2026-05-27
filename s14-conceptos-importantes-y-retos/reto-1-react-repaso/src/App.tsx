import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import type { Animal } from "./interfaces/Animal";

function App() {
  // se llena los datos
  const [animals, setAnimals] = useState<Animal[]>([]);

  // funcionn asincrona 
  const getAnimals = async () => {
    try {
      const response = await fetch(
        "https://electiva5-api.apolobyte.top/animals"
      );

      const data: Animal[] = await response.json();

      // guardar datos 
      setAnimals(data);
    } catch (error) {
      console.error("Error al obtener animales:", error);
    }
  };

  // cargar datos al iniciar la app
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Welcome />

      <h2>Lista de animales</h2>

      {/* opcional: carga */}
      {animals.length === 0 && <p>Cargando animales...</p>}

      {animals.map((animal, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <p><strong>Nombre:</strong> {animal.name}</p>
          <p><strong>Edad:</strong> {animal.age}</p>
          <p><strong>Color:</strong> {animal.color}</p>

          {/* punto 5*/}
          {animal.isPet ? (
            <p style={{ color: "green" }}> Es mascota</p>
          ) : (
            <p style={{ color: "red" }}> No es mascota</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;