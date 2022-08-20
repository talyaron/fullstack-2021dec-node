import React from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/components/Cart';
import { useState, useEffect } from 'react';
interface Props{
  title:string,
  text:string,
  id:string
};

interface catsFacts{
  fact: string,
    length: number
}

const names:Props[] =[
  {id:'111', title:'moses', text:'lets go'},
  {id:'222', title:'david', text:'i love violate'},
  {id:'333', title:'solomon', text:'be quit'}
]



function App() {
  const [facts, setFacts] = useState<catsFacts[]>([])
  useEffect(()=>{
    handleDisplayFacts()
  })
  async function handleDisplayFacts(){
    try {
      const {data} = await axios.get('https://catfact.ninja/facts');
      if (!data) throw new Error("No data");
      
      setFacts(data.data)
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <h1 className='title'>exercise 1</h1>
      {names.map((name:Props)=>{
        return <Card key={name.id} title={name.title} text={name.text} />
       
      })}
      <h1 className='title'>exercise 2</h1>
      <button onClick={handleDisplayFacts}>display facts</button>
      {facts.map(fact=><p key={fact.length}>{fact.fact}</p>)}
    </div>
  );
}

export default App;
