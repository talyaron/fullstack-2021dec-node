import { getAllBreeds, Image } from "./getAllBreeds";
import React, { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import "./breeds.scss";
import { Nav } from "../navBar/Nav";

const Breeds = () => {
    const [breeds, setBreeds] = useState<Image[]>([]);

    useEffect(() => {
        getAllBreeds().then((brds: Image[]) => {
        if (brds.length > 0) {
          console.log(brds);
          setBreeds(brds);
        }
      });
    }, []);
  
    return (
      <div className="session">
        <Nav/>
        <div className="breedsWrapper">
        {breeds.map((breed, i)=><BreedCard breed={breed}/>)}
        
        </div>
        <img className="background" src="https://cdn.dribbble.com/users/5734743/screenshots/17865485/media/3a675fe89a81dcae2799df38bb646655.jpg?compress=1&resize=1600x1200&vertical=top" alt="" />

      </div>
    );
  };

export default Breeds;
