import React from 'react'

export const Pokedex = (props) => {
  const generation = props.generation;

  return (
    <div>
      <h3>Pokedex</h3>
      <h3>{generation}</h3>
    </div>
  )
}

export default Pokedex