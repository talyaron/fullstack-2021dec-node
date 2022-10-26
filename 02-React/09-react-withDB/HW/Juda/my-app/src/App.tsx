import React from 'react';
import { BrowserRouter,Link, Routes, Route } from "react-router-dom";


import './App.css';
import Client from './components/Client';
import Main from './components/Main';
import Manager from './components/Manager';

function App() {

  return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/client" element={<Client />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
