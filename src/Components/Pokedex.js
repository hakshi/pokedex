import React from 'react'
import PokemonCard from './PokemonCard';

export const Pokedex = ( { pokemonData } ) => {

  return (
    <div className='pokedex'>
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default Pokedex