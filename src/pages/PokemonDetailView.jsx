import { useParams } from "react-router-dom";

const PokemonDetailView = () => {

  const {pokemonName} = useParams();


  // fetch data from the api for the specific pokemon in the url

  // once data is processed to JSON, update state

  return (
    <div>
      Pokemon detail view for {pokemonName}
      {/* render out some information from state */}
    </div>
  )
}

export default PokemonDetailView;