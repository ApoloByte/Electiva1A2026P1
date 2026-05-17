import { useState } from 'react';

export const Contador = () => {
  // Declaramos el useState para controlar el número del contador
  const [contador, setContador] = useState<number>(0);

  // Funciones para modificar el valor
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const resetear = () => setContador(0);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Ejercicio 1: Contador</h3>
      
      {/* Se renderiza el valor dinámico */}
      <h1>Valor: {contador}</h1>

      {/* Botones con sus eventos onClick */}
      <button onClick={sumar}>Sumar (+1)</button>
      <button onClick={restar} style={{ margin: '0 10px' }}>Restar (-1)</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
};