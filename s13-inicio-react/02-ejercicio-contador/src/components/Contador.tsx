import { useState } from "react";

function Contador() {

  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={sumar}>Sumar</button>

      <button onClick={restar}>Restar</button>

      <button onClick={resetear}>Resetear</button>
    </div>
  );
}

export default Contador;