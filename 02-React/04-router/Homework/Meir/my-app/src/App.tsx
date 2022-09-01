import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import Main from "./view/pages/main/Main";
import Home from "./view/pages/home/Home";
import Products from "./view/pages/products/Products";
import Profile from "./view/pages/profile/Profile";
import BabaSali from "./view/pages/babaSali/BabaSali";

import './view/styles/app.scss'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* OUTLET */}

          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="babaSali" element={<BabaSali />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
