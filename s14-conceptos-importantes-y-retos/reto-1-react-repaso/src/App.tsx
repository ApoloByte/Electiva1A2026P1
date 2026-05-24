import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";

interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

function App() {

  const [animals, setAnimals] = useState<Animal[]>([
    {
      name: "Apolo",
      age: 1,
      color: "cafe",
      isPet: true,
      height: 30
    },

    {
      name: "Patricio",
      age: 3,
      color: "blanco",
      isPet: true,
      height: 50
    },

    {
      name: "Lorenzo",
      age: 2,
      color: "negro",
      isPet: false,
      height: 40
    },

    {
      name: "Dexter",
      age: 2,
      color: "castaño",
      isPet: false,
      height: 60
    },

    {
      name: "Max",
      age: 5,
      color: "balnco con manchas negras",
      isPet: true,
      height: 45
    }
  ]);

  const getAnimals = async () => {

    const response = await fetch(
      "https://electiva5-api.apolobyte.top/animals"
    );

    const data = await response.json();

    setAnimals(data);
  };

  useEffect(() => {

    getAnimals();

  }, []);

  return (
    <>
      <h1>Solución de los retos planteados</h1>

      <Welcome />

      <h2>Recorrer la lista de animales</h2>

      {
        animals.map((animal, index) => (

          <div key={index}>

            <h3>Animal {index + 1}</h3>

            <p>Nombre: {animal.name}</p>

            <p>Edad: {animal.age}</p>

            <p>Color: {animal.color}</p>

            <p>Altura: {animal.height}</p>

            <p>
              Es mascota:
              {
                animal.isPet
                  ? " Sí "
                  : " No "
              }
            </p>

          </div>

        ))
      }

    </>
  )
}

export default App;