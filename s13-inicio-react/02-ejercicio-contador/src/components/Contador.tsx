import React, { useState } from 'react'

export const Contador = () => {
    const [numero, setnumero] = useState(0)

    const suma = () => {
        setnumero(numero + 1)
    }

    const resta = () => {
        setnumero(numero - 1)
    }

    const reinicio = () => {
        setnumero(0)
    }

    return (

        <div>Contador
            <h2>
                Contador: {numero}
            </h2>

            <button onClick={suma}>suma 1</button>
            <button onClick={resta}>resta 1</button>
            <button onClick={reinicio}>reinicio</button>

        </div>


    )
}

export default Contador;


