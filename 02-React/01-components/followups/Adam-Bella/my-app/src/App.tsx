import React from 'react';
import logo from './logo.svg';
import './design/styleGuides/app.scss';
import Card from './design/components/cards/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">OK</div>
        <Card heading='a' tag='This is a tag'/>
        <Card heading='b'tag='This is a tag 2'/>
        <Card heading='c' tag='This is a tag 3'/>
        <Card heading='d' tag='This is a tag'/>
        <Card heading='e' tag='This is a tag'/>
        <button>OK2</button>
      </header>
    </div>
  );
}

export default App;





