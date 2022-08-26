import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {getBreedImage, Image} from "./getimage"
import './breed.scss';
const Breed = () => {
  const { breed } = useParams();
  console.log(breed)
  const [Image, setBreedImage] = useState<Image>({ breed: "", src: "" });

  useEffect(() => {
    if (breed)
      getBreedImage(breed).then((breedImage) => setBreedImage(breedImage)
          );
  }, [breed]);
console.log(breed, Image)
  return (
    <div className="cardbreed">
    <h1 className="nav">{breed}</h1>
    <img src={Image.src} alt={Image.breed} />
  </div>
  )
}

export default Breed