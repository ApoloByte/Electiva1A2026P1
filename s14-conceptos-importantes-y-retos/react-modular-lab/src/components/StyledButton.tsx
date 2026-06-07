import { useState } from "react";

interface Props {
  label: string;
  color: string;
  handleClick: () => void;
}

export const StyledButton = ({
  label,
  color,
  handleClick,
}: Props) => {

  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="p-4">

      <button
        disabled={isDisabled}
        className={
          color +
          " px-4 py-2 rounded-md text-white hover:opacity-80 disabled:opacity-50"
        }
        onClick={handleClick}
      >
        {label}
      </button>

      <div className="mt-2">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            checked={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)}
          />

          Deshabilitar botón

        </label>

      </div>

    </div>
  );
};
