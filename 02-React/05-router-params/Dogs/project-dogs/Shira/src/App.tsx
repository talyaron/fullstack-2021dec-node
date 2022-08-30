import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./features/404/404";
import Breeds from "./features/breeds";
import Breed from "./features/breed";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Breeds />} />
        <Route path="/breed/:breed" element={<Breed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
