import React, { FC } from "react";
import Breed from "../breed"
interface BreedCardProps {
  breed: string;
}

const BreedCard: FC<BreedCardProps> = (props) => {
  const {breed}= props
let breeds={breed}
  return(
    <div className="card">
     <div className="cardinfo">
      <h3>{breed}</h3>
      <img src="" alt="" />
     </div>



    </div>
  )
}

export default BreedCard