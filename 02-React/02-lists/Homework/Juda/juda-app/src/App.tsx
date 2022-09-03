
import "./App.scss";
import BreedCard from "./view/components/BreedCard";
// import DudeCard from "./view/components/DudeCard";
import axios from "axios";
import { useState } from 'react';

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




function App() {

  const [breedVar, setBreedVar] = useState([]);


  async function handleGetAllBreeds() {
    const { data } = await axios.get("https://catfact.ninja/breeds")

    const allBreeds = data.data;
    console.log(allBreeds);

    setBreedVar(allBreeds)
  
  }

  return (
    <div>

      <button onClick={handleGetAllBreeds}>Get all cat's breeds</button>


      <h1>Hellow world</h1>

      {breedVar.map((breed: Breed) => (
          <BreedCard key={Math.random()} breed={breed.breed} country={breed.country} origin={breed.origin} coat={breed.coat} pattern={breed.pattern} />
        ))}


    </div>
  );
}



export default App;
