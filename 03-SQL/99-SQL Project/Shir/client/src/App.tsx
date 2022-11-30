
import React from 'react';
// import './app.scss';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Apartment from './features/apartments/appartInterface';
// import { Add } from './features/add/addAp';
// import { Apartments } from './features/apartments/Apartment';
// import { Update } from './features/update/Update';
import Register from './features/register/Register';
import Login from './features/login/Login';
import { LoginUser } from './features/loginUser/LoginUser';

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Apartments />} />
    //       <Route path="/add" element={<Add />} />
    //       <Route path="/update/:id" element={<Update />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div>
      {/* <Login /> */}
      <LoginUser/>
      {/* <Register/> */}
      
    </div>
  );
}

export default App;