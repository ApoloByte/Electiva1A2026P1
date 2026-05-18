import React, { useState } from 'react';

const Contador: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementar = () => setCount((c) => c + 1);
  const decrementar = () => setCount((c) => c - 1);
  const reset = () => setCount(0);

  return (
    <div className="contador">
      <h2>Contador</h2>
      <p className="valor">Valor: {count}</p>
      <div className="botones">
        <button type="button" onClick={incrementar} className="btn">
          +1
        </button>
        <button type="button" onClick={decrementar} className="btn">
          -1
        </button>
        <button type="button" onClick={reset} className="btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Contador;