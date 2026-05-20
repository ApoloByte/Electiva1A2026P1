import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { AnimalsList } from './components/AnimalsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Welcome />
      <AnimalsList />
    </div>
  );
};

export default App;
