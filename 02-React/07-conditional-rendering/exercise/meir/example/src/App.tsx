import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
   const [isChecked, setIsChecked] = useState<boolean>(false)
   const [counter, setCounter] =useState<number>(0);
   
   function handleCheck(ev:any) {
     try {
      console.dir(ev.target.checked);
      setIsChecked(ev.target.checked);
     } catch (error) {
       console.error(error)

     }
  }

  function handleAddCounter(ev:any) {
    try {
      setCounter(counter+1)
    } catch (error) {
      console.error(error)
    }
  }
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor:isChecked?`yellow`:`navy`}}>
          <img src={logo} className="App-logo" alt="logo" />
          <input type="checkbox" name="" id="" onChange={handleCheck}/>
          {isChecked?<h2>Checked</h2>:<h2>Not Checked</h2>}
          <h2>{counter}</h2>
          <button onClick={handleAddCounter}>ADD</button>
        </header>
      </div>
    );
    
  
}

export default App;
