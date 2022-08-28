import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'
import { factory } from 'typescript';


function App() {

 const [breeds, setBreeds] = useState<string[]>([]); //initial value

  async function handleAddPhoto() {
    try {
      const { data } = await axios.get('https://dog.ceo/api/breeds/image/random'); // rest API
      if(!data) throw new Error("No data");
      console.log(data);
      const message:any = data.message;
      setBreeds([message]);
      console.log([message]);
    } catch (error) {
        console.error(error);
      }
  }


  return (
    <div className="App">
      <header className="App-header">
      <button onClick={handleAddPhoto}>ADD</button>
      <h3>{breeds}</h3>  
      
      
       {breeds.map((breed) => (
          
          <img src={breed}/>
       ))}

      
      </header>
    </div>
  );

}


export default App;
