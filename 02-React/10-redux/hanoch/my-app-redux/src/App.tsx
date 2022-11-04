import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;


function Input(){
  const dispatch = useAppDispatch()
function handleChangeText(){
  try {
    dispatch()
  } catch (error) {
    console.error(error);
    
  }
}
  return(
  <input type="text" onChange={handleChangeText} />
  )
};

function Output(){
  const text = useAppSelector()
  return <div>{text.length > 0 ? <h1>text</h1>: 'text goes here'}</div>
  
}