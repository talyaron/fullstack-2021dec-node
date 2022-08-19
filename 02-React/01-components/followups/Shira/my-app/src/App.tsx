import React from 'react';
import logo from './logo.svg';
import './view/styles/app.scss';

import Card from './view/components/card/Card'

interface Name {
  title:string,
  text:string,
  id:string
}

const peoples:Name[] = [
{id:'123', title:' Cars' , text: 'Audi,BMW,Mercedes'},
{id:'456', title:' Cities' , text: 'Jerusalem,Yavne,Ashdod'},
{id:'789', title:' Cuntries' , text: 'Israel,Japan,China'}

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      <div className="btn">OK</div>
      {/* <Card title="1"text="One"/>
      <Card title="2"text="Two"/>
      <Card title="3"text="Three"/> */}
      {peoples.map((name:Name)=>{
        return <Card key={name.id} title={name.title} text={name.text}/>
      })}
    
      <div className="btn">OK2</div>

      </header>
    </div>
  );
}

export default App;
