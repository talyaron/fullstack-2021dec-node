import React, { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import { getBreeds, NameAndImage } from "./getBreeds";
import './breeds.scss';
import { ChangeEvent, FormEvent } from "react";
import Breed from "../breed";
let myIndex:number = 0
const Breeds = () => {
  //set state breeds
  const [breeds, setBreeds] = useState<NameAndImage[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    getBreeds().then((brds: NameAndImage[]) => {
      if (brds.length > 0) {
        console.log(brds);
        setBreeds(brds);
      }
    });
  }, []);

  function handleWrite(ev: any) {
    console.log(ev.target)
    try {
      setText(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(ev: any) {
    console.log("handle submit")
    ev.preventDefault();
    try {
     console.log(text)

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" id="" onChange={handleWrite}/>
          <button>SEND</button>
        </form>
      </div>
      {
      <div className="chosen">
        <p>We need to find the breed</p>
        {myIndex = breeds.findIndex((breed) => breed.breed == text)}
        console.log(`myIndex = ${myIndex}`)
      </div>  
        /*
        const myBreed:NameAndImage= {breeds[myIndex]}
        console.log(myBreed)
      </div>
      */ }
      <div className="BreedList">
        <h1>Breeds: {breeds.length}</h1>
        {breeds.map((breed, i)=><BreedCard breed={breed}/>)}
      </div>
      
    </>
  );
  }

export default Breeds;
