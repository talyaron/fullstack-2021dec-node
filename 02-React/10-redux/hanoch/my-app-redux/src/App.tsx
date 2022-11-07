import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {changeText, textSelector, statusSelector} from './features/text/textSlice'


function App() {
  return (
    <div className="App">
      <Input/>
      <Output/>
    </div>
  );
}

export default App;


function Input(){
  
  const dispatch = useAppDispatch()
function handleChangeText(ev: any){
  try {
    dispatch(changeText(ev.target.value))
  } catch (error) {
    console.error(error);
    
  }
}
  return(
  <input type="text" onChange={handleChangeText} />
  )
};

function Output(){
  const text = useAppSelector(textSelector)
  return <div>{text.length > 0 ? <h1>{text}</h1>: 'text goes here'}</div>
  
}