import React from 'react';
import './view/styles/app.scss';
import { useState } from 'react';
import axios from 'axios';
import Card from './view/components/card/Card';



interface Friend {
  name:string,
  address:string,
  age:number
}

const friends:Friend[] = [
{name:'Shir',address:'Harimon,Netivot',age:20},
{name:'Hodaya',address:'London,England',age:20},
{name:'Or',address:'Ariel Sharon,Netivot',age:22}

]
let factVar = '';

function App() {
const [factVar,setFactVar] = useState('');
 async function handleAddCounter(){
try {

  
  
  const {data} = await axios.get("https://catfact.ninja/fact")
  console.log(data);
  if (!data) throw new Error("No data");

  const {fact} = data;
  if (!fact) throw new Error("No fact");
  console.log(fact);

  setFactVar(fact)
  



  
} catch (error) {
  console.error(error)
}
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="btn" onClick={handleAddCounter}>ADD</div>
      <h2 className='facts'>{factVar}</h2>
     {friends.map((friend)=>{
      return<Card name={friend.name} address={friend.address} age={friend.age}/>
     })}



      </header>
    </div>
  );
}

export default App;
