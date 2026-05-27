import { useState } from 'react';

// Paso 1: Crea una interfaz llamada Tarea
interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

const ListaTareas = () => {
  // Paso 2: useState de tipo Tarea[] (array de tareas)
  const [tareas, setTareas] = useState<Tarea[]>([]);
  
  // Estado adicional para controlar lo que el usuario escribe en el input
  const [textoInput, setTextoInput] = useState('');

  // Paso 3: Funciones principales
  
  const addTask = () => {
    if (textoInput.trim() === '') return; // No agregar si está vacío

    const nuevaTarea: Tarea = {
      id: Date.now(), // Usamos la fecha actual como ID único
      nombre: textoInput,
      completada: false
    };

    // Usamos el spread operator (...) para mantener las tareas anteriores y añadir la nueva
    setTareas([...tareas, nuevaTarea]);
    setTextoInput(''); // Limpiar el input
  };

  const removeTask = (id: number) => {
    // Filtramos la lista: dejamos todas menos la que coincida con el ID
    const nuevasTareas = tareas.filter(t => t.id !== id);
    setTareas(nuevasTareas);
  };

  const toggleTask = (id: number) => {
    // Paso 6: Alternar estado completed
    const tareasModificadas = tareas.map(t => {
      if (t.id === id) {
        return { ...t, completada: !t.completada };
      }
      return t;
    });
    setTareas(tareasModificadas);
  };

  const resetList = () => {
    setTareas([]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Tareas</h2>

      {/* Input y Botón para agregar */}
      <input 
        type="text" 
        value={textoInput} 
        onChange={(e) => setTextoInput(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={addTask}>Agregar Tarea</button>
      <button onClick={resetList} style={{ marginLeft: '10px' }}>Resetear Lista</button>

      {/* Paso 5: Renderizar la lista en un <ul> */}
      <ul>
        {tareas.map((tarea) => (
          <li 
            key={tarea.id} 
            style={{ 
              textDecoration: tarea.completada ? 'line-through' : 'none',
              cursor: 'pointer',
              marginBottom: '5px'
            }}
          >
            <span onClick={() => toggleTask(tarea.id)}>
              {tarea.nombre}
            </span>
            <button 
              onClick={() => removeTask(tarea.id)} 
              style={{ marginLeft: '10px', fontSize: '10px' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;