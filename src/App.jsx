import {useState, useEffect} from 'react';

import './App.css'


// SCSS and BEM
// create a new app
// layouts (rows of boxes, grid, single box centered)
// review state (useState)
// toggle effect (with conditional classes or styling)
// select effect (one box is blue at a time)
// toggle effect across six boxes
// build simple component
// made component customizable with props
// fetching data 

import PokemonCard from './components/pokemonCard/PokemonCard';

function App() {

  // this is the state representing our pokemon
  // well update the state with setPokemon
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  // reach out to some API
  // get some data
  // make sure the data is what we want
  // render that data to a component
  // customize the component based on some part of the data

  // HTTP: GET(read), POST (create), PUT (update), DELETE
  // reach out across the web, to get some pokemon data
  

  // empty dependency array, runs once when component mounts
  // useEffect(function() {
  //   // loadMorePokemon();
  // }, []); // empty dependency array

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


  // let setBlackBackground = false;

  // iterate through each one and render
  return (
    <div className="pokemon-app">
      <button 
        className="pokemon-app__load-more"
        onClick={loadMorePokemon}
      > Load more Pokemon</button>
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

export default App;
