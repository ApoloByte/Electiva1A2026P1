import React from 'react'
import { useState } from 'react';

export const Contador = () => {
    //Definición del useState
    const [valor, setValor] = useState(0);

    //Funciones para manipular el contador
    const manejarSumar = () => {
        setValor(valor + 1);
    };

    const manejarRestar = () => {
        setValor(valor - 1);
    };

    const manejarReset = () => {
        setValor(0);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Contador: {valor}</h1>
      
      <button onClick={manejarSumar}>+1</button>
      <button onClick={manejarReset}>Reset</button>
      <button onClick={manejarRestar}>-1</button>
    </div>
  )
}
