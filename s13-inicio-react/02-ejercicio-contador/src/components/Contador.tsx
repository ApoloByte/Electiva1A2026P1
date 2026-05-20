import { useState } from 'react';

export const Contador = () => {

  const [count, setCount] = useState<number>(0);

  const acumular = (numero: number) => {
    setCount(count + numero);
  };

  const resetear = () => {
    setCount(0);
  };

  return (
    <div> 
       <h3>Contador: <small>{count}</small></h3>

      <button onClick={() => acumular(-1)}>-1</button>
      <button onClick={resetear}>Reset</button>
      <button onClick={() => acumular(1)}>+1</button>
      </div>
     
    
  );
};