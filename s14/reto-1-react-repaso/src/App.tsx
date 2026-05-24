import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { AnimalsList } from './components/AnimalsList';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Welcome />
      <Counter />
      <AnimalsList />
    </div>
  );
};

export default App;
