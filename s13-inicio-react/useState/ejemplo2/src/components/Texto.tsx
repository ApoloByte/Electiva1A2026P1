import { useState } from "react";

export const Texto = () => {
    const [mostrar, setMostrar] = useState(false)
    return (
        <>
            <button onClick={() => setMostrar(!mostrar)}>
                Mostrar Mensaje
            </button>

            {mostrar && <p>Hola chavales xd</p>}

        </>
    )
}