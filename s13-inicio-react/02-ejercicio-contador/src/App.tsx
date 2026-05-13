import './App.css'
import { Contador } from './components/Contador'
import { ListaTareas } from './components/Tareas';

function App() {
  
  return (
    <>
      <div className="App">
        <h2>Ejercicio de React</h2>
        <hr />
        <Contador />
        <ListaTareas />
      </div>
    </>
  );
}

export default App
