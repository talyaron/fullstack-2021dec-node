import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MyProducts from './view/pages/MyProducts';
import Analytics from './view/pages/Analytics';
import Manage from './view/pages/Manage';
import Dashboard from './view/pages/Dashboard';
import Main from './view/pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} >
        {/* OUTLET */}
      <Route index element={<Manage/>} />
      <Route path='/MyProducts' element={<MyProducts/>} />
      <Route path='/Analytics' element={<Analytics/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
