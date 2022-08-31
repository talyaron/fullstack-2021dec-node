import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Page404 } from "./features/404/404";
import LoginRegister from "./features/LoginRegister/LoginRegister";
import { FactProps, Option } from "./features/personalFacts/factModel";
import { PersonalFacts } from "./features/personalFacts/PersonalFacts";
import { FactsList } from "./features/factList/FactList";
import "./style/App.scss";

function uid(): string {
  return `${Math.floor(Math.random() * 10000000000)}`;
}
export const facts: FactProps[] = [
  //FCB
  {
    src:
      "https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png", //{FcBarcelona}
    text: "Fact about Fc Barcelona",
    // id: "1",
    id: uid(),
    options:{
      true:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      },
      false:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      }
    }
  },
  //RealMadrid
  {
    src:"https://upload.wikimedia.org/wikipedia/he/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png", //{RealMadrid}
    text: "Fact about Real Madrid",
    id: uid(),
    options:{
      true:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      },
      false:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      }
    }
  },
  //Atletico
  {
    src:
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png", //{Athletic}
  text: "Fact about Athletico Madrid",
  id: uid(),
    options:{
      true:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      },
      false:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      }
    }
  },
  //Sevilla
  {
    src: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png', //{Sevilla},
    text: "Fact about Sevilla",
    id: uid(),
    options:{
      true:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      },
      false:{
        text:'FCB is the team that win the most UCL cups',
        id: uid(),
        src:"https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
      }
    }
  },
];

// export const barca: FactProps[] = [
//   src: 'https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png',
//   text: "Was born in 1898",
//   id: uid(),
// ];

export const realMadrid: Option[] = [

];

export const sevilla: Option[] = [

];

export const atletic: Option[] = [

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
            element={<PersonalFacts facts={facts} barca={[]} realMadrid={[]} atletic={[]} sevilla={[]} />}
          />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default App;
