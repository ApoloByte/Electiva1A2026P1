import './App.css'
import { Counter } from './components/Counter.tsx'
import { useCounter } from './hooks/useCounter.ts'

function App() {

  return (
    <div className="flex flex-col items-center h-svh w-svw mt-6 gap-2 justify-center">
      <Counter />
    </div>
  )
}

export default App
