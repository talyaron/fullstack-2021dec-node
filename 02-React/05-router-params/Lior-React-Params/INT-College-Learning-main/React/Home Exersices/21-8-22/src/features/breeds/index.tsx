import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import { getBreeds } from "./getBreeds";
import { getBreedsImage } from "./getBreedsImage";

export interface BreedCardProps {
    breed: BreedObject
}

interface BreedObject {
    breedName: string,
    breedImage: string
}

const Breeds = () => {
    const [breeds, setBreeds] = useState<BreedObject[]>([]);
    useEffect(() => {
        getBreeds().then(brds => {
            brds.forEach(brd => {
                getBreedsImage(brd).then(brdImg => {
                    setBreeds(prevState => ([...prevState, { breedName: brd, breedImage: brdImg }]))
                })
            });
        });
    }, []);
    return (
        <div className="breeds container">
            <h1>Dogs Breeds: {breeds.length}</h1>
            {breeds.map((breed, idx) => <BreedCard breed={breed} key={idx} />)}
        </div>
    );
}

export default Breeds;