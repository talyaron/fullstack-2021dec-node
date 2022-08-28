import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'
import { factory } from 'typescript';

let x = 1;
function App() {

  console.log('start funcion', x)
  x++;
  
 const [breeds, setBreeds] = useState<string[]>([]); //initial value

 useEffect(()=>{
  console.log('run whith useEffect')
  handleAddPhoto();
 },[])

  async function handleAddPhoto() {
    try {

      console.log("breeds:",breeds)
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
      <button onClick={handleAddPhoto}>GET</button>
      <button onClick={()=>{setBreeds(breeds)}}>ADD Photo</button>
      <h3>{breeds}</h3>  
      
      
       {breeds.map((breed) => (
          
          <img src={breed}/>
       ))}

      
      </header>
    </div>
  );

}


export default App;
