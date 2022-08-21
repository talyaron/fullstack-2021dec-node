import React from 'react';

import './App.css';
import './view/styles/app.scss';
import Card from './view/components/card/Card';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card text="ESPN"
          src="https://i.pinimg.com/236x/72/8e/7a/728e7a99c429879b41e3737245cfb9ce.jpg"
        />
        <Card text="IN"
          src="https://i.pinimg.com/236x/c7/3e/4f/c73e4f90bb92bfa3a695e977f65a5e64.jpg"
        />
        <Card text="YOUR" 
          src="https://i.pinimg.com/236x/c7/d5/2f/c7d52fcdf12520587aab6e233861efda.jpg"
        />
        <Card text="FACE"
          src="https://i.pinimg.com/236x/76/cb/16/76cb16e2dd5f41064c7eb801442321ef.jpg"
        />
        <Card text="FIRST ON"
          src="https://i.pinimg.com/236x/7b/28/8c/7b288c8404490e630557e918808a76ba.jpg"
        />
        <Card text="NBA"
          src="https://i.pinimg.com/236x/43/48/b8/4348b884e2ec7c9ccd58a2f5e8ff2670.jpg"
        />
   
      </header>
    </div>
  );
}

export default App;



