import React from 'react'
import PokemonList from './PokemonList';

export const Pokedex = (props) => {
  const data = props.data;

  const logData = () => {
    console.log(data);
  }

  return (
    <div>
      <h3>Pokedex</h3>
      <button onClick={logData}>Pokedex component data</button>
      <PokemonList data={data} />
    </div>
  )
}

export default Pokedex