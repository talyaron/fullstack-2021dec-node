import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './view/components/category';
import Breed from './view/components/breed';




function App() {
  return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Category/>} />
          <Route path='/breeds/:breed' element={<Breed/>} />
        </Routes>
        </BrowserRouter>
        )
}

export default App;
