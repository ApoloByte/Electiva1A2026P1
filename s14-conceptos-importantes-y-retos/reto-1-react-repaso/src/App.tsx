import { useState, useEffect } from "react";
import type { Animal } from "./interfaces/Animal";
import Welcome from "./components/Welcome";

function App() {
  const [animals, setAnimals] = useState<Animal[]>([
    { name: "Max",   age: 5,  color: "white",  isPet: true,  height: 30 },
    { name: "Toby",  age: 3,  color: "brown",  isPet: true,  height: 25 },
    { name: "Leo",   age: 7,  color: "orange", isPet: false, height: 90 },
    { name: "Bella", age: 2,  color: "black",  isPet: true,  height: 20 },
    { name: "Rocky", age: 10, color: "gray",   isPet: false, height: 60 },
  ]);

  useEffect(() => {
  const fetchAnimals = async () => {
    try {
      const response = await fetch("https://electiva5-api.apolobyte.top/animals");
      const data = await response.json();
      setAnimals(data);
    } catch (error) {
      console.error("Error al obtener animales:", error);
    }
  };

  fetchAnimals();
}, []);

return (
  <div>
    <h1>Solución de los retos planteados</h1>
    <h3>2 mensaje de bienvenida</h3>
    <Welcome />

    <h3>5 Recorrer la lista de animales</h3>
    {animals.map((animal, index) => (
      <div key={index}>
        <h4>Animal {index + 1}</h4>
        <p>Nombre: {animal.name}</p>
        <p>Edad: {animal.age}</p>
        <p>Color: {animal.color}</p>
        {animal.isPet ? <p>Es mascota: Sí</p> : null}
        <p>Altura: {animal.height}</p>
      </div>
    ))}
  </div>
);
}

export default App;