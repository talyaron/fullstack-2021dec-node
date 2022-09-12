import React, {useState} from "react";

import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./features/products/Products";
import SetProduct from "./features/admin/setProduct/SetProduct";

function App() {
  const [deleteItem, setDeleteItem] = useState<boolean>(false);

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products setDeleteItem={setDeleteItem} deleteItem={deleteItem} />} />
        <Route path="/add-product" element={<SetProduct />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
