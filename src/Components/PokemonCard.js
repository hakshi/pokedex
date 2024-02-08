import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {

    const [pokemonSprite, setPokemonSprite] = useState('');
    const [pokemonId, setPokemonId] = useState(0);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchPokemonData = async () => {
            const response = await axios.get(baseUrl + pokemon.name);
            setPokemonSprite(response.data.sprites.front_default)
            setPokemonId(response.data.id);
            setPokemonTypes(response.data.types.map(type => type.type.name));
        };

        fetchPokemonData();
    }, [pokemon.name]);

  return (
    <div className='pokemon-card' id='pokemon-card'>
      <h2 className='pokemon-card-name'>{capitalizeFirstLetter(pokemon.name)}</h2>
      <img src={pokemonSprite} alt={pokemon.name}></img>
      <h3>{pokemonId}</h3>
      <div className='pokemon-card-types-container'>
        {pokemonTypes.map((type, index) => (
            <h3 className='pokemon-card-types' key={index}>{type}</h3>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
