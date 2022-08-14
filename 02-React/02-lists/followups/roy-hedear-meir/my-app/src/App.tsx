
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import axios from "axios";
import "./styles/app.scss";



function App() {
  const [counter, setCounter] = useState(0); //initial value
  const [factVar, setFactVar] = useState(''); //initial value

  async function handleAddCounter() {
    try {
      // setCounter(counter + 1) //new value ... it will take some millisconds to update
      console.log("counter:", counter);

      const { data } = await axios.get("https://catfact.ninja/breeds"); //rest API
      if (!data) throw new Error("No data");
      const { fact } = data;
      if (!fact) throw new Error("No fact");
      setFactVar(fact);

      
    } catch (error) {
      console.error(error);
    }
  }
  return(
    <div>Hi</div>
  )
}


export default App;
