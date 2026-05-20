import { StyledButton } from './StyledButton'
import { useCounter } from '../hooks/useCounter'

// componente contador con el hook
export const Counter = () => {
  const { count, increaseBy } = useCounter(10)

  return (
    <section className="rounded-3xl bg-[#5f442f]/90 p-6">
      <h2 className="text-2xl font-semibold text-amber-100">Contador</h2>
      <p className="mt-2 text-amber-200">Valor actual: {count}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <StyledButton label="+1" color="bg-[#bf8b4c]" handleClick={() => increaseBy(1)} />
        <StyledButton label="-1" color="bg-[#8b5e34]" handleClick={() => increaseBy(-1)} />
      </div>
    </section>
  )
}
