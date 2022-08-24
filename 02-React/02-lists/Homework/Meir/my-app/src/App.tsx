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

function App() {
  
  
  
  return (
    <div className="App">
      <header className="App-header">
      
        {items.map((item:Item) => <Card key={item.id} name={item.name} adress={item.adress} dog={item.dog} />)}
        
      </header>
    </div>
  );

}


export default App;
