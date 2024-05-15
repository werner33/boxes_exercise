

function PokemonCard ({singlePokemon, hasBlackBackground, color="red"}) {

  // const capitalizedName = singlePokemon.name.charAt(0).toUpperCase() + singlePokemon.name.slice(1);

  return (
    <div className={hasBlackBackground ? "single-pokemon black-background" : "single-pokemon"}>
      <h3 className="single-pokemon__name">{singlePokemon.name}</h3>
    </div>
  )
}

export default PokemonCard;