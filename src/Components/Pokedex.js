import React from 'react'
import PokemonCard from './PokemonCard';

export const Pokedex = ( { pokemonData } ) => {

  const logData = () => {
    console.log(pokemonData);
  }

  return (
    <div>
      <button onClick={logData}>Pokedex component data</button>
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Pokedex