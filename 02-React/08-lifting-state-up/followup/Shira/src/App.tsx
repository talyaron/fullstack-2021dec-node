import { useState } from "react";
import './App.css';

import Form from "./view/components/Form";
import ShowFormInfo from "./view/components/ShowFormInfo";
import Color from "./view/components/Color";

const App = () => {
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('white');
  const [size, setSize] = useState<number>(200);

function createNewColor(){
  try {
    setColor( Math.floor(Math.random()*16777215).toString(16))
  } catch (error) {
    console.error(error)
  }
}

function createNewSize(){
  try {
    setSize(Math.floor(Math.random()*400))
  } catch (error) {
    console.error(error)
    
  }
}

  return ( 
    <div className="App">
      <header className="appHeader">
      <Form setName={setName}/>
      <ShowFormInfo name={name} createNewColor={createNewColor} createNewSize={createNewSize} />
      <Color color={color} size={size}/>


      </header>
    </div>
  );
};

export default App;
