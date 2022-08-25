import { useState, useEffect } from "react";
import axios from "axios";
import "./view/styles/app.scss";

import Card from "./view/components/card/Card";

interface Fruit {
  name: string;
  color: string;

}
let x = 1;
function App() {
  console.log("start function", x);
  x++;

  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(()=>{
    console.log('run with use effect')
    handleAddCounter();
  },[])

  async function handleAddCounter() {
    try {
      // setCounter(counter + 1) //new value ... it will take some millisconds to update
    

      const { data } = await axios.get("https://catfact.ninja/breeds"); //rest API
      if (!data) throw new Error("No data");
      const { fact } = data;
      if (!fact) throw new Error("No fact");
      setFactVar(fact);
      console.log(data);
      if (!("data" in data)) throw new Error("no data of breeds");

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
