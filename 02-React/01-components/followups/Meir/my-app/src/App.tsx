import React from 'react';
import './views/styles/app.scss';
import Card from './views/Components/card/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="btn">PUSH HERE</div>
          <Card text='a' tittle='here'/>
          <Card text='b' tittle='is'/>
          <Card text='c' tittle='comming'/>
          <Card text='d' tittle='the'/>
          <Card text='e' tittle='gueula'/>
          <Card text='f' tittle='amiti'/>
          <Card text='g' tittle='vehashelema'/>
          <button>RETURN</button>
      </header>
    </div>
  );
}

export default App;
