
import './PetCard.css';

const PetCard = ({pet}) => {
  return (
    <div className="pet-card">
      <div>Name: {pet.name} </div>
      <div>Kind: {pet.kind} </div> 
      <div>Breed: {pet.breed} </div>
    </div>
  )
}

export default PetCard;