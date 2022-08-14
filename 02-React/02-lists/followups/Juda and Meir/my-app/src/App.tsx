import React from 'react';
import logo from './logo.svg';
// import './App.css';
import  './view/style/style.scss';
import Card from "./view/components/Card/Card";

interface Joke{
name: string,
text: string,
id: string

}

const jokes:Joke[] = [

    {name: "What’s the best thing about Switzerland?" , text: "I don’t know, but the flag is a big plus.", id: "456df"},
    {name: "Helvetica and Times New Roman walk into a bar." , text: "“Get out of here!” shouts the bartender. “We don’t serve your type.”", id: "fjhjlbn"},
  
];





function App() {
  return (
    <div className="App">
      <header className="App-header">
   <div className='App-header'>
<div className='card'>OK</div>

{jokes.map((joke:Joke)=>{
  return <Card key={joke.id} name={joke.name} text={joke.text} />
})}


   </div>
   
      </header>
    </div>
  );
}

export default App;
