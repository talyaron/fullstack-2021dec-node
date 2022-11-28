import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FindGuides } from './features/components/rendering/FindGuides';
import { Login } from './features/components/Login';
import { RegGuide } from './features/components/RegGuide';
import { Register } from './features/components/Register';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/guide-register' element={<RegGuide/>}></Route>
        <Route path='/find-guide/*' element={<FindGuides/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
