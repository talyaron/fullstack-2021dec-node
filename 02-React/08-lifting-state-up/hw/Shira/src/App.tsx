import React from 'react';
import { useState, useEffect } from 'react';
import { CircleOne } from './components/CircleOne';
import { CircleTwo } from './components/CircleTwo';
import { CircleThree } from './components/CirclThiree';
import { CircleFour } from './components/CircleFour';
import "./styles/App.scss";

function App() {
  useEffect(()=>{
    setOne(Math.floor(Math.random()*16777215).toString(16))
  setTwo(Math.floor(Math.random()*16777215).toString(16))
  setThree(Math.floor(Math.random()*16777215).toString(16))
  setFour(Math.floor(Math.random()*16777215).toString(16))
  },[])
  const [one, setOne] = useState<string>('white');
  const [two, setTwo] = useState<string>('white');
  const [three, setThree] = useState<string>('white');
  const [four, setFour]= useState<string>('white');
  const [AllColor, setAllColor] = useState<string>('white');
  
  function createNewColor(color:any){
    console.log(color);
    
    setAllColor(color)
  }
 
  
  return (
    <div className="App" style={{backgroundColor: AllColor }}>
      <CircleOne  color={one} createNewColor={createNewColor}/>
      <CircleTwo color={two} createNewColor={createNewColor}/>
      <CircleThree color={three} createNewColor={createNewColor}/>
      <CircleFour color={four} createNewColor={createNewColor}/>
    </div>
  );
}

export default App;
