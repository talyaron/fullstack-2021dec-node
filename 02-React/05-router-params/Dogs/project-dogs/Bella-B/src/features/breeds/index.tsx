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
    <div className="container">
      <h1>All Dog Breeds Index</h1>
      <div className="wrapper">
        {breeds.map((breed, i) => <BreedCard breed={breed} />)}
        </div>
    </div>
  );
};

export default Breeds;
