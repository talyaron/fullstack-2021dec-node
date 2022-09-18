import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./features/products/Products";
import SetProduct from "./features/admin/setProduct/SetProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/crud-product" element={<SetProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


