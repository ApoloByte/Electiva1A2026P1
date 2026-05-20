import { useState } from 'react'

const Contador = () => {
  // useState va AQUÍ ADENTRO del componente, antes del return
  const [contador, setContador] = useState(0)

  // Funciones
  const sumar = () => setContador(contador + 1)
  const restar = () => setContador(contador - 1)
  const resetear = () => setContador(0)

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={sumar}>➕ Sumar</button>
      <button onClick={restar}>➖ Restar</button>
      <button onClick={resetear}>🔄 Resetear</button>
    </div>
  )
}

export default Contador