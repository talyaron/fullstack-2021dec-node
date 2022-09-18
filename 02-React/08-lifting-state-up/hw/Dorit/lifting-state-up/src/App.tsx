import {useState} from 'react';
import './App.css';
import Baloon1 from './components/Baloon1';
import Baloon2 from './components/Baloon2';
import Baloon3 from './components/Baloon3';

function App() {
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
