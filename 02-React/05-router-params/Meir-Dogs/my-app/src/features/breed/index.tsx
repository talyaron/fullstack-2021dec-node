import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getBreedImageRandom, Image } from "../breeds/getBreeeds";

const Breed = () => {
  const {breed} = useParams();
  const[breedImage, setBreedImage] = useState<Image>({breed:"", src:"" })
  useEffect(()=>{
    if(breed)
      getBreedImageRandom(breed).then(breedImage=>
        setBreedImage(breedImage)
      );
  }, [breed]);
  return (
    <div> 
      <h1>breed: {breed}</h1>
      <img src={breedImage.src} alt={breedImage.breed} />
  </div>
  ); 
};

export default Breed;