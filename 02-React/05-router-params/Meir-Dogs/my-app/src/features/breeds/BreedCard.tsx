import { FC } from "react"
import { Image } from "./getBreeds"
import { Link } from "react-router-dom";

interface BreedCardProps{
  breed:Image;
}
const BreedCard:FC<BreedCardProps> = ({ breed }) => {
  return (
    <Link to={`/breed/${breed.breed}`}>
      <div className="card">
          <img src={breed.src} alt={`${breed.breed}`} />
          <p>{breed.breed}</p>
      </div>
    </Link>
  );
};

export default BreedCard;