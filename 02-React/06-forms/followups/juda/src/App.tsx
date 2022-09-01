import { useState, ChangeEvent } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('red')
  const [barWidht, setbarWidht] = useState<string>('50%')
  const [barRotate, setbarRotate] = useState<string>('0deg')

  function handleBarSize(ev: any) {
    try {
      console.log(ev.target.value);
      setbarWidht(ev.target.value + '%')




    } catch (error) {
      console.error(error)
    }
  }
  function handleBarRotate(ev: any) {
    try {

      console.log(ev.target.value);
      setbarRotate(ev.target.value + 'deg')


    } catch (error) {
      console.error(error)
    }
  }

  function handleWrite(ev: any) {
    try {
      setText(ev.target.value);
    } catch (error) {
      console.error(error)
    }
  }

  function handleBackgroundColor(ev: ChangeEvent<HTMLInputElement>) {
    try {
      setBackgroundColor(ev.target.value)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>

      <input type="text" name="" id="" onChange={handleWrite} />
      <input type='color' onChange={handleBackgroundColor} />
      <input type="range" onChange={handleBarSize} />

      <p>{text}</p>
      <div className='bar' style={{ width: barWidht , rotate:barRotate}}></div>
      <input type="range" min={-180} max={180} onChange={handleBarRotate} />

    </div>
  );
}

export default App;
