import React from 'react'

const PokemonList = ( { data } ) => {

    const pokemonElements = data.map((pokemon, index) => (
        <div key={index}>
            <p>Name: {pokemon.name}</p>
        </div>
    ));

  return (
    <div>
        <h2>Pokemon List</h2>
        {pokemonElements}
    </div>
  )
}

export default PokemonList