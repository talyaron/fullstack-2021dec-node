import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setcounter] = useState<number>(0)
  function addCounter(){
    setcounter( counter+1 )
    console.log(counter)
  }
  return (
    <div className="App">
      <header className="App-header">
        {counter % 2 === 0 ? (
          <img onClick={addCounter}
            src="https://media1.giphy.com/media/26gsasKHkeH0VP8d2/200w.gif?cid=82a1493bairztvk1m6qm17y5df3ii6puqubjvw1adwzyk7ul&rid=200w.gif&ct=g"
            className="App-logo"
            alt="logo"
          />
        ) : (
          <img onClick={addCounter} src={logo} className="App-logo" alt="logo" />
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
