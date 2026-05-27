import { useState } from "react";

interface Tarea {
  id: number;
  texto: string;
  completed: boolean;
}

const ListaTareas = () => {

  const [tareas, setTareas] = useState<Tarea[]>([]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const addTask = () => {

    if (nuevaTarea === "") return;

    const tarea: Tarea = {
      id: Date.now(),
      texto: nuevaTarea,
      completed: false
    };

    setTareas([...tareas, tarea]);

    setNuevaTarea("");
  };

  const removeTask = (id: number) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const resetList = () => {
    setTareas([]);
  };

  const toggleTask = (id: number) => {

    setTareas(
      tareas.map(tarea =>
        tarea.id === id
          ? { ...tarea, completed: !tarea.completed }
          : tarea
      )
    );
  };

  return (
    <div>

      <h1>Lista de tareas</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button onClick={addTask}>
        Agregar
      </button>

      <button onClick={resetList}>
        Resetear
      </button>

      <ul>

        {tareas.map((tarea) => (

          <li key={tarea.id}>

            <span
              onClick={() => toggleTask(tarea.id)}
              style={{
                textDecoration: tarea.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer"
              }}
            >
              {tarea.texto}
            </span>

            <button onClick={() => removeTask(tarea.id)}>
              Eliminar
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default ListaTareas;
