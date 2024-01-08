import './App.css';
import Pokedex from './Components/Pokedex';
import PokedexControlPanel from './Components/PokedexControlPanel';
import { useState } from 'react';

function App() {
  const [generation, setGeneration] = useState(1);

  const handleGenerationChange = (generation) => {
    setGeneration(generation);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <PokedexControlPanel 
        generation = {generation}
        onGenerationChange = {handleGenerationChange}
      />
      <Pokedex generation = {generation} />
    </div>
  );
}

export default App;
