import React from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { Output } from './features/components/Output';
import { getJoke } from './features/joke/jokeAPI';

function App() {
  const dispatch = useAppDispatch()
  function handleGetJoke(){
    try {
      dispatch(getJoke())
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <div className="App">
      <button onClick={handleGetJoke}>get joke</button>
      <Output/>
    </div>
  );
}

export default App;
