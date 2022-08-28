import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Main from "./views/pages/main/main";

import './App.scss';
import Home from "./views/pages/home/Home";
import Cart from "./views/pages/cart/Cart";
import Profile from "./views/pages/profile/Profile";
import BrowseCatalog from "./views/pages/browse-catalog/BrowseCatalog";
import BrowseSubType from "./views/pages/browse-catalog/BrowseSubType";
import BrowseItem from "./views/pages/browse-catalog/BrowseItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tops" element={<BrowseCatalog type="tops"/>} />
          <Route path="bottoms" element={<BrowseCatalog type="bottoms"/>} />
          <Route path="shoes" element={<BrowseCatalog type="shoes"/>} />
          <Route path="socks" element={<BrowseCatalog type="socks"/>} />
          <Route path="jewellery" element={<BrowseCatalog type="jewellery"/>} />
          <Route path="sunglasses" element={<BrowseCatalog type="sunglasses"/>} />
          <Route path="backpacks" element={<BrowseCatalog type="backpacks"/>} />
          <Route path="belts" element={<BrowseCatalog type="belts"/>} />
          <Route path="T-Shirts" element={<BrowseSubType type="T-Shirts" backType="tops"/>} />
          <Route path="Long%20Sleeves" element={<BrowseSubType type="Long Sleeves" backType="tops"/>} />
          <Route path="Sweaters" element={<BrowseSubType type="Sweaters" backType="tops"/>} />
          <Route path="tops/Button%20Down" element={<BrowseSubType type="Button Down" backType="tops"/>} />
          <Route path="tops/Knitwears" element={<BrowseSubType type="Knitwears" backType="tops"/>} />
          <Route path="tops/Jackets" element={<BrowseSubType type="Jackets" backType="tops"/>} />
          <Route path="tops/Hoodies" element={<BrowseSubType type="Hoodies" backType="tops"/>} />
          <Route path="tops/Coats" element={<BrowseSubType type="Coats" backType="tops"/>} />
          <Route path="/T-Shirts/:productId" element={<BrowseItem />}/>
          <Route path="/Long%20Sleeves/:productId" element={<BrowseItem />}/>
          <Route path="/Sweaters/:productId" element={<BrowseItem />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
