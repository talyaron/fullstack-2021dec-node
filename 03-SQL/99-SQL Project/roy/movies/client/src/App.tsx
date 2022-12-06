import React from 'react';

import './App.css';
import Login from './features/login/login';
import Register from './features/register/Register';
import HomePage from './features/homePage/homepage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResult from './features/homePage/searchByName/searchResult';
import PresentFav from './features/homePage/addToFav/presentFav';

function App() {
  return (
 <BrowserRouter>
    <Routes>
    <Route index element={<Login/>}/>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/homepage' element={<HomePage/>}></Route>
    <Route path="/searchResult" element={<SearchResult/>}></Route>
    <Route path="/presentFav" element={<PresentFav/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
