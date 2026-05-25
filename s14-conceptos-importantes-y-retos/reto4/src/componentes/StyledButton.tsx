import React, { useState } from "react";

// Props tipadas con TypeScript — Reto 4
interface StyledButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "danger" | "success" | "ghost";
  size?: "sm" | "md" | "lg";
  allowDisable?: boolean;
}

// Mapeo de variantes a clases de Tailwind
const variantClasses: Record<NonNullable<StyledButtonProps["variant"]>, string> = {
  primary: "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400",
  danger:  "bg-red-500  hover:bg-red-600  focus:ring-red-400",
  success: "bg-green-500 hover:bg-green-600 focus:ring-green-400",
  ghost:   "bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
};

// Mapeo de tamaños a clases de Tailwind
const sizeClasses: Record<NonNullable<StyledButtonProps["size"]>, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const StyledButton = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  allowDisable = false,
}: StyledButtonProps) => {
  // Estado local: controla si el botón está deshabilitado
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          rounded-md text-white font-medium
          transition-all duration-150
          focus:outline-none focus:ring-2
          disabled:opacity-40 disabled:cursor-not-allowed
        `}
      >
        {label}
      </button>

      {/* Solo muestra el checkbox si allowDisable es true */}
      {allowDisable && (
        <label className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={() => setIsDisabled((prev) => !prev)}
            className="cursor-pointer"
          />
          Deshabilitar
        </label>
      )}
    </div>
  );
};