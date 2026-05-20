// src/App.tsx
import { WelcomeMessage } from './components/WelcomeMessage';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {}
      <WelcomeMessage name="Juan" />
    </div>
  );
}

export default App;