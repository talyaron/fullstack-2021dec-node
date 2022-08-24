import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'
import { factory } from 'typescript';

// interface Item {
//   name:string,
//   adress:string,
//   dog:string,
//   id:string
// }

// const items:Item[]= [
//    {id:'1234', name:"Oren", adress:"Vaitzman 94 Kfar Saba", dog:"Tomy"},
//    {id:'2611', name:"Pinjas", adress:"Ajuza 167 Ra'anana", dog:"Shrek"},
//    {id:'1408', name:"Ernest", adress:"HaRohe 32 Ramat", dog:"Rintintin"}
//   ]



function App() {

 const [breeds, setBreeds] = useState([]); //initial value

  async function handleAddCounter() {
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random'); // rest API
      if(!data) throw new Error("No data");
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
        <h3>{breeds}</h3>
        
        {breeds.map((breed) => (
           <h3>{breeds}</h3>
        ))}
  
      </header>
    </div>
  );

}


export default App;
