import { Link } from "react-router-dom";

function PokemonCard ({singlePokemon, hasBlackBackground, color="red"}) {

  // const capitalizedName = singlePokemon.name.charAt(0).toUpperCase() + singlePokemon.name.slice(1);

  return (
    <Link to={`/pokemon/${singlePokemon.name}`}>
      <div className={hasBlackBackground ? "single-pokemon black-background" : "single-pokemon"}>
          <h3 className="single-pokemon__name">{singlePokemon.name}</h3>
      </div>
    </Link>
  )
}

export default PokemonCard;