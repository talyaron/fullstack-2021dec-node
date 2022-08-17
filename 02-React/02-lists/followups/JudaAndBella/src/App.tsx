import { useState } from "react";
import axios from "axios";
import "./view/styles/app.scss";

import Card from "./view/components/card/Card";

interface Breed {

  breed: string,
  country: string,
  origin: string,
  coat: string,
  pattern: string,

}

// const names: Name[] = [
//   { id: "2342", title: "Moshe", text: "let my people go" },
//   {
//     id: "fdhdfhdffhd",
//     title: "Nelson Mandela",
//     text: "Eye for an eye, and the whole world will be blind",
//   },
//   { id: "ryerhf", title: "Archimedes", text: "EUREKA!" },
// ];

let factVar = "";

function App() {
  const [counter, setCounter] = useState(0); //initial value
  const [factVar, setFactVar] = useState(''); //initial value
  const [allBreeds, setBreeds] = useState([]);

  async function handleAddCounter() {
    try {
      // setCounter(counter + 1) //new value ... it will take some millisconds to update
      console.log("counter:", counter);

      const { data } = await axios.get("https://catfact.ninja/breeds"); //rest API

      const allBreeds = data.data
      console.log(allBreeds);
      console.log(allBreeds[0].breed);

      if (!allBreeds) throw new Error("No breeds");

      setBreeds(allBreeds)
      // if (!data) throw new Error("No data");
      // const { fact } = data;
      // if (!fact) throw new Error("No fact");
      // setFactVar(fact);



    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>ADD</button>
 
        <div className="btn">OK</div>
        
        {allBreeds.map((breed: Breed) => (
          <Card key={breed.breed} breed={breed.breed} country={breed.country} origin={breed.origin} coat={breed.coat} pattern={breed.pattern} />
        ))}

        <button>OK2</button>
      </header>
    </div>
  );
}

export default App;
