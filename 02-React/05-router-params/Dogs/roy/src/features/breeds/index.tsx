import React, { useEffect, useState } from "react";
import './breeds.scss';
import BreedCard from "./BreedCard";
import { getBreeds } from "./getBreeds";
import { getimages } from "./getimage";
export interface BreedCardProps {
  breed:BreedsObject;
}

 interface BreedsObject {
  breedName: string,
  breedImage: string,
}

const Breeds = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<BreedsObject[]>([]);

  useEffect(() => {
    getBreeds().then((brds) => {
      brds.forEach(brd => {
        getimages(brd).then(brdImg => {
          setBreeds(prevState => ([...prevState, { breedName: brd, breedImage: brdImg }]));
        })
      });
    });
  }, []);
  return (
    <div className="card">
      <h1>Dog Breeds: {breeds.length}</h1>
      
      {breeds.sort((a,b) => a.breedName.localeCompare(b.breedName)).map((breed, id) => <BreedCard breed={breed} key={id}/>)}
        
    
    </div>
 ) 
};

export default Breeds;
