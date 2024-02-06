import axios from 'axios';
import './App.css';
import Pokedex from './Components/Pokedex';
import PokedexControlPanel from './Components/PokedexControlPanel';
import { useState, useEffect} from 'react';

function App() {

  const [pokemonData, setPokemonData] = useState([]);

  async function fetchAllPokemon() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    let allPokemon = [];
    let offset = 0;
    const limit = 25;
    const totalDesiredPokemon = 1025;

    while (allPokemon.length < totalDesiredPokemon) {
      const url = `${baseUrl}?limit=${limit}&offset=${offset}`;

      try {
        const response = await axios.get(url);
        allPokemon = allPokemon.concat(response.data.results);
        offset += limit;
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    } 

    console.log(`Fetched ${allPokemon.length} Pokemon.`)
    setPokemonData(allPokemon);
  }

  // useEffect call to get axios.get to run right on page load.
  // Empty dependency array makes it so it only calls once on load and not again
  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Pokedex pokemonData={pokemonData} />
    </div>
  );
}

export default App;
