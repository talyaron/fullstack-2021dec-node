import React from 'react';
import './view/styles/app.scss';
import Card from './view/Components/card/Card'

interface Name {
  tittle:string,
  text:string,
  id:string
}

const names:Name[]= [
   {id:'1234', tittle:"HaRabi", text:"All are redeemed"},
   {id:'2611', tittle:"HaRabi", text:"No Jew will remain in exile"},
   {id:'1408', tittle:"Jasidim", text:"We want Moshiach Now!"}
  ]


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">PUSH HERE</div>
          {names.map((name:Name) => {
             return <Card key={name.id} tittle={name.tittle} text={name.text} />
          })}
          

          <button>RETURN</button>
      </header>
    </div>
  );
}

export default App;
