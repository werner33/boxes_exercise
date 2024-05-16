import {useState, useEffect} from 'react';

// COMPONENTS 
import PokemonCard from '../components/pokemonCard/PokemonCard';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);


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
      <div className="row">
        <button 
          className="pokemon-list__load-more"
          onClick={loadMorePokemon}
        > 
          Load more Pokemon
        </button>
        <div className="pokemon-list__page-num">{(offset+10)/10}</div>
      </div>
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

export default PokemonList;