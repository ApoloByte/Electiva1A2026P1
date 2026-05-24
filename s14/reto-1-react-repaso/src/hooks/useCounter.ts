import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(10);
  const increaseBy = (value: number) => {
    setCount((prev) => prev + value);
  };

  return {
    // properties
    count,
    // actions
    increaseBy,
  };
};
