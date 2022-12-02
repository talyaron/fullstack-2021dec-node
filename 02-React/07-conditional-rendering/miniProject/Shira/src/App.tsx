import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { facts } from "./data/Data";
import { Page404 } from "./features/404/404";
import { Login } from "./features/login/Login";
import { FactsList } from "./features/factsList/FactsList";
import { Fact } from "./features/fact/Fact";



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="list" element={<FactsList facts={facts} />} />
          <Route path="fact/:id" element={<Fact facts={facts} />} />
          <Route path="*" element={<Page404 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
