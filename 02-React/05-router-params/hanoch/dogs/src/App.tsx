import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './view/components/category'




function App() {
  return(
    
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Category/>} />
        </Routes>
        </BrowserRouter>
        )
}

export default App;
