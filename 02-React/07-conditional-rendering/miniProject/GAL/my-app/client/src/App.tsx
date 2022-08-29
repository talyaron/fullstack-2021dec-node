import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./features/LoginRegister/LoginRegister";
import PersonalFacts from "./features/personalFacts/PersonalFacts";
import "./style/App.scss";

const App = () => {
  return (
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginRegister />} />
            <Route path="/PersonalFacts" element={<PersonalFacts />} />
          </Routes>
        </BrowserRouter>
      </header>
  );
};

export default App;
