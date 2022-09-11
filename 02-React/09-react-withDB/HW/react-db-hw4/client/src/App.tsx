import React, { useState } from "react";
import "./styles/App.scss";
import "./features/products/ProductCard.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./features/products/Products";
import { SetProduct } from "./features/admin/setProduct/SetProduct";
import { UpdateProduct } from "./features/admin/updateProduct/UpdateProduct";
import { NavBar } from './components/navBar/NavBar'
import { Page404 } from './features/404/404'




const App = () => {
  const [showAddPopup, setShowAddPopup] = useState<boolean>(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState<boolean>(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavBar />
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Products
                setShowAddPopup={setShowAddPopup}
                showAddPopup={showAddPopup}
                showUpdatePopup={showUpdatePopup}
                setShowUpdatePopup={setShowUpdatePopup}
             
              />
            }
          />

          <Route
            path="/add"
            element={<SetProduct setShowAddPopup={setShowAddPopup} />}
          />
         
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
