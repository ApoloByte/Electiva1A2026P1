import React from 'react';
import './App.css';
import { ImageManager } from './components/ImageManager';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="p-6">
        <h1 className="text-2xl font-bold">Galería de imágenes</h1>
      </header>
      <Counter />
      <ImageManager />
    </div>
  );
};

export default App;
