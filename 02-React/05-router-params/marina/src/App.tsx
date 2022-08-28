import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breeds } from './features/breeds';
import { Breed } from './features/breed';
import { Page404 } from './features/404/404';
import "./styles/app.scss"; 



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Breeds />} />
          <Route path="/breed/:breed" element={<Breed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


