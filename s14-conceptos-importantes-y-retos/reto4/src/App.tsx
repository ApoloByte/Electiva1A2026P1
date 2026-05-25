import "./App.css";
import { Counter } from "./componentes/Counter";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-8 bg-gray-50">
      {/* Props pasadas desde el padre — Reto 4 */}
      <Counter
        title="Mi Contador"
        initialValue={10}
        step={1}
        min={0}
        max={20}
      />
    </div>
  );
}

export default App;