import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { SetProducts } from './featurs/admin/SetProducts';
import { Products } from './featurs/user/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/add-product' element={<SetProducts/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
