import React from 'react'
import PokemonCard from '../components/pokemonCard/PokemonCard';

import { useState, useEffect } from 'react';

function PokemonList() {

    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    // reach out to some API
    // get some data
    // make sure the data is what we want
    // render that data to a component
    // customize the component based on some part of the data

    // HTTP: GET(read), POST (create), PUT (update), DELETE
    // reach out across the web, to get some pokemon data
    

    // when offset is updated, run this function

  useEffect(() => {
    // do something here
    const urlForPokemon = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;

    fetch(urlForPokemon)
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results)
      }).catch(err => {
        console.error(err.message);
      })
  }, [offset])


  const loadMorePokemon = () => {
    // asynchronous  
    setOffset(offset + 10);
  }


  return (
     <div className="pokemon-list">
      <header className='pokemon-list__header'>
        <button 
          className="pokemon-list__load-more"
          onClick={loadMorePokemon}
        > Load more Pokemon</button>
        <h1 className='pokemon-list__page-number' >{offset / 10 + 1}</h1>
      </header>
      <div className="promo-card-container">
        {pokemon.map((singlePokemon, index) => { // index  = 0, 1, 2, 3, 4, 5
          // if(index % 3 === 0) setBlackBackground = !setBlackBackground;
          return(
            <PokemonCard 
              key={index+1} 
              singlePokemon={singlePokemon}
              hasBlackBackground={ Math.floor(index/3) % 2 === 0 ? true : false}
            /> 
          )
        })}
      </div>
    </div>
  )
}

export default PokemonList