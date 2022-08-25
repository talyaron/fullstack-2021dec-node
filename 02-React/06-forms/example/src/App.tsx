import { useState, ChangeEvent, FormEvent } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("red");

  function handleWrite(ev: any) {
    try {
      setText(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  function handleBackgroundColor(ev: ChangeEvent<HTMLInputElement>) {
    try {
      setBackgroundColor(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();
    try {
      let {text, backgroundColor, rotate} = ev.target.elements;
      text = text.value;
      backgroundColor = backgroundColor.value;
      rotate = rotate.value;

      console.log(text, backgroundColor, rotate)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" id="" onChange={handleWrite} />
        <input type="color" name='backgroundColor' onChange={handleBackgroundColor} />
        <input type="range" name='rotate' />
        <button>SEND</button>
      </form>
      <p>{text}</p>
      <div className="bar"></div>
    </div>
  );
}

export default App;
