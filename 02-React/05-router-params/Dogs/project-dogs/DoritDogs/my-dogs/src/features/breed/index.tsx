import React from 'react' ;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBreedImageRandom, NameAndImage } from "../breeds/getBreeds";
import { Link } from 'react-router-dom'

const Breed = () => {
  const { breed } = useParams();
  const [breedImage, setBreedImage] = useState<NameAndImage>({ breed: "", src: "" });

  useEffect(() => {
    if (breed)
      getBreedImageRandom(breed).then((breedImage) =>
        setBreedImage(breedImage)
      );
  }, [breed]);
  return (
    <div>
      <h1>Breed: {breed}</h1>
      <img src={breedImage.src} alt={breedImage.breed} />
      <Link to="/">Go Back to Breeds</Link>
    </div>
  );
};

export default Breed;
