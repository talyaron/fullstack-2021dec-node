import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isTrue,setIsTrue] = useState<boolean>(false)
  
  function addCounter(){
   
    setIsTrue( !isTrue );
    console.log(isTrue)
  }
  return (
    <div className="App">
      <header className="App-header">
        {isTrue ? (
          <div onClick={addCounter}
            // src="https://media1.giphy.com/media/26gsasKHkeH0VP8d2/200w.gif?cid=82a1493bairztvk1m6qm17y5df3ii6puqubjvw1adwzyk7ul&rid=200w.gif&ct=g"
            className="div"
            // alt="logo"
          />
        ) : (
          <div onClick={addCounter}  className="red"  />
        )}
       
        
      </header>
    </div>
  );
}

export default App;
