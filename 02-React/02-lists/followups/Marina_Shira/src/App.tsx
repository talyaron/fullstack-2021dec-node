import React from 'react';
// import logo from './logo.svg';
import './view/styles/app.scss';

import { useState } from 'react';

import Card from './view/components/card/Card'
import axios from 'axios';

interface Name {
  title:string,
  text:string,
  id:string
}

const peoples:Name[] = [
{id:'123', title:' Cars' , text: 'Audi,BMW,Mercedes'},
{id:'456', title:' Cities' , text: 'Jerusalem,Yavne,Ashdod'},
{id:'789', title:' Cuntries' , text: 'Israel,Japan,China'}

]

let catBreed = '';
interface Breed{
  "breed": string,
  "country": string,
  "origin": string,
  "coat": string,
  "pattern": string
}

function App() {



  const [catBreed, setCatBreed] = useState<Breed[]>([]);



 async function handleGetBreed() {
  try {
    const {data} = await axios.get('https://catfact.ninja/breeds')
    if (!data ) throw new Error('No data');
    console.log(data);
    if (! ('data' in data) )throw new Error ('No data of breeds')
    const {breeds} = data.data ;

    if (!breeds ) throw new Error('No breed');
     
    setCatBreed(breeds);

  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleGetBreed}>Get Breed</button>
      {/* <h1>{catBreed}</h1> */}
      {catBreed.map((catBreed) => (
          <p key={catBreed.breed}>{catBreed.breed}</p>
        ))}
      {/* {peoples.map((name:Name)=>{
        return <Card key={name.id} title={name.title} text={name.text}/>
      })}
     */}


      </header>
    </div>
  );
}

export default App;
