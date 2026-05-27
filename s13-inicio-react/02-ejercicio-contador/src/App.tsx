import Contador from './components/Contador';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <h1>Mi primer ejercicio en React</h1>
      <p>A continuación se muestra el contador:</p>
      <hr />

      {/* 2. Uso del componente */}
      <Contador />
      <Tarea />
      
    </div>
  );
}

export default App;
