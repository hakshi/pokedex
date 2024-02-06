import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {

    const [pokemonSprite, setPokemonSprite] = useState('');
    const [pokemonBaseExp, setPokemonBaseExp] = useState(0);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await axios.get(baseUrl + pokemon.name);
            setPokemonSprite(response.data.sprites.front_default)
            setPokemonBaseExp(response.data.base_experience);
            setPokemonTypes(response.data.types.map(type => type.type.name));
        };

        fetchPokemonData();
    }, [pokemon.name]);

  return (
    <div className="pokemon-card" id='pokemon-card'>
      <h2>{pokemon.name}</h2>
      <img src={pokemonSprite} alt={pokemon.name}></img>
      <h3>Base Experience: {pokemonBaseExp}</h3>
      {pokemonTypes.map((type, index) => (
        <h3 key={index}>{type}</h3>
      ))}
    </div>
  );
}

export default PokemonCard;
