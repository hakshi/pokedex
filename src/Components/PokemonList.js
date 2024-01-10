import React, { useState, useEffect } from 'react'
import axios from 'axios';

const PokemonList = ( { data } ) => {

  const pokemonSpecies = data.pokemon_species;
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch the IDs of each Pokemon
    const fetchPokemonData = async () => {
      if (pokemonSpecies) {
        const dataWithIDs = await Promise.all(
          pokemonSpecies.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            return {
              id: response.data.id,
              name: pokemon.name,
              sprites: pokemon.sprites
            };
          })
        );

        setPokemonData(dataWithIDs);
      }      
    };

    fetchPokemonData();
  }, [pokemonSpecies]);

  const pokemonElements = pokemonData.map((pokemon, index) => (
    <div key={index} style={styles.card}>
      <div style={styles.cardDetails}>
          <p style={styles.cardDetailItem}>Name: {pokemon.name}</p>
          <p style={styles.cardDetailaItem}>ID: {pokemon.id}</p>
      </div>
      <button onClick={console.log(pokemon.sprites)}>Test Log</button>
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

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: '1px solid'
  },
  cardDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  cardDetailItem: {
    flex: 1
  }
}