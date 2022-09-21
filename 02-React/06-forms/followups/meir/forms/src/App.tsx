import {ChangeEvent, useState} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState<string>("")
  const [backgroundColor, setBackgroundColor] = useState<string>("red")

  function handleWrite(ev:any){
    try {
      setText(ev.target.value);
    } catch (error) {
      console.error(error)
    }
  }

  function handleBackgroundColor(ev:ChangeEvent<HTMLInputElement>) {
    try {
      setBackgroundColor(ev.target.value);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      

        <input type="text" name="" id="" onChange={handleWrite} />
        <input type="color" onChange={handleBackgroundColor} />
        <input type="range" />
        <p>{text}</p>
        <div className="bar"></div>

      
    </div>
  );
}

export default App;
