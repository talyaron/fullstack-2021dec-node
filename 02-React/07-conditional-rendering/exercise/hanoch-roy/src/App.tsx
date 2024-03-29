import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);
  const [image, setImage] = useState<boolean>(false);

  function handleCheck(ev: any) {
    try {
      console.dir(ev.target.checked);
      setIsChecked(ev.target.checked);
    } catch (error) {
      console.error(error);
    }
  }

  function handleAddCounter() {
    try {
      setCounter(counter + 1);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChangeImage(ev: any){
    try {
      
      console.dir(ev.target)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: isChecked ? `green` : `red` }}>
        {counter % 2 === 0 ? (
          <img
            src="https://media1.giphy.com/media/26gsasKHkeH0VP8d2/200w.gif?cid=82a1493bairztvk1m6qm17y5df3ii6puqubjvw1adwzyk7ul&rid=200w.gif&ct=g"
            className="App-logo"
            alt="logo"
          />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <input type="checkbox" name="" id="" onChange={handleCheck} />
        {isChecked ? <h2>Checked</h2> : <h2>Not Checked</h2>}
        <h2>{counter}</h2>
        <button onClick={handleAddCounter}>ADD</button>
        <button onClick={handleAddCounter}>{counter % 2 === 0 ? (
          <img
            src="https://media1.giphy.com/media/26gsasKHkeH0VP8d2/200w.gif?cid=82a1493bairztvk1m6qm17y5df3ii6puqubjvw1adwzyk7ul&rid=200w.gif&ct=g"
            className="App-logo"
            alt="logo"
          />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}</button>
      </header>
    </div>
  );
}

export default App;
