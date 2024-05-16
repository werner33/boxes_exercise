
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const PokemonDetailView = () => {

  const {pokemonName} = useParams();

  const [pokemonData, setPokemonData] = useState({}); // empty obj


  // fetch data from the api for the specific pokemon in the url

  useEffect(() => {

    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    fetch(pokemonURL)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(err => console.error(err.message));
  },[]); // when component mounts, run the function inside

  // once data is processed to JSON, update state

  return (
    <div>
      Pokemon detail view for {pokemonName}
      {/* render out some information from state */}
      <div> Weight: {pokemonData.weight} </div>

      <div>Stats</div>
      {pokemonData?.stats?.map((statObj, index) => {
        return (
          <div key={index}>{statObj?.stat?.name} : {statObj?.base_stat} </div>
        )
      })}
    </div>
  )
}

export default PokemonDetailView;