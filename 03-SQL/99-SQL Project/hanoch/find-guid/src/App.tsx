import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from './features/components/Login';
import { RegGuide } from './features/components/RegGuide';
import { Register } from './features/components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/guide-register' element={<RegGuide/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
