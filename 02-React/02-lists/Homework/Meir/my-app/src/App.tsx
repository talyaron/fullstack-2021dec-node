import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'
import { factory } from 'typescript';

interface Item {
  name:string,
  adress:string,
  dog:string,
  id:string
}

const items:Item[]= [
   {id:'1234', name:"Oren", adress:"Vaitzman 94 Kfar Saba", dog:"Tomy"},
   {id:'2611', name:"Pinjas", adress:"Ajuza 167 Ra'anana", dog:"Shrek"},
   {id:'1408', name:"Ernest", adress:"HaRohe 32 Ramat", dog:"Rintintin"}
  ]


let factVar = '';



function App() {

  const [counter, setCounter] = useState(0); //initial value
  const [factVar, setFactVar] = useState(''); //initial value


  async function handleAddCounter() {
    try {
      // setCounter(counter +1) //new value --- it will take some miliseconds to uptade
      console.log("counter:",counter)

      const { data } = await axios.get('https://catfact.ninja/fact'); // rest API
      if(!data) throw new Error("No data");
      console.log(data);
      const { fact } = data;
      if(!fact) throw new Error("No fact");
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
        <div className='btn'>OK</div>
          
        {items.map((item:Item) => <Card key={item.id} name={item.name} adress={item.adress} dog={item.dog} />)}
        
      </header>
    </div>
  );
}

export default App;
