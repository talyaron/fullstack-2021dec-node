import React from 'react';

import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './features/LoginRegister/Login';
import LoginRegister from './features/LoginRegister/LoginRegister';
import Register from './features/LoginRegister/Register';
import GameBoard from './components/Game/GameBoard';


const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<GameBoard />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
