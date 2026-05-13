import { useState } from 'react';

// 1. Crea una interfaz llamada Tarea
interface Tarea {
  nombre: string;
  completed: boolean;
}

export const ListaTareas = () => {
  // Estado para el texto del input
  const [textoTarea, setTextoTarea] = useState('');

  // 2. Crea un useState del tipo Tarea[] (arreglo de tareas)
  const [tareas, setTareas] = useState<Tarea[]>([]);

  // 3. Crear las funciones addTask, removeTask y resetList
  const addTask = () => {
    if (textoTarea.trim().length === 0) return;
    
    const nuevaTarea: Tarea = {
      nombre: textoTarea,
      completed: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTextoTarea(''); // Limpiar input
  }

  const removeTask = (index: number) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  }

  const resetList = () => {
    setTareas([]);
  }

  // 6. Alternar estado (completed)
  const toggleComplete = (index: number) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completed = !nuevasTareas[index].completed;
    setTareas(nuevasTareas);
  }

  return (
    <>
      <h2>Lista de Tareas</h2>
      
      <input 
        type="text"
        value={textoTarea}
        onChange={(e) => setTextoTarea(e.target.value)}
        placeholder="Nueva tarea..."
      />

      {/* 4. Botón para incluir elementos */}
      <button onClick={addTask}>Agregar</button>
      <button onClick={resetList}>Resetear Lista</button>

      {/* 5. Renderiza la lista en un <ul> */}
      <ul>
        {tareas.map((tarea, index) => (
          <li 
            key={index}
            style={{ 
              textDecoration: tarea.completed ? 'line-through' : 'none',
              cursor: 'pointer' 
            }}
          >
            <span onClick={() => toggleComplete(index)}>
              {tarea.nombre}
            </span>
            <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}