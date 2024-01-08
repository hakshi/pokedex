import React from 'react'
import { useState } from "react"
import axios from 'axios';

// Component to take in user input to dynamically render Pokedex
const PokedexControlPanel = (props) => {

    // Props variables
    const defaultGeneration = props.generation;
    const onGenerationChange = props.onGenerationChange;

    // State variable and setter to update internal component state
    const [generation, setGeneration] = useState(defaultGeneration);

    // Base url for generation calls
    const urlBase = 'https://pokeapi.co/api/v2/generation/';

    // Function to GET generation's pokemon
    const getGenerationPokemon = (generation) => {
      axios.get(urlBase + generation)
        .then(response => {
          console.log('Data:', response.data.pokemon_species);
        }).catch(error => {
          console.log('Error fetching data', error);
        }).finally(() => {
          console.log('Completed');
        });
    };
    
    // Method to update internal component state and raised state variable
    const handleGenerationChange = (generation) => {
        setGeneration(generation);
        onGenerationChange(generation);
        getGenerationPokemon(generation);
    };

    

  return (
    <div>
        <h3>PokedexControlPanel</h3>
        <label htmlFor='generation'>Select Generation</label>
        <input type='number' id='generation' onChange={(e) => handleGenerationChange(parseInt(e.target.value))} min={1} max={9}></input>

    </div>
  )
}

export default PokedexControlPanel