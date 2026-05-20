import { useState } from 'react'

// boton reutilizable que puede deshabilitarse
interface Props {
  label: string
  color: string
  handleClick: () => void
}

export const StyledButton = ({ label, color, handleClick }: Props) => {
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled={isDisabled}
        onClick={handleClick}
        className={`${color} inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {label}
      </button>
      <label className="inline-flex items-center gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-blue-500 focus:ring-blue-500"
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        />
        Deshabilitar botón
      </label>
    </div>
  )
}
