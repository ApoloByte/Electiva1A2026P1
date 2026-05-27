import { useEffect, useState } from "react";

interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

export const AnimalList = () => {

  // useState tipo lista con 5 registros
  const [animals] = useState<Animal[]>([
    {
      name: "Firulais",
      age: 3,
      color: "Negro",
      isPet: true,
      height: 40,
    },
    {
      name: "Michi",
      age: 2,
      color: "Blanco",
      isPet: true,
      height: 25,
    },
    {
      name: "León",
      age: 5,
      color: "Amarillo",
      isPet: false,
      height: 120,
    },
    {
      name: "Conejo",
      age: 1,
      color: "Gris",
      isPet: true,
      height: 20,
    },
    {
      name: "Tigre",
      age: 4,
      color: "Naranja",
      isPet: false,
      height: 110,
    },
  ]);

  // función asíncrona
  const fetchAnimals = async () => {

    try {

      const response = await fetch(
        "https://electiva5-api.apolobyte.top/animals"
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {

      console.log(error);

    }
  };

  // ejecutar función async
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">

      {/* mensaje de bienvenida */}
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Bienvenido al sistema de animales
      </h1>

      {/* map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {animals.map((animal, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >

            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {animal.name}
            </h2>

            <div className="space-y-2 text-gray-700">

              <p>
                <span className="font-semibold">Edad:</span>{" "}
                {animal.age}
              </p>

              <p>
                <span className="font-semibold">Color:</span>{" "}
                {animal.color}
              </p>

              <p>
                <span className="font-semibold">Altura:</span>{" "}
                {animal.height}
              </p>

              {/* operador ternario */}
              <p
                className={
                  animal.isPet
                    ? "text-green-600 font-bold"
                    : "text-red-500 font-bold"
                }
              >
                {animal.isPet
                  ? "Es una mascota"
                  : "No es mascota"}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};
