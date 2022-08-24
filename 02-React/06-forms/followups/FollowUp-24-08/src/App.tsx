import  {useState,ChangeEvent} from 'react';

import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('red')
  const [barWidth, setBarWidth] = useState<string>('')
  const [barAngle, setBarAngle] = useState<string>('')



  function handleWrite(ev:any){
    try {
      setText(ev.target.value);
    } catch (error) {
      console.error(error)
    }
  }

  function handleBackgroundColor(ev:ChangeEvent<HTMLInputElement>){
    try {
      setBackgroundColor(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }
  
  function handleChangeWidth(ev:ChangeEvent<HTMLInputElement>){
    try {
      setBarWidth(ev.target.value)
      console.log(barWidth);
    } catch (error) {
      console.error(error)
    }
  }
  
  function handleChangeAngle(ev:ChangeEvent<HTMLInputElement>){
    try {
      setBarAngle(ev.target.value + "deg")
      console.log(barAngle);
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className="App" style={{backgroundColor:backgroundColor}}>
     
        <input type="text" name="" id="" onChange={handleWrite}/>
        <input type='color' onChange={handleBackgroundColor}/>
      <input type="range" min="0" max="100" step="10" onChange={handleChangeWidth} />
      <input type="range" min="0" max="100" step="10" onChange={handleChangeAngle} />

      <p>{text}</p>
      <div className="wrapper">
        <div className='bar' style={{ width: `${barWidth}vw`, rotate: `${barAngle}deg` }}></div>
        </div>
    </div>
  );
}


export default App;
