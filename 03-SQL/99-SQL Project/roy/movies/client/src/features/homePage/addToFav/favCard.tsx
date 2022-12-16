import axios from "axios";
import { CardProps } from "../getall/getAll";
;

const Card = ({
  movie_id,
  imageurl,
  movie_name,
  year,
  type,
  director,
  studio,
}: CardProps) => {
  
  return (
    <div className="container">
      <img src={imageurl} alt={movie_id}/>
      <h1>{movie_name}</h1>
      <h2>{year}</h2>
      <h2>{type}</h2>
      <h2>{director}</h2>
      <h2>{studio}</h2>
    </div>
  );
};

export default Card;
