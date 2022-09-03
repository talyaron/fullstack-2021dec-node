import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreedImage from "./BreedImage";
import { getBreedImages } from "./getBreedImages";


const Breed = () => {
    const { breedName } = useParams();
    const [breedImages, setImages] = useState<string[]>([]);
    useEffect(() => {
        getBreedImages(breedName).then(brdImgs => {
            setImages(brdImgs);
        })
    }, []);
    return (
        <div className="breed">
            <h1>{breedName} breed:</h1>
            <div className="breed-image__container">
                {breedImages.map((breedImage, idx) => <BreedImage imgSrc={breedImage} key={idx}/>)}
            </div>
        </div>
    );
}

export default Breed;