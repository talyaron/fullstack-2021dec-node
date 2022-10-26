import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './features/LoginRegister/Login';
import LoginRegister from './features/LoginRegister/LoginRegister';
import Register from './features/LoginRegister/Register';
import GameBoard from './components/Game/GameBoard';
import HumanBody from './components/Game/HumanBody';
import DanceFloor from './components/Game/DanceFloor';
import FoodIsLife from './components/Game/FoodIsLife';
import TheRealLife from './components/Game/TheRealLife';

const App = () => {

const [wrongAnswers, setWrongAnswers] = useState(0)

function updateCounter(){
  setWrongAnswers(wrongAnswers+1)
}

  return (

    <BrowserRouter>
      <div className="navBar">
        <Link to="/game"> <img style={{ height: "5rem" }} src="https://www.svgrepo.com/show/67522/back.svg" alt="" /></Link>
        <h1>wrong answer = {wrongAnswers}</h1>
      </div>
      <Routes>

        <Route path="/" element={<LoginRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/game/humanBody" element={<HumanBody />} />
        <Route path="/game/danceFloor" element={<DanceFloor />} />
        <Route path="/game/foodIsLife" element={<FoodIsLife />} />
        <Route path="/game/theRealLife" element={<TheRealLife counterFunction={updateCounter}/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
