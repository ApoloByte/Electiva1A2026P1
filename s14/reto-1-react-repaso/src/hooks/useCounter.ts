import { useState } from 'react'

// hook para manejar el contador
export const useCounter = (initialValue = 10) => {
  const [count, setCount] = useState<number>(initialValue)

  const increaseBy = (value: number) => {
    setCount((current) => current + value)
  }

  return {
    count,
    increaseBy,
  }
}
