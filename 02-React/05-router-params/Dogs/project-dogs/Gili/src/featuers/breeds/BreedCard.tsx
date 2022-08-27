import { FC } from "react";
import { Link } from "react-router-dom";
import { Image } from './getAllBreeds';
import './breeds.scss'

interface BreedCardProps {
    breed: Image;
}

const BreedCard:FC<BreedCardProps> = ({breed}) => {
    return (
        <Link to={`/breed/${breed.breed}`}>
            <div className="breedCard">
                <img src={breed.src} alt={`${breed.breed}`} />
                <h3>{breed.breed}</h3>
                <p>For more info </p> 
            </div>
        </Link>
    )
}
export default BreedCard;