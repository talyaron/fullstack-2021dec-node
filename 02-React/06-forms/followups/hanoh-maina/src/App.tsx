import  {useState,ChangeEvent} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('red')
  const [size, setSize] = useState<string>('50%');

  function handleChangeSize(ev:any) {
    try {
      setSize(ev.target.value + '%');
    } catch (error) {
      console.error(error);
    }
  }

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
  return (
    <div className="App" style={{backgroundColor:backgroundColor}}>
     
        <input type="text" name="" id="" onChange={handleWrite}/>
        <input type='color' onChange={handleBackgroundColor}/>
        <input type="range" onChange={handleChangeSize}/>
        <p>{text}</p>
        <div className='bar' style={{width:size}}></div>
      
    </div>
  );
}

export default App;
