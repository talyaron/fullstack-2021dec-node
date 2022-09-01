import React from 'react';
import logo from './logo.svg';
import './view/styles/App.scss';
import axios from 'axios';
import DogBreedCard from './view/components/dogCard/DogBreedCard';
import { allRules } from 'ts-config/lib/rules';

interface DogBreed {

  breed: string;
  coat: string;
  country: string;
  origin: string;
  pattern: string;

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <button className='getAllBtn'  onClick={handleGetAllBreeds} >Get all dog breeds</button>



      </header>
    </div>
  );
}

async function handleGetAllBreeds(){

const {data} = await axios.get('https://catfact.ninja/breeds')

 const allBreeds = data.data
 console.log(allBreeds);

{allBreeds.map(breed =>{
  return(
   <DogBreedCard breed={breed.breed} coat={breed.breed}  country={breed.country} 
   origin={breed.origin}
   />
  )
})} 

}

export default App;
