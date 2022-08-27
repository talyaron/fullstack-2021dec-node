import { getBreedImageRandom, Image } from "../breeds/getAllBreeds";
import React, { useState } from "react";
// import BreedCard from "./BreedCard";
import { Nav } from "../navBar/Nav";
import { BreedContainer } from './BreedContainer';
import "./breed.scss"

const Breed = () => {
  
    return (
      <div className="session">
        <Nav/>
        <div className="breedWrapper">
            <BreedContainer/>
        </div>
        <img className="background" src="https://cdn.dribbble.com/users/5734743/screenshots/17865485/media/3a675fe89a81dcae2799df38bb646655.jpg?compress=1&resize=1600x1200&vertical=top" alt="" />
      </div>
    );
  };

export default Breed;
