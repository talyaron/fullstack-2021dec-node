import { useState } from "react";
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

let factVar = "";

function App() {
  const [counter, setCounter] = useState(0); //initial value
  const [factVar, setFactVar] = useState(''); //initial value

  async function handleAddCounter() {
    try {
      // setCounter(counter + 1) //new value ... it will take some millisconds to update
      console.log("counter:", counter);

      const { data } = await axios.get("https://catfact.ninja/fact"); //rest API
      if (!data) throw new Error("No data");
      const { fact } = data;
      if (!fact) throw new Error("No fact");
      setFactVar(fact);

      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>ADD</button>
        <h3>{factVar}</h3>
        <h3>{counter}</h3>
        <div className="btn">OK</div>
        {names.map((name: Name) => (
          <Card key={name.id} title={name.title} text={name.text} />
        ))}

        <button>OK2</button>
      </header>
    </div>
  );
}

export default App;
