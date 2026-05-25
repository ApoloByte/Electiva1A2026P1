import React from "react";
import { useCounter } from "../Hooks/UseCounter";
import { StyledButton } from "./StyledButton";

// Props del componente Counter — Reto 4: uso de Props tipadas
interface CounterProps {
  title?: string;
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export const Counter = ({
  title = "Counter",
  initialValue = 0,
  step = 1,
  min,
  max,
}: CounterProps) => {
  // Custom Hook — encapsula toda la lógica del contador
  const { count, increaseBy, reset } = useCounter({ initialValue, min, max });

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl shadow-md bg-white w-64">
      <h3 className="text-xl font-semibold text-gray-700 tracking-wide">
        {title}
      </h3>

      {/* Valor actual del contador */}
      <span className="text-5xl font-bold text-blue-600 tabular-nums">
        {count}
      </span>

      {/* Botones de acción — usan StyledButton con Props */}
      <div className="flex gap-3">
        <StyledButton
          label={`+${step}`}
          onClick={() => increaseBy(step)}
          variant="success"
          size="md"
          allowDisable
        />
        <StyledButton
          label={`-${step}`}
          onClick={() => increaseBy(-step)}
          variant="danger"
          size="md"
          allowDisable
        />
      </div>

      {/* Botón de reset */}
      <StyledButton
        label="Reset"
        onClick={reset}
        variant="ghost"
        size="sm"
      />
    </div>
  );
};