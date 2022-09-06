import React from 'react';
import { useState, useEffect } from 'react';
import { CircleBlue } from './components/Circle-blue';
import { CircleGreen } from './components/Circle-green';
import { CircleRed } from './components/Circle-red';
import { CircleYellow } from './components/Circle-yellow';
import "./styles/App.scss";

function App() {
  useEffect(()=>{
    setBlue(Math.floor(Math.random()*16777215).toString(16))
  setGreen(Math.floor(Math.random()*16777215).toString(16))
  setYellow(Math.floor(Math.random()*16777215).toString(16))
  setRed(Math.floor(Math.random()*16777215).toString(16))
  },[])
  const [blue, setBlue] = useState<string>('yellow');
  const [green, setGreen] = useState<string>('yellow');
  const [yellow, setYellow] = useState<string>('yellow');
  const [red, setRed]= useState<string>('yellow');
  const [mainColor, setMainColor] = useState<string>('yellow');
  
  function createNewColor(color:any){
    console.log(color);
    
    setMainColor(color)
  }
 
  
  return (
    <div className="App" style={{backgroundColor: mainColor }}>
      <CircleBlue  color={blue} createNewColor={createNewColor}/>
      <CircleGreen color={green} createNewColor={createNewColor}/>
      <CircleYellow color={yellow} createNewColor={createNewColor}/>
      <CircleRed color={red} createNewColor={createNewColor}/>
    </div>
  );
}

export default App;
