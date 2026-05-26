import { useEffect, useState } from "react";

interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

const AnimalList = () => {

  const [animals, setAnimals] = useState<Animal[]>([
    {
      name: "Firulais",
      age: 2,
      color: "Brown",
      isPet: true,
      height: 40
    },
    {
      name: "Max",
      age: 4,
      color: "Black",
      isPet: true,
      height: 50
    },
    {
      name: "Tiger",
      age: 3,
      color: "Orange",
      isPet: false,
      height: 35
    },
    {
      name: "Luna",
      age: 1,
      color: "White",
      isPet: true,
      height: 25
    },
    {
      name: "Rocky",
      age: 5,
      color: "Gray",
      isPet: false,
      height: 60
    }
  ]);

  const getAnimals = async (): Promise<void> => {

  try {

    const response = await fetch(
      "https://electiva5-api.apolobyte.top/animals"
    );

    const data = await response.json();

    const formattedData: Animal[] = data.map(
      (animal: Omit<Animal, "height">) => ({
        ...animal,
        height: 0
      })
    );

    setAnimals(formattedData);

  } catch (error) {

    console.log(error);

  }
};

  useEffect(() => {

  const fetchAnimals = async () => {
    await getAnimals();
  };

  void fetchAnimals();

}, []);

  return (

    <div>

      <h1>Bienvenido al reto de React con TypeScript</h1>

      {
        animals.map((animal, index) => (

          <div key={index}>

            <h2>{animal.name}</h2>

            <p>Edad: {animal.age}</p>

            <p>Color: {animal.color}</p>

            <p>Altura: {animal.height}</p>

            {
              animal.isPet
                ? <p>Es una mascota</p>
                : <p>No es mascota</p>
            }

            <hr />

          </div>
        ))
      }

    </div>
  );
};

export default AnimalList;