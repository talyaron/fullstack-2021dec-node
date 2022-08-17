import { useState, useEffect } from "react";
import "./view/styles/app.scss";
import axios from "axios";
import Card from "./view/components/card/Card";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/components/home/Home';
import Outside from './view/components/outside/Outside';

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

  const counterEffect = counter;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setCounter(counterEffect)
    }, 300);
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
      clearTimeout(identifier);
    };
  }, [counterEffect]);




  return (
    <div className="App">

       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Outside" element={<Outside/>} />
        </Routes>
      </BrowserRouter>

      <header className="App-header">
        <button onClick={handleAddCounter}>ADD</button>
        {/* <h3>{breedArray}</h3> */}
        <h3>{counter}</h3>
        <div className="btn">OK</div>

        <Card text={"BEY"} title={"HEY"}/>

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
