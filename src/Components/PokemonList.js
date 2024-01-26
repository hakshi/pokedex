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
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const pokemonDetails = response.data;
            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              sprite: pokemonDetails.sprites.front_default
            };
          })
        );

        setPokemonData(dataWithIDs);
      }      
    };

    fetchPokemonData();
  }, [pokemonSpecies]);

  const pokemonElements = pokemonData.map((pokemon, index) => (
    <div key={index} style={styles.cardList}>
      <div style={styles.card}>
          <p style={styles.cardDetail}>Name: {pokemon.name}</p>
          <p style={styles.cardDetailal}>ID: {pokemon.id}</p>
          <img src={pokemon.sprite} alt={pokemon.name}></img>
      </div>
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
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: '1px solid'
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  cardDetail: {
    flex: 1
  }
}