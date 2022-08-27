import { FC } from "react";
import { NameAndImage } from "./getBreeds";
import { Link } from "react-router-dom";
import React from "react";

interface BreedCardProps {
  breed: NameAndImage;
}
const BreedCard: FC<BreedCardProps> = ({ breed }) => {
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
