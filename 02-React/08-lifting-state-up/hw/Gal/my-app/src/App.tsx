import {useState} from 'react';
import './App.css';
import Circle from './components/Circle';

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>('red');

  function changeBackgroundColor(){
    try {
      setBackgroundColor(Math.floor(Math.random()*16777215).toString(16))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Circle backgroundColor={backgroundColor}/>
    </div>
  );
}

export default App;
