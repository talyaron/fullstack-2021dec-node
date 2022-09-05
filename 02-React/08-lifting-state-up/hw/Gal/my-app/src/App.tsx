import {useState} from 'react';
import './App.css';
import Circle1 from './components/Circle1';
import Circle2 from './components/Circle2'
import Circle3 from './components/Circle3';
import Circle4 from './components/Circle4';

function App() {
  const [backgroundColor1, setBackgroundColor1] = useState<string>('');
  const [backgroundColor2, setBackgroundColor2] = useState<string>('');
  const [backgroundColor3, setBackgroundColor3] = useState<string>('');
  const [backgroundColor4, setBackgroundColor4] = useState<string>('');

  function changeBackgroundColor1(){
    try {
      //make 'if' true / flase for return to default
      setBackgroundColor1('red');
    } catch (error) {
      console.error(error)
    }
  }
  function changeBackgroundColor2(){
    try {
      //make 'if' true / flase for return to default
      setBackgroundColor2('green');
    } catch (error) {
      console.error(error)
    }
  }
  function changeBackgroundColor3(){
    try {
      //make 'if' true / flase for return to default
      setBackgroundColor3('yellow');
    } catch (error) {
      console.error(error)
    }
  }
  function changeBackgroundColor4(){
    try {
      //make 'if' true / flase for return to default
      setBackgroundColor4('blue');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <Circle1  changeBackgroundColor1={changeBackgroundColor1} backgroundColor1={backgroundColor1} />
      <Circle2  changeBackgroundColor2={changeBackgroundColor2} backgroundColor2={backgroundColor2} />
      <Circle3  changeBackgroundColor3={changeBackgroundColor3} backgroundColor3={backgroundColor3} />
      <Circle4  changeBackgroundColor4={changeBackgroundColor4} backgroundColor4={backgroundColor4} />
    </div>
  );
}

export default App;
