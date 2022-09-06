import React from 'react';
import { useState } from 'react';
import { CircleBlue } from './components/Circle-blue';
import { CircleGreen } from './components/Circle-green';
import { CircleRed } from './components/Circle-red';
import { CircleYellow } from './components/Circle-yellow';
import "./styles/App.scss";

function App() {
  const [blue, setBlue] = useState<string>('yellow');
  const [green, setGreen] = useState<string>('yellow');
  const [yellow, setYellow] = useState<string>('yellow');
  const [red, setRed]= useState<string>('yellow');
  const [mainColor, setMainColor] = useState<string>('yellow');
  
  function createNewColor(color:any){
    setMainColor(color)
  }
  setBlue(Math.floor(Math.random()*16777215).toString(16))
  setGreen(Math.floor(Math.random()*16777215).toString(16))
  setYellow(Math.floor(Math.random()*16777215).toString(16))
  setRed(Math.floor(Math.random()*16777215).toString(16))
  return (
    <div className="App" style={{backgroundColor: mainColor }}>
      <CircleBlue  color={blue} createNewColor={createNewColor}/>
      <CircleGreen/>
      <CircleYellow/>
      <CircleRed/>
    </div>
  );
}

export default App;
