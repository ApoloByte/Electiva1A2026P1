import React from 'react';
import './App.css';
import { ImageManager } from './components/ImageManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="p-6">
        <h1 className="text-2xl font-bold">Galería de imágenes</h1>
      </header>
      <ImageManager />
    </div>
  );
};

export default App;
