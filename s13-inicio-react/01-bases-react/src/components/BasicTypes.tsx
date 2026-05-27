import React from 'react'

export const BasicTypes = () => {
    const name: string = "Víctor";
    const age: number = 28;
    const isActive: boolean = true;
  return (
     <>
      <h3>Basic Types</h3>
      <ul>
        <li>Nombre: {name}</li>
        <li>Edad: {age}</li>
      </ul>
    </>
  )
}
