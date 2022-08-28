import React, { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import { getBreeds, Image } from "./getBreeds";
import './breeds.scss';

const Breeds = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<Image[]>([]);

  useEffect(() => {
    getBreeds().then((brds: Image[]) => {
      if (brds.length > 0) {
        console.log(brds);
        setBreeds(brds);
      }
    });
  }, []);

  return (
    <div>
      <h1>Breeds</h1>
      {breeds.map((breed, i)=><BreedCard breed={breed}/>)}
    </div>
  );
};

export default Breeds;
