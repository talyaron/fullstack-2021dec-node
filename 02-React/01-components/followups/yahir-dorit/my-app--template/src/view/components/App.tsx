import React from 'react';
import './view/styles/app.scss';
import Card from "./card/Card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="wrapper">
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
          <Card src="https://i.pinimg.com/236x/a0/2f/55/a02f55bf6a40577cc1ab5f059f32dd48.jpg"/>
        </div>
      </header>
    </div>
  );
}
export default App