import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './view/styles/app.scss';
import { Register } from './view/features/register/Register';
import {Login} from './view/features/login/Login';
import {Secrets} from './view/features/chooseSecret/Secrets';
import { Facts } from './view/features/facts/Facts';
import { secretProps } from './view/features/model';
import { factsProps } from './view/features/model';



export const personLink: secretProps[]  =[
 { issue: "bruce lee",
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/330px-Bruce_Lee_1973.jpg',
 
  //aged 32 have been a student in harvard 
},
 {
    issue: 'Jean-Claude Van Damme',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Van_Damme_Cannes_2010_%28cropped%29.jpg/330px-Van_Damme_Cannes_2010_%28cropped%29.jpg',
  
    //  His paternal grandmother was Jewish 65 years old
},
{
    issue: 'Brad Pitt',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
    
    // was married to Angelina Jolie born in Sweden
},
{
  issue: 'Charlie Chaplin',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Chaplin_The_Kid_2_crop.jpg/255px-Chaplin_The_Kid_2_crop.jpg',
   
    // born in london had 5 children
} 

]

export const personSecret: factsProps[]  =[
  { issue: "bruce lee",
   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/330px-Bruce_Lee_1973.jpg',
   trueFact: 'died 32 years old',
   wrongFact: 'have been a student in harvard' 
 },
  {
     issue: 'Jean-Claude Van Damme',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Van_Damme_Cannes_2010_%28cropped%29.jpg/330px-Van_Damme_Cannes_2010_%28cropped%29.jpg',
     trueFact: 'His paternal grandmother was Jewish',
     wrongFact: 'he is 65 years old' 
 },
 {
     issue: 'Brad Pitt',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg',
     trueFact: 'was married to Angelina Jolie',
     wrongFact: 'born in Sweden'
 },
 {
     issue: 'Charlie Chaplin',
     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Chaplin_The_Kid_2_crop.jpg/255px-Chaplin_The_Kid_2_crop.jpg',
     trueFact: 'born in london',
     wrongFact: 'had 5 children'
 } 
 
 ]

function App() {
 
  return (
     <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/choose-secret' element={<Secrets secretArray={personLink}  />}/>
        <Route path='/choose-secret/:scrt' element={<Facts factsArray={personSecret}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
