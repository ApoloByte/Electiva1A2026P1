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
                contador: {numero}
            </h2>
            <button onClick={suma}>suma</button>
            <button onClick={resta}>resta</button>
            <button onClick={reinicio}>reinicio</button >



        </div >

    )
}
