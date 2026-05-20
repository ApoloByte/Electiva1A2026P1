import { useState } from 'react'
import './App.css'
import { Bienvenida } from './components/Bienvenida'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Bienvenida/>
  </>
      
  )
}

export default App
