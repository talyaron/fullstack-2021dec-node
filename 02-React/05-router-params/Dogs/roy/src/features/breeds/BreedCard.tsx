import { BreedCardProps } from ".";
import { Link } from "react-router-dom";


const BreedCard= ({ breed }: BreedCardProps)=> {
  return(<Link to={`/breed/${breed.breedName}`}>
    <div className="card">
     <img src={breed.breedImage} />
     <h1>{breed.breedName.toUpperCase()}</h1>
     </div>
   
    </Link>
  )
}

export default BreedCard