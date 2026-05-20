import { useState } from 'react'

interface Tarea {
  id: number;
  texto: string;
  completed: boolean;
}

export const ListaTareas = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim() === "") return;
    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto: input,
      completed: false
    };
    setTareas([...tareas, nuevaTarea]);
    setInput("");
  };

  const removeTask = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const resetList = () => setTareas([]);

  const toggleTask = (id: number) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
    ));
  };

  return (
    <div>
      <h3>Lista de Tareas</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={addTask}>Agregar</button>
      <button onClick={resetList}>Resetear lista</button>
      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => toggleTask(tarea.id)}
            style={{ textDecoration: tarea.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {tarea.texto}
            <button onClick={(e) => { e.stopPropagation(); removeTask(tarea.id); }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}