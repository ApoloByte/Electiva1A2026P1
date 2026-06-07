import { useEffect, useState } from "react";

interface Animal {
  name: string;
  age: number;
  color: string;
  isPet: boolean;
  height: number;
}

export const AnimalList = () => {

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

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (

  <div className="min-h-screen bg-gray-100 p-10">

    <h1 className="text-5xl font-black text-center text-gray-800 mb-12">
      🐾 Bienvenido al sistema de animales
    </h1>

    <div className="max-w-5xl mx-auto space-y-6">

      {animals.map((animal, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >

          <div className="flex">

            <div
              className={
                animal.isPet
                  ? "w-4 bg-green-500"
                  : "w-4 bg-orange-500"
              }
            ></div>

            <div className="p-6 flex-1">

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-3xl font-bold text-gray-800">
                  {animal.name}
                </h2>

                <span
                  className={
                    animal.isPet
                      ? "bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold"
                      : "bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold"
                  }
                >
                  {animal.isPet
                    ? "🐶 Mascota"
                    : "🦁 Salvaje"}
                </span>

              </div>

              <div className="grid grid-cols-3 gap-4 text-center">

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-gray-500 text-sm">
                    Edad
                  </p>
                  <p className="font-bold text-xl">
                    {animal.age}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-gray-500 text-sm">
                    Color
                  </p>
                  <p className="font-bold text-xl">
                    {animal.color}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-gray-500 text-sm">
                    Altura
                  </p>
                  <p className="font-bold text-xl">
                    {animal.height} cm
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

);
};
