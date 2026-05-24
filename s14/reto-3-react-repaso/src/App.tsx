import React from 'react';
import './App.css';
import { ProductsManager } from './components/ProductsManager';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductsManager />
    </div>
  );
};

export default App;
