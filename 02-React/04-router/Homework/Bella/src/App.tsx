import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import 'charts.css';

import Main from "./view/pages/main/Main";
import Dashboard from "./view/pages/dashboard/dashboard";
import Analytics from "./view/pages/analytics/analytics";
import Products from "./view/pages/products/products";
import Page404 from "./view/pages/404/404";

import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />}>
          {/* OUTLET */}

          <Route index element={<Dashboard />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
