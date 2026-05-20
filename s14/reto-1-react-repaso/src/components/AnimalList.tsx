import { useEffect, useState } from 'react'
import type { Animal } from '../types/animal'

// lista inicial de animales para el reto
const initialAnimals: Animal[] = [
  { name: 'Apolo', age: 1, color: 'brown', isPet: true, height: '28 cm' },
  { name: 'Patricio', age: 3, color: 'black', isPet: true, height: '40 cm' },
  { name: 'Lorenzo', age: 2, color: 'red', isPet: false, height: '37 cm' },
  { name: 'Dexter', age: 2, color: 'green', isPet: false, height: '35 cm' },
  { name: 'Milo', age: 4, color: 'white', isPet: true, height: '32 cm' },
]

export const AnimalList = () => {
  // estado con la lista inicial y datos remotos
  const [animals] = useState<Animal[]>(initialAnimals)
  const [serverAnimals, setServerAnimals] = useState<Animal[]>([])
  const [showOnlyPets, setShowOnlyPets] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const response = await fetch('https://electiva5-api.apolobyte.top/animals')
        if (!response.ok) {
          throw new Error('Error al cargar animales remotos')
        }
        const data = (await response.json()) as Animal[]
        setServerAnimals(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadAnimals()
  }, [])

  const displayedAnimals = showOnlyPets ? animals.filter((animal) => animal.isPet) : animals

  return (
    <section className="rounded-3xl bg-[#5f442f]/90 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-amber-100">Animales</h2>
          <p className="mt-2 text-amber-200/90 text-sm">
            Lista con useState y map. Alterna para ver solo mascotas.
          </p>
        </div>
        <button
          type="button"
          className="rounded-full bg-[#bf8b4c] px-4 py-2 text-sm font-semibold text-slate-950"
          onClick={() => setShowOnlyPets((current) => !current)}
        >
          {showOnlyPets ? 'Ver todos' : 'Ver mascotas'}
        </button>
      </div>

      <div className="mt-5 space-y-4">
        {displayedAnimals.map((animal) => (
          <div key={`${animal.name}-${animal.age}`} className="rounded-3xl bg-[#3a2316] p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-amber-100">{animal.name}</h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  animal.isPet ? 'bg-amber-500/25 text-amber-100' : 'bg-slate-700 text-slate-200'
                }`}
              >
                {animal.isPet ? 'Mascota' : 'No mascota'}
              </span>
            </div>
            <p className="mt-2 text-amber-200 text-sm">Edad: {animal.age} años</p>
            <p className="text-amber-200 text-sm">Color: {animal.color}</p>
            <p className="text-amber-200 text-sm">Altura: {animal.height}</p>
            <p className="mt-2 text-sm text-amber-100">
              {animal.isPet ? 'Este animal es una mascota adorable.' : 'Este animal no es una mascota.'}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-3xl bg-[#412e22] p-4 text-sm text-amber-200/90">
        <p>Datos remotos desde el endpoint:</p>
        <p className="mt-2 font-medium text-amber-100">
          {loading ? 'Cargando datos...' : `Animales remotos: ${serverAnimals.length}`}
        </p>
      </div>
    </section>
  )
}
