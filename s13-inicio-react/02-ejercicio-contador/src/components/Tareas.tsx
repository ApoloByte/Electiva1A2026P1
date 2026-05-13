import { useState } from 'react';

// 1. Crea una interfaz llamada Tarea
interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

export const ListaTareas = () => {
  // 2. Crea un useState del tipo Tarea[]
  const [tareas, setTareas] = useState<Tarea[]>([]);
  
  // Estado adicional necesario para capturar lo que el usuario escribe en el Input
  const [textoInput, setTextoInput] = useState<string>('');

  // 3. Crear las funciones addTask, removeTask y resetList
  const addTask = () => {
    // Evitar agregar tareas vacías
    if (textoInput.trim() === '') return; 

    const nuevaTarea: Tarea = {
      id: new Date().getTime(), // Usamos la fecha actual como un ID único y rápido
      texto: textoInput,
      completada: false,
    };

    // Actualizamos la lista conservando las tareas anteriores y añadiendo la nueva
    setTareas([...tareas, nuevaTarea]);
    
    // Limpiamos el input después de agregar la tarea
    setTextoInput(''); 
  };

  const removeTask = (id: number) => {
    // Filtramos la lista para dejar solo las tareas que NO coincidan con el id a eliminar
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const resetList = () => {
    // Para resetear, simplemente devolvemos el estado a un arreglo vacío
    setTareas([]);
  };

  // Función para manejar el paso 6 (alternar el estado de completado)
  const toggleTask = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Gestor de Tareas</h2>

      {/* 4. Input y botón para incluir elementos */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          style={{ flexGrow: 1 }}
        />
        <button onClick={addTask}>Añadir</button>
        <button onClick={resetList}>Resetear</button>
      </div>

      {/* 5. Renderiza la lista en un <ul> */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tareas.map((tarea) => (
          <li 
            key={tarea.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '8px',
              borderBottom: '1px solid #ccc' 
            }}
          >
            {/* 6. Al dar clic en una tarea, alterna su estado */}
            <span
              onClick={() => toggleTask(tarea.id)}
              style={{
                cursor: 'pointer',
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? 'gray' : 'black',
                flexGrow: 1
              }}
            >
              {tarea.texto}
            </span>
            
            {/* Botón para utilizar la función removeTask */}
            <button onClick={() => removeTask(tarea.id)} style={{ marginLeft: '10px' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};