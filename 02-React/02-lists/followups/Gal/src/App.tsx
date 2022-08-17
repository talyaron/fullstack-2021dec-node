import { useState } from "react";
import "./view/styles/app.scss";
import axios from "axios";
// import Card from "./view/components/card/Card";

interface Breed {
  breed: string,
  country: string,
  origin: string,
  coat: string,
  pattern: string,
  // key: string
}

function App() {
  const [counter, setCounter] = useState(0);
  const [breedArray, setbreedArray] = useState<Breed[]>([]);

  async function handleAddCounter() {
    try {
      setCounter(counter + 1);
      console.log("counter:", counter);
      const { data } = await axios.get("https://catfact.ninja/breeds");
      if (!data) throw new Error("No data"); 
      console.log(data);
      if (!data) throw new Error("No breed");
      setbreedArray(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>ADD</button>
        {/* <h3>{breedArray}</h3> */}
        <h3>{counter}</h3>
        <div className="btn">OK</div>

        {breedArray.map((breed) => (
         <p>
            breed={breed.breed}
            country={breed.country}
            origin={breed.origin}
            coat={breed.coat}
            pattern={breed.pattern}
          </p>
        ))}

        <button>OK2</button>
      </header>
    </div>
  );
}

export default App;
