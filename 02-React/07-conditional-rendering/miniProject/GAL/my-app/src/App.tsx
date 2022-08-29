import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./features/LoginRegister/LoginRegister";
import "./style/App.scss";

const App = () => {
  return (
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginRegister />} />
          </Routes>
        </BrowserRouter>
      </header>
  );
};

export default App;
