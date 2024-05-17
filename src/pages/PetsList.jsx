import {useState, useEffect} from 'react';

//COMPONENTS
import PetCard from '../components/petCard/PetCard';

const PetsList = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {

    const petsURL = "https://vet-app-0obi.onrender.com/api/pets"

    fetch(petsURL)
    .then(response => response.json())
    .then(data => {
      setPets(data);
    }).catch(err => {
      console.error(err.message);
    })

  }, []) // calls function when component mounts


  return (
    <div className="pets-list">
      <h1>Pets</h1>
      <div className="pets-list__container">
        {/* make a component for the individual pet (pet card) */}
        {pets.map((pet, index) => {
          return (
            <div key={index}>
              <PetCard pet={pet} />
            </div>)
        })}
      </div>
    </div>
  )
}

export default PetsList;