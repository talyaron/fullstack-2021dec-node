import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Name from "./Pages/Name";
import Price from "./Pages/Price";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Route>
        {/* <Route path=":name" element={<Name />} /> */}
        <Route path="product/:name" element={<Name />} />
        <Route path=":price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
