
import React from 'react';

// import './app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Apartment from './features/apartments/appartInterface';
import { Add } from './features/add/addAp';
import Apartment from './features/apartments/appartInterface';
import { Update } from './features/update/Update';
import Register from './features/register/Register';
import Login from './features/login/Login';
import { LoginUser } from './features/loginUser/LoginUser';
// import LoginUser from './features/loginUser/LoginUser'
import { Apartments } from './features/apartments/Apartment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="apartments" element={<Apartments />} /> 
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>


    // <div>
    
    //   <Register/>
    //   <LoginUser/>     
    // </div>
  );
}

export default App;