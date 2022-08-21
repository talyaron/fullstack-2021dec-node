import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./view/styles/app.scss";
import Home from "./view/Pages/home/Home";
import Main from "./view/Pages/main/Main";
import Profile from "./view/Pages/profile/Profile";
import Page404 from "./view/Pages/404/404";
import Product from "./view/Pages/product/Product";
import Products from "./view/Pages/products/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />}></Route>

          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
