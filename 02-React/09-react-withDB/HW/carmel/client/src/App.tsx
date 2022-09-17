import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.scss'
import { useState } from 'react';

import { UserPage } from './features/user/userPage';
import { UserCart } from './features/user/userCart';
import { AdminPage } from './features/admin/adminPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserPage />}></Route>
        <Route path='adminLogin' element={<AdminPage/>}></Route>
        <Route path='userCart' element={<UserCart/>}></Route>
        
    </Routes>
  </BrowserRouter>
  );
}

export default App;
