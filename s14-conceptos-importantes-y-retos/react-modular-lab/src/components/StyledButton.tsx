import  { useState } from 'react'

// 1.
interface Props {
    label: string;
    color: string;
    handleClick: () => void;
}

// 2.
export const StyledButton = ({ label, color, handleClick }: Props) => {
		// 3.
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <div className="p-6 space-y-4">
            <button
                disabled={isDisabled}
                className={color + " px-4 py-2 rounded-md text-white transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"}
                onClick={handleClick}
            >
                {label}
            </button>
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={isDisabled}
                    onChange={() => setIsDisabled(!isDisabled)}
                />
                Deshabilitar botón
            </label>
        </div>
    );
}