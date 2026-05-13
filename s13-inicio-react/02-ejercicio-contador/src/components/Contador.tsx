import { useState } from 'react';

export const Contador = () => {
 
  const [valor, setValor] = useState(0);

  const acumular = ( numero: number ) => {
    setValor( valor + numero );
  }

  const resetear = () => {
    setValor(0);
  }

  return (
    <>
      <h3>Contador: <small>{ valor }</small></h3>

      <button onClick={ () => acumular(1) }>+1</button>
      <button onClick={ () => acumular(-1) }>-1</button>
      <button onClick={ resetear }>Reset</button>
    </>
  )
}