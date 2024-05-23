import {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

// COMPONENTS 
import PokemonCard from '../components/pokemonCard/PokemonCard';

const PokemonList = () => {

  // get page number from useSearchParams
      //   getter   -   setter
  let [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || 1;

  const [pokemon, setPokemon] = useState([]);
  // set initial page based on page number in query
  const [offset, setOffset] = useState((pageNumber-1) * 10);  

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
  }, [offset]) // this runs when setOffset is called


  const loadMorePokemon = () => {
    setOffset(offset + 10);
    setSearchParams({"page" : Number(pageNumber) + 1});
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
        <div className="pokemon-list__page-num">{pageNumber}</div>
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