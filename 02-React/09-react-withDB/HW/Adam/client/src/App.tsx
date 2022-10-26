import React, { useState } from "react";
import "./styles/App.scss";
import "./features/products/ProductCard.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./features/products/Products";
import { SetProduct } from "./features/admin/setProduct/SetProduct";
import { NavBar } from "./components/navBar/NavBar";

const App = () => {
  const [showAddPopup, setShowAddPopup] = useState<boolean>(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState<boolean>(false);
  const [newItemRender, setNewItemRender] = useState<boolean>(false);
  const [updatedItemRender, setUpdatedItemRender] = useState<boolean>(false);
  const [deletedItemRender, setDeletedItemRender] = useState<boolean>(false);

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
                setNewItemRender={setNewItemRender}
                newItemRender={newItemRender}
                setUpdatedItemRender={setUpdatedItemRender}
                updatedItemRender={updatedItemRender}
                setDeletedItemRender={setDeletedItemRender}
                deletedItemRender={deletedItemRender}
              />
            }
          />

          <Route
            path="/add"
            element={
              <SetProduct
                setShowAddPopup={setShowAddPopup}
                setNewItemRender={setNewItemRender}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;