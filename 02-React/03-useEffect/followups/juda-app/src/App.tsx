
import "./App.scss";
import BreedCard from "./view/components/BreedCard";
// import DudeCard from "./view/components/DudeCard";
import axios from "axios";
import { useState, useEffect } from 'react';

interface Breed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

// export interface Dude {
//   name: string;
//   age: number;
//   food: string;
// }

// const dudes: Dude[] = [
//   { name: "Juda", age: 28, food: "kuba" },
//   { name: "Dudu", age: 38, food: "pizza" },
//   { name: "Yossi", age: 12, food: "nana" },

// ]


let x = 1;

function App() {
  console.log("start function", x);
  x++;


  const [counter, setCounter] = useState<number>(0); //initial value
  const [breedVar, setBreedVar] = useState([]);

  useEffect(()=>{
    console.log('run with use effect')
    handleGetAllBreeds();
  },[])

  async function handleGetAllBreeds() {
    const { data } = await axios.get("https://catfact.ninja/breeds")

    const allBreeds = data.data;


    setBreedVar(allBreeds)
  
  }

  return (
    <div>

      <button onClick={handleGetAllBreeds}>Get all cat's breeds</button>
      <button onClick={()=>{setCounter(counter + 1)}}>ADD To Counter</button>

      <h1>Hellow world</h1>
      <h3>{counter}</h3>
      {breedVar.map((breed: Breed) => (
          <BreedCard key={Math.random()} breed={breed.breed} country={breed.country} origin={breed.origin} coat={breed.coat} pattern={breed.pattern} />
        ))}


    </div>
  );
}



export default App;
