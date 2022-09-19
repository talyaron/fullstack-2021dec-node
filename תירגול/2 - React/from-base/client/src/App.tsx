import { BrowserRouter, Routes, Route } from "react-router-dom";
import Louyt from "./Louyt";
import HomePage from "./View/Pages/HomePage";
import MainPage from "./View/Pages/MainPage";
import ProductInfo from "./View/Pages/ProductInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Louyt />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<MainPage />} />
          <Route path=":id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
