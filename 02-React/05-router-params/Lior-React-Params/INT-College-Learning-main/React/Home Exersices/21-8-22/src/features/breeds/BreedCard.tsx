import { Link } from "react-router-dom";
import { BreedCardProps } from ".";


const BreedCard = ({ breed }: BreedCardProps) => {
    return (
        <Link to={breed.breedName}>
            <div className="breed-card">
                <img className="breed-card__image" src={breed.breedImage} />
                <h1 className="breed-card__name">{breed.breedName.toUpperCase()}</h1>
            </div>
        </Link>
    );
}

export default BreedCard;