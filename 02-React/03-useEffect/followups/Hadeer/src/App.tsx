import { useState, useEffect } from "react";
import axios from "axios";
import "./view/styles/app.scss";

import Card from "./view/components/card/Card";

interface Name {
  title: string;
  text: string;
  id: string;
}

const names: Name[] = [
  { id: "2342", title: "Moshe", text: "let my people go" },
  {
    id: "fdhdfhdffhd",
    title: "Nelson Mandela",
    text: "Eye for an eye, and the whole world will be blind",
  },
  { id: "ryerhf", title: "Archimedes", text: "EUREKA!" },
];



interface Breed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}
let x = 1;
function App() {
  console.log("start function", x);
  x++;

  const [counter, setCounter] = useState<number>(0); //initial value
  const [factVar, setFactVar] = useState<string>(""); //initial value
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(()=>{
    console.log('run with use effect')
    handleAddCounter();
  },[])

  async function handleAddCounter() {
    try {
      // setCounter(counter + 1) //new value ... it will take some millisconds to update
    

      const { data } = await axios.get("https://catfact.ninja/breeds"); //rest API
      if (!data) throw new Error("No data");
      // const { fact } = data;
      // if (!fact) throw new Error("No fact");
      // setFactVar(fact);
      console.log(data);
      if (!("data" in data)) throw new Error("no data of breeds");
      setBreeds(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>Get</button>
        <button onClick={()=>{setCounter(counter + 1)}}>ADD To Counter</button>
        <h3>{factVar}</h3>
        <h3>{counter}</h3>
        <div className="btn">OK</div>
        {/* {names.map((name: Name) => (
          <Card key={name.id} title={name.title} text={name.text} />
        ))} */}
        {breeds.map((breed) => (
          <p key={breed.breed}>{breed.breed}</p>
        ))}

        <button>OK2</button>
      </header>
    </div>
  );
}

export default App;
