import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { changeText, textSelector } from './features/counter/text/textSlice';
import { getMyJoke } from "./features/counter/text/textAPI";
import { statusSelector } from './features/counter/text/textSlice';
import { Spinner } from "./features/spinner/Spinner";


function App() {

  const status = useAppSelector(statusSelector)
  const dispatch = useAppDispatch()

  function handleGetMyJoke() {
    try {
      dispatch(getMyJoke())
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <Input />
      {status === 'loading'?<Spinner/>:<Output />} 
      <button onClick={handleGetMyJoke}>Get My Joke</button>
    </div>
  );
}

export default App;

function Input() {
  const dispatch = useAppDispatch();
  function handleTextChange(ev: any) {
    dispatch(changeText(ev.target.value));
  }

  return (
    <div>
      <input type="text" onChange={handleTextChange} />
    </div>
  )
}

function Output() {
  const text = useAppSelector(textSelector)
  return <div>{text.length>0?text:"Text goes here"}</div>
}
