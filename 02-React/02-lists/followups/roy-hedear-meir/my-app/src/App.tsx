import React from 'react';
import { useState } from "react";
import axios from "axios";
import "./view/style/app.scss";
import "./view/style/btns.scss";
import Card from './view/components/Card/Card'
import { factory } from 'typescript';

interface Breed {
  breed: "string",
  country: "string",
  origin: "string",
  coat: "string",
  pattern: "string"    
}



function App() {
  const [counter, setCounter] = useState(0); //initial value
  const [breeds, setBreeds] = useState<Breed[]>([]); //initial value

  async function handleAddCounter() {
    try {
      setCounter(counter + 1) //new value ... it will take some millisconds to update
      console.log("counter:", counter);

      const { data } = await axios.get("https://catfact.ninja/breeds"); //rest API
      if (!data) throw new Error("No data");
      // const { breeds } = data;
      // if (!breeds) throw new Error("No breeds");
      // setBreedsVar(breeds);
      console.log(data);
      setBreeds(data.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>ADD</button>
        {/* <h3>{breedsVar}</h3> */}
        <h3>{counter}</h3>
        <div className='btn'>OK</div>
        {breeds.map((breed) => (
           <p key={breed.breed}>{breed.breed}</p>
        ))}
  
        

      
   
      </header>
    </div>
  );
  
}


export default App;
