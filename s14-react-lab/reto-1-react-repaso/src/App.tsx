import { useEffect, useState } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import type { Animal } from './types/Animal'

const initialAnimals: Animal[] = [
  { name: 'Firulais', age: 4, color: 'golden', isPet: true, height: 55 },
  { name: 'Michi', age: 2, color: 'gray', isPet: true, height: 25 },
  { name: 'Babe', age: 1, color: 'pink', isPet: false, height: 40 },
  { name: 'Nemo', age: 1, color: 'orange', isPet: true, height: 5 },
  { name: 'Spirit', age: 6, color: 'white', isPet: false, height: 150 },
]

const API_URL = 'https://electiva5-api.apolobyte.top/animals'

function App() {
  const [animals, setAnimals] = useState<Animal[]>(initialAnimals)

  const fetchAnimals = async () => {
    const response = await fetch(API_URL)
    const data: Omit<Animal, 'height'>[] = await response.json()
    const animalsFromApi: Animal[] = data.map((animal) => ({
      ...animal,
      height: animal.isPet ? 30 : 100,
    }))
    setAnimals(animalsFromApi)
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  return (
    <div>
      <WelcomeMessage />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animals.map((animal) => (
          <li key={animal.name} className="animal-card">
            <p>
              <strong>Nombre:</strong> {animal.name}
            </p>
            <p>
              <strong>Edad:</strong> {animal.age} años
            </p>
            <p>
              <strong>Color:</strong> {animal.color}
            </p>
            <p>
              <strong>Altura:</strong> {animal.height} cm
            </p>
            {animal.isPet ? (
              <span className="pet-badge">Es mascota</span>
            ) : (
              <span>No es mascota</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
