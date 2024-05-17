
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const PokemonDetailView = () => {

  const {pokemonName} = useParams();

  const [pokemonData, setPokemonData] = useState({}); // empty obj

  // any time we fetch data, there must be an indicator that the data is coming
  // this is usually a loader (icon) or some text
  // or a progress bar

  const [loader, setLoader] = useState(true);


  // fetch data from the api for the specific pokemon in the url

  useEffect(() => {

    setLoader(true);
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    fetch(pokemonURL)
      .then(response => response.json())
      .then(data =>{
        setPokemonData(data);
        setLoader(false);
      })
      .catch(err => console.error(err.message));
  },[]); // when component mounts, run the function inside

  // once data is processed to JSON, update state

  return (
    <div>
      {loader && <h1>Loading....</h1>}
      {!loader && 
        <div className="pokemon-detail-view__info">
          <div className="pokemon-detail-view__name">{pokemonData.name}</div>
            <div className="two-columns">
            <div className="pokemon-detail-view__image">
              <div>No. 150</div>
              <img src={pokemonData.sprites.front_default} />
              <div>Psychic</div>
            </div>
            <div className="pokemon-detail-view__stats">
              <div className="two-columns">
                <div>Height: 20 Decimeters</div>
                <div>Weight: 1220 Hectograms</div>
              </div>
              <div>Stats</div>
              {pokemonData?.stats?.map((statObj, index) => {
                return (
                  <div  className="pokemon-stats" key={index}>{statObj?.stat?.name} : <div className="stat-bar"></div> </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default PokemonDetailView;