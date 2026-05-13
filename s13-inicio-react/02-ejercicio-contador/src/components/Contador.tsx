import React, { useState } from 'react';

export const Contador = () => {
  const [contador, setContador] = useState<number>(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const resetear = () => setContador(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      
      {/* Botones que llaman a las funciones */}
      <button onClick={sumar}>+1</button>
      <button onClick={restar}>-1</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
};