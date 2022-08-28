import { FC } from "react";
import { Link } from "react-router-dom";
import { Image } from "./API-fn/getBreeds";

interface BreedCardProps {
  breed: Image;
}

export const BreedCard: FC<BreedCardProps> = ({ breed }) => {
  return (
    <Link className="text-decoration" to={`/breed/${breed.breed}`}>
      <div className="grid__card">
        <img className="grid__card__img" src={breed.src} alt={`${breed.breed}`} />
        <p className="grid__card__name">{breed.breed}</p>
      </div>
    </Link>
  );
};
