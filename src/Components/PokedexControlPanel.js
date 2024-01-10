import React from 'react'
import { useState } from "react"

// Component to take in user input to dynamically render Pokedex
const PokedexControlPanel = (props) => {

    // Props variables
    const defaultGeneration = props.generation;
    const onGenerationChange = props.onGenerationChange;
    const defaultData = props.data;

    // State variable and setter to update internal component state
    const [generation, setGeneration] = useState(defaultGeneration);
    // State variable and setter to update current data object
    let [data, setData] = useState(defaultData);
    
    // Method to update internal component state and raised state variable
    const handleGenerationChange = (generation) => {
        setGeneration(generation);
        onGenerationChange(generation);
        setData(data);
    };

    

  return (
    <div>
        <h3>PokedexControlPanel</h3>
        <label htmlFor='generation'>Select Generation</label>
        <input type='number' id='generation' onChange={(e) => handleGenerationChange(parseInt(e.target.value))} min={1} max={9} defaultValue={1}></input>
    </div>
  )
}

export default PokedexControlPanel