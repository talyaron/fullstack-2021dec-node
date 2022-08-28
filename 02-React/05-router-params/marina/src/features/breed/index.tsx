import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Image, getBreedImageRandom } from '../breeds/API-fn/getBreeds';
import back from './img/back.svg';

export const Breed = () => {
  const {breed} = useParams();
  const [breedImage, setBreedImage] = useState<Image>({breed: '', src: ""})


  function handleRefreshImage() {

    if (breed) {
      getBreedImageRandom(breed).then((breedImage) =>
        setBreedImage(breedImage)
      );
    }
  }


  useEffect(() => {
    if(breed) {
      getBreedImageRandom(breed).then((breedImage) =>
        setBreedImage(breedImage)
      );
    }
    
  },[breed])

  return (
    <div>
      <Link className="text-decoration" to="/">
        <img className="icon" src={back} alt="back icon" />
      </Link>
      <p>Breed: {breed}</p>
      <img className="breed-img"
        src={breedImage.src}
        alt={breedImage.breed}
        onClick={() => handleRefreshImage()}
      />
    </div>
  );
}


