import { useState } from "react";

import "./App.scss";
import "./features/products/card.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./features/products/Products";
import SetProduct from "./features/admin/setProduct/SetProduct";

function App() {
  const [deleteItem, setDeleteItem] = useState<boolean>(false);
  const [popUpShown, setPopUpShown] = useState<boolean>(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Products setPopUpShown={setPopUpShown} popUpShown={popUpShown} setDeleteItem={setDeleteItem} deleteItem={deleteItem} />
            }
          />
          <Route
            path="/add-product"
            element={
              <SetProduct
                setPopUpShown={setPopUpShown}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
