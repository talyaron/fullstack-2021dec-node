import {useState} from 'react';

import './App.css';
import Colored from './components/Colored';
import Form from './components/Form';
import ShowFormInfo from './components/ShowFormInfo';

function App() {
  const [name, setName] = useState<string>('abcd');
  const [color, setColor] = useState<string>('white');
  const [size,setSize] = useState<number>(200);

  function createNewColor(){
    try {
      setColor(Math.floor(Math.random()*16777215).toString(16));
    } catch (error) {
      console.error(error);
    }
  }

  function createNewSize(){
    try {
      setSize(Math.floor(Math.random()*400));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form setName={setName}/>
        <ShowFormInfo name={name} createNewColor={createNewColor} createNewSize={createNewSize}/>
        <Colored color={color} size={size}/>
      </header>
    </div>
  );
}

export default App;
