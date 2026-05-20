import { AnimalList } from './components/AnimalList'
import { Counter } from './components/Counter'
import { Welcome } from './components/Welcome'

// pagina principal del reto 1
function App() {
  return (
    <div className="min-h-screen bg-[#3d2b1f] px-4 py-8 text-amber-100">
      <div className="mx-auto max-w-4xl space-y-6 rounded-3xl bg-[#402b1f]/95 p-6 shadow-2xl shadow-black/20">
        <Welcome />
        <Counter />
        <AnimalList />
      </div>
    </div>
  )
}

export default App
