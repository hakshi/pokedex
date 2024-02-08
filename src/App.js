import axios from 'axios';
import './App.css';
import Pokedex from './Components/Pokedex';
import { useState, useEffect, useCallback } from 'react'; // Import useCallback

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 20;

  
  const fetchPokemonData = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`;

    try {
      const response = await axios.get(url);
      setPokemonData(prevData => [...prevData, ...response.data.results]);
      setOffset(prevOffset => prevOffset + itemsPerPage);
      setHasMore(response.data.results.length > 0);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [hasMore, isLoading, offset, itemsPerPage]); // Dependenciesi

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
      fetchPokemonData();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, fetchPokemonData]); // Added fetchPokemonData as a dependency

  useEffect(() => {
    fetchPokemonData();
  }, [fetchPokemonData]); // Added fetchPokemonData as a dependency

  return (
    <div className="App">
      <Pokedex pokemonData={pokemonData} />
      {isLoading && <div>Loading more Pokemon...</div>}
    </div>
  );
}

export default App;
