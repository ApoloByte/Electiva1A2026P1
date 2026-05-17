import { useState } from 'react';

// 1. Definimos la interfaz estricta para la Tarea
interface Tarea {
  id: number;
  description: string;
  completed: boolean;
}

export const TodoList = () => {
  // 2. Estados: uno para la lista de tareas y otro para capturar lo que se escribe en el input
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, description: 'Aprender TypeScript', completed: true },
    { id: 2, description: 'Dominar el useState', completed: false }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  // 3. Función para añadir una tarea a la lista
  const addTask = () => {
    if (nuevaTarea.trim() === '') return; // Evita añadir tareas vacías

    const taskNew: Tarea = {
      id: Date.now(), // Genera un ID único basado en el tiempo
      description: nuevaTarea,
      completed: false
    };

    setTareas([...tareas, taskNew]); // Agrega la nueva tarea manteniendo las anteriores
    setNuevaTarea(''); // Limpia el input
  };

  // 4. Función para alternar el estado de completado (True / False) al hacer clic
  const toggleTask = (id: number) => {
    setTareas(
      tareas.map(tarea => 
        tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    );
  };

  // 5. Función para eliminar una tarea específica
  const removeTask = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  // 6. Función para resetear o vaciar la lista completa
  const resetList = () => {
    setTareas([]);
  };

  return (
    <div style={{ padding: '20px', marginTop: '20px', borderTop: '1px solid #ccc' }}>
      <h3>Ejercicio 2: Lista de Tareas</h3>

      {/* Input controlado por el estado nuevaTarea */}
      <input 
        type="text" 
        placeholder="Escribe una nueva tarea..." 
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        style={{ padding: '5px', marginRight: '10px' }}
      />
      <button onClick={addTask}>Añadir Tarea</button>
      <button onClick={resetList} style={{ marginLeft: '10px', backgroundColor: '#d9534f', color: 'white' }}>
        Vaciar Lista
      </button>

      {/* Renderizado de la lista */}
      <ul style={{ marginTop: '15px' }}>
        {tareas.map((tarea) => (
          <li key={tarea.id} style={{ marginBottom: '8px' }}>
            {/* Texto de la tarea, si está completada se le añade una línea encima */}
            <span 
              onClick={() => toggleTask(tarea.id)}
              style={{ 
                cursor: 'pointer', 
                textDecoration: tarea.completed ? 'line-through' : 'none',
                marginRight: '15px'
              }}
            >
              {tarea.description} {tarea.completed ? '✅' : '❌'}
            </span>

            {/* Botón para eliminar esta tarea individual */}
            <button onClick={() => removeTask(tarea.id)} style={{ padding: '2px 5px', fontSize: '12px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p><small>💡 Tip: Haz clic sobre el texto de una tarea para tacharla como completada.</small></p>
    </div>
  );
};