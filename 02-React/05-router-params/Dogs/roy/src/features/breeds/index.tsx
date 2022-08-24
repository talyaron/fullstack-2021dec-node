import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreedCard from "./BreedCard";
import { getBreeds } from "./getBreeds";
import { getimages } from "./getimage";

interface breeds{
  breedname:string,
  breedimage:string,
}

const Breeds = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<string[]>([]);
  
  useEffect(() => {
    getBreeds().then((brds) => {
      if (brds) {
        console.log(brds)
        setBreeds(brds);
       }
      getimages().then
    });
    
  }, []);
  return(
    <div>
  {breeds.map((breed)=>{
    return <Link to={`/breed/${breed}`}><BreedCard key={breed} breed={breed}/></Link>
  })}
  </div>
  )
};

export default Breeds;