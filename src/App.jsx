import {useState} from 'react';

import './App.css'

// function PromoCard ({title="This is the default title.", blueTitle, showButton}) {
//   return (
//     <div className="promo-card" >
//       <h3 style={{'color' : blueTitle ? 'blue' : 'black' }}>{title}</h3>
//       <p>This is a cool topic.</p>
//       {showButton && <button>Buy Me!</button> }
//     </div>
//   )
// }

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

  // reach out to some API
  // get some data
  // make sure the data is what we want
  // render that data to a component
  // customize the component based on some part of the data

  // HTTP: GET(read), POST (create), PUT (update), DELETE

  // reach out across the web, to get some pokemon data
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((response) =>{
      // convert the response to JSON
      return response.json()
    })
    .then(data =>{
      console.log("our response as JSON", data);
      // update the hook (state) with our pokemon data
      setPokemon(data.results);
    })
    .catch( error => {
      console.error(error);
    })


    // iterate through each one and render
  return (
    <div className="promo-card-container">
      {pokemon.map((singlePokemon, index) => { // index  = 0, 1, 2, 3, 4, 5
        return(
          <PokemonCard 
            key={index+1} 
            singlePokemon={singlePokemon}
            hasBlackBackground={index % 2 === 1 ? true : false}
          /> 
        )
      })}
    </div>
  )
}

export default App;
