import { useState } from 'react'

// 1. La interfaz define la "forma" de cada tarea
interface Tarea {
  id: number
  texto: string
  completed: boolean
}

const ListaTareas = () => {
  // 2. useState tipado con la interfaz
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [input, setInput] = useState('')

  // 3. Funciones
  const addTask = () => {
    if (input.trim() === '') return
    const nueva: Tarea = {
      id: Date.now(),       // ID único usando timestamp
      texto: input,
      completed: false
    }
    setTareas([...tareas, nueva])  // spread para no mutar el array
    setInput('')
  }

  const removeTask = (id: number) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  const resetList = () => setTareas([])

  // 4. Alternar estado completed al hacer clic
  const toggleTask = (id: number) => {
    setTareas(tareas.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ))
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>

      {/* Input para agregar */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={addTask}>Agregar</button>
      <button onClick={resetList}>Limpiar todo</button>

      {/* 5. Renderizar la lista */}
      <ul>
        {tareas.map(tarea => (
          <li
            key={tarea.id}
            onClick={() => toggleTask(tarea.id)}
            style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}
          >
            {tarea.texto}
            <button onClick={(e) => { e.stopPropagation(); removeTask(tarea.id) }}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaTareas