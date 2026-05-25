import { useState } from "react";

// Interfaz para las opciones del hook
interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
}

// Interfaz para lo que retorna el hook
interface UseCounterReturn {
  count: number;
  increaseBy: (value: number) => void;
  reset: () => void;
}

// Custom Hook: encapsula la lógica del contador con límites opcionales
export const useCounter = ({
  initialValue = 0,
  min = -Infinity,
  max = Infinity,
}: UseCounterOptions = {}): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);

  const increaseBy = (value: number) => {
    setCount((prev) => Math.min(Math.max(prev + value, min), max));
  };

  const reset = () => setCount(initialValue);

  return {
    count,
    increaseBy,
    reset,
  };
};