import { useState } from "react";

export const Contador = () => {
    const [numero, setNumero] = useState(0)
    return (
        <>
            <button onClick={() => setNumero(numero + 1)}>
                {numero}
            </button>

        </>
    )
}