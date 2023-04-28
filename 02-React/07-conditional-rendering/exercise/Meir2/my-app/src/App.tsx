import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './features/test/Test';
import LoginRegister from './features/loginRegister/LoginRegister';


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Test />} /> 
        <Route path='/login' element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
