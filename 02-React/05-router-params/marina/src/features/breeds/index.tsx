import { useState, useEffect } from 'react';
import { getBreeds, Image } from "../breeds/API-fn/getBreeds";
import { BreedCard } from './BreedCard';

export const Breeds = () => {
  const [breeds, setBreeds] = useState<Image[]>([]);

  useEffect(() => {

    getBreeds().then((brds:Image[]) => {

        if(brds.length > 0) {

            console.log(brds);
            setBreeds(brds);
        }
    })
  }, [])

  return (
    <div>
      <h3 className="header">Dogs Breeds</h3>
      <div className="grid">
        {breeds.map((breed) => (
          <BreedCard breed={breed} />
        ))}
      </div>
    </div>
  );
}


