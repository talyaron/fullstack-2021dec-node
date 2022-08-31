import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./features/404/404";
import LoginRegister from "./features/LoginRegister/LoginRegister";
import { FactProps } from "./features/personalFacts/factModel";
import { PersonalFacts } from "./features/personalFacts/PersonalFacts";
import { FactsList } from "./features/factList/FactList";
import "./style/App.scss";
import FcBarcelona from './style/assests/FcBarcelona.png'
import RealMadrid from './style/assests/RealMadrid.png'
import Athletic from './style/assests/AtleticoMadrid.png'
import Sevilla from './style/assests/sevilla.png'

function uid(): string {
  return `${Math.floor(Math.random() * 10000000000)}`;
}
export const facts: FactProps[] = [
  {
    src:{FcBarcelona},
    text: "Fact about Fc Barcelona",
    // id: "1",
    id: uid(),
  },
  {
    src: {RealMadrid},
    text: "Fact about Real Madrid",
    id: uid(),
  },
  {
    src: {Athletic},
    text: "Fact about Athletico Madrid",
    id: uid(),
  },
  {
    src: {Sevilla},
    text: "Fact about Sevilla",
    id: uid(),
  },
];

const App = () => {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/FactList" element={<FactsList facts={facts} />} />
          <Route
            path="/PersonalFacts/:id"
            element={<PersonalFacts facts={facts} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default App;
