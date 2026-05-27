import React, { useState } from 'react'

export const Contador = () => {
    const [valor, setValor] = useState(0)
    const sumar = () => {
        setValor(valor + 1);
    };

    const restar = () => {
        setValor(valor - 1);
    };

    const resetear = () => {
        setValor(0);
    };
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Contador: {valor}</h2>
      
      {/* Botones con sus respectivos eventos click */}
      <button onClick={sumar}>+1</button>
      <button onClick={restar}>-1</button>
      <button onClick={resetear}>Resetear</button>
    </div>
    )
}
export default Contador;