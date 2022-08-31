import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./features/Home/Test";
import LoginRegister from "./features/LoginRegister/LoginRegister";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
