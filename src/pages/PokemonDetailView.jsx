
// Tools
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PokemonDetailView.scss'

function PokemonDetailView() {

    const { pokemonName }  = useParams();
    const [ currentPokemon, setCurrentPokemon] = useState(null);
    const [ currentPokemonInfo, setCurrentPokemonInfo] = useState(null);

    // fetch data from the api for the specific pokemon in the url
    useEffect(() => {
        // do something here
        const urlForPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
        fetch(urlForPokemon)
          .then(response => response.json())
          .then(data1 => {
            setCurrentPokemon(data1);

            if(data1) {
                const urlForPokemon = `https://pokeapi.co/api/v2/pokemon-species/${data1.id}`;
        
                fetch(urlForPokemon)
                  .then(response => response.json())
                  .then(data2 => {
                    setCurrentPokemonInfo(data2)
                  })
          }}).catch(err => {
            console.error(err.message);
          })
          
      }, [])


      const convertDecimeterToFeet = (decimeter) => {
        const feetAndInches = (decimeter/ 3.048).toFixed(1);
        const feet = feetAndInches.charAt(0)
        const inches = feetAndInches.slice(2);

            return `${feet}'0${inches}"`;
      }

      const convertHectogramsToPounds = (hectograms) => {
        const pounds = (hectograms / 4.536).toFixed(1);

        return `${pounds} lbs.`
      }

      const types = ['NORMAL', 'FIRE', 'WATER', 'ELECTRIC', 'GRASS', 'ICE', 'FIGHTING', 'POISON', 'GROUND',
       'FLYING', 'PSYCHIC', 'BUG', 'ROCK', 'GHOST', 'DRAGON', 'DARK', 'STEEL', 'FAIRY'];

  return (
    <>
        {currentPokemon && currentPokemonInfo &&
            <div className='pokemon-detail-card' >
                <img className='pokemon-detail-card__img' src={currentPokemon.sprites.front_default} alt={currentPokemon} />
                <header className='pokemon-detail-card__header'>
                    <p className='pokemon-detail-card__id'>{currentPokemon.id}</p>
                    <p className='pokemon-detail-card__name'>{currentPokemon.name.toUpperCase()}</p>
                </header>
                <p className='pokemon-detail-card__type'>{currentPokemon.types.map((obj,index) => {
                    return <span className={`pokemon-detail-card__type-box ${types.find(type => type.toUpperCase() == obj.type.name.toUpperCase())}`} key={index}>{obj.type.name.toUpperCase()} </span>}
                    )}
                </p>
                <section className='pokemon-detail-card__size'>
                    <div className="pokemon-detail-card__height">
                        <p className='pokemon-detail-card__abv'>HT</p>
                        <p className='pokemon-detail-card-value'>{convertDecimeterToFeet(currentPokemon.height)}</p>
                    </div>
                    <div className="pokemon-detail-card__weight">
                        <p className='pokemon-detail-card__abv'>WT</p>
                        <p className='pokemon-detail-card-value'>{convertHectogramsToPounds(currentPokemon.weight)}</p>
                    </div>
                </section>
                <section className='pokemon-detail-card__info'>
                    <p className='pokemon-detail-card__entry'>{currentPokemonInfo.flavor_text_entries[0].flavor_text} </p>
                </section>
            </div>
        } 
    </>
  )
}

export default PokemonDetailView;