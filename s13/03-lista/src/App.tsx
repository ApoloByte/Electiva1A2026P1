import { useState } from 'react';
import './App.css';
import Lista from './components/lista';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div style={{ marginTop: 16 }}>
          <Lista />
        </div>
      </section>
    </>
  );
}

export default App;