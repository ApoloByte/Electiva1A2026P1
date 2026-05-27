import { useEffect,useState } from 'react';
import { Bienvenida } from './components/Bienvenida';

interface Animal{
 name:string;
 age: number;
 color:string;
 isPet: boolean;
 height:number;
}
export const App = () => {

 const [animals, setAnimals] = useState<Animal[]>([
    { name: "Perro", age: 3, color: "Marrón", isPet: true, height: 50 },
    { name: "Gato", age: 2, color: "Negro", isPet: true, height: 30 },
    { name: "León", age: 5, color: "Amarillo", isPet: false, height: 120 },
    { name: "Elefante", age: 10, color: "Gris", isPet: false, height: 300 },
    { name: "Conejo", age: 1, color: "Blanco", isPet: true, height: 25 },
  ]);

  const fetchAnimals = async () => {
    try {
      const res = await fetch("https://electiva5-api.apolobyte.top/animals");
      const data = await res.json();

      console.log("Datos del API:", data);

      // actualizar estado con datos del API
      setAnimals(data);
    } catch (error) {
      console.error("Error al traer datos", error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div>
      <Bienvenida />

      <h2>Lista de animales</h2>

      {animals.map((animal, index) => (
        <div key={index}>
          <p>Nombre: {animal.name}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          <p>Altura: {animal.height}</p>

          {animal.isPet ? (
            <p>Es mascota</p>
          ) : (
            <p> No es mascota</p>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
};
export default App;