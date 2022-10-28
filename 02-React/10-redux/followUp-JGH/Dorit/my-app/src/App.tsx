import { text } from "node:stream/consumers";
import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { changeText, messageSelector } from "./features/message/messageSlice";

function App() {
  return (
    <div className="App">
      <Input />
      <Output />
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
  );
}

function Output() {
  const text = useAppSelector(messageSelector)
  return <div>{text.length>0?text:"Text goes here"}</div>;
}

