import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch ,useAppSelector} from './app/hooks';
import {changeText ,textSelector } from './features/counter/text/textSlice1'


function App() {
  return (
   <div className='App'>
    <Input/>
    <Output/>

    </div>
  );
}



export default App;


function Input(){
  const dispatch = useAppDispatch();
  function handleText(ev:any){
  dispatch(changeText(ev.target.value));
  }

  return(
    <div>
      <input type="text" onChange={handleText}/>
    </div>
  )
}

function Output(){
  const text = useAppSelector(textSelector)
  return <div>{text.length>0?text:"Text here"}</div>;

}
