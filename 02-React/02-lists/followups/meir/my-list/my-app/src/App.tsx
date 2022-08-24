import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'
import { factory } from 'typescript';

interface Name {
  tittle:string,
  text:string,
  id:string
}

const names:Name[]= [
   {id:'1234', tittle:"HaRabi", text:"All are redeemed"},
   {id:'2611', tittle:"HaRabi", text:"No Jew will remain in exile"},
   {id:'1408', tittle:"Jasidim", text:"We want Moshiach Now!"}
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
          
          {names.map((name:Name) => <Card key={name.id} tittle={name.tittle} text={name.text} />)}
  
  
        
     
        </header>
      </div>
    );
  }


export default App;
