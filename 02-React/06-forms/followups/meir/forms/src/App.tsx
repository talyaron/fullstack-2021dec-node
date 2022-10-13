import {ChangeEvent, FormEvent, useState} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState<string>("")
  const [backgroundColor, setBackgroundColor] = useState<string>("red")
  const [rangeBar, setRangeBar] = useState<string>('%50')
  const [rotateBar, setRotateBar] = useState<string>('0deg')

  function handleWrite(ev:any){
    try {
      setText(ev.target.value);
      console.log(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }

  function handleBackgroundColor(ev:ChangeEvent<HTMLInputElement>) {
    try {
      setBackgroundColor(ev.target.value);
      console.log(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }

  function handleRangeBar(ev:ChangeEvent<HTMLInputElement>) {
    try {

      setRangeBar(ev.target.value)
      console.log(ev.target.value)

    } catch (error) {
      console.error(error)
    }
  }

  function handleRotateBar(ev:ChangeEvent<HTMLInputElement>) {
    try {
      setRotateBar(ev.target.value)
      console.log(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }

  function handleSubmit(ev:any) {
    ev.preventDefault();
    try {
      let {text, backgroundColor, rotate} = ev.target.elements;
      text = text.value;
      backgroundColor = backgroundColor.value;
      rotate = rotate.value;
      console.log(text, backgroundColor, rotate);
    } catch (error) {
      console.error(error)
    }
  } 

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      
     <form onSubmit={handleSubmit}> 
        <input type="text" name="text" id="" onChange={handleWrite} />
        <input type="color" name="backgroundColor" onChange={handleBackgroundColor} />
        <input type="range" name="rotate" onChange={handleRangeBar} />
        <input type="range" min={-180} max={180} onChange={handleRotateBar}/>
        <p>{text}</p>
        <div className="bar" style={{rotate: `${rotateBar}deg`}}></div>
        <div className='bar' style={{width:`${rangeBar}vw`}}> </div>
        <button>SEND</button>
     </form>
      
    </div>
  );
}

export default App;
