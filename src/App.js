import axios from 'axios';
import './App.css';
import Pokedex from './Components/Pokedex';
import PokedexControlPanel from './Components/PokedexControlPanel';
import { useState, useEffect} from 'react';

function App() {
  // State variables
  const [generation, setGeneration] = useState(1);
  const [data, setData] = useState([]);

  const handleGenerationChange = (generation) => {
    setGeneration(generation);
  };

  const handleDataUpdate = (data) => {
    setData(data);
  }
  
  useEffect((data) => {
    // Fetch data from the PokeAPI when the generation changes
    axios.get('https://pokeapi.co/api/v2/generation/' + generation)
          .then(response => {
            setData(response.data);
            // TEST LOG
            console.log('Data:', data);
          }).catch(error => {
            console.log('Error fetching data', error);
          }).finally(() => {
            console.log('Completed');
          });
  }, [generation]);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <PokedexControlPanel 
        generation = {generation}
        onGenerationChange = {handleGenerationChange}
        data = {data}
        onDataChange = {handleDataUpdate}
      />
      <Pokedex 
        generation = {generation}
        data = {data} 
        onDataChange = {handleDataUpdate}
      />
    </div>
  );
}

export default App;
