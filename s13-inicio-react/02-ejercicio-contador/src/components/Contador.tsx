import React from 'react'

export const Contador = () => {
    const [numero, setnumero] = React.useState(0)
    const sumar = () => {
        setnumero(numero + 1)
    }
    const restar = () => {
        setnumero(numero - 1)
    }
    const resetear = () => {
        setnumero(0)
    }


    return (
        <>
            <h2>Contador: {numero}  </h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={resetear}>Resetear</button>

        </>
    )
}
export default Contador

