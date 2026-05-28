import { useState } from 'react'

interface Animal {
  name: string
  age: number
  color: string
  isPet: boolean
  height: number
}

function Welcome() {
  return (
    <div>
      <h2>BIENVENIDO</h2>
    </div>
  )
}

function App() {
  const [animals, setAnimals] = useState<Animal[]>([
    { name: 'Max', age: 5, color: 'white', isPet: true, height: 30 },
    { name: 'Toby', age: 3, color: 'brown', isPet: true, height: 25 },
    { name: 'Luna', age: 2, color: 'black', isPet: false, height: 20 },
    { name: 'Rocky', age: 4, color: 'gray', isPet: true, height: 35 },
    { name: 'Nemo', age: 1, color: 'orange', isPet: false, height: 10 },
  ])

  const fetchAnimals = async () => {
    const response = await fetch('https://electiva5-api.apolobyte.top/animals')
    const data = await response.json()
    setAnimals(data)
  }

  return (
    <div>
      <h1>Solución de los retos planteados</h1>
      <Welcome />
      <h3>5 Recorrer la lista de animales</h3>
      <button onClick={fetchAnimals}>Cargar animales del API</button>
      {animals.map((animal, index) => (
        <div key={index}>
          <h4>Animal {index + 1}</h4>
          <p>Nombre: {animal.name}</p>
          <p>Edad: {animal.age}</p>
          <p>Color: {animal.color}</p>
          {animal.height && <p>Altura: {animal.height}</p>}
          {animal.isPet ? <p>Es mascota: Sí</p> : null}
        </div>
      ))}
    </div>
  )
}

export default App