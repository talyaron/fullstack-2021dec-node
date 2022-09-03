import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Page404 } from "./features/404/404";
import Login from "./features/LoginRegister/Login";
import { FactProps } from "./features/personalFacts/factModel";
import { PersonalFacts } from "./features/personalFacts/PersonalFacts";
import { FactsList } from "./features/factList/FactsList";
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
    options: [{src: "https://cdn-wp.thesportsrush.com/2021/11/2d7c33db-untitled-design-5.jpg",
    text: "The referee tossed a jump ball after every basket in basketball until 1937.",
    id: `true`,},
    {src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
    text: "Kareem Abdul-Jabbar, the NBA's all-time leading scorer (38,387 points), collects rugs.",
    id: `true`},
    {src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Wilt_Chamberlain3.jpg",
    text: "Basketball legend Wilt Chamberlain never fouled out of a game.",
    id: `true`},
    {src: "https://bruinsbasketball.com.au/wp-content/uploads/2021/02/Pickup-basketball-game.jpg",
    text: "Basketball is the most popular sport in the us.",
    id: `false`}
    ]
  },
  //RealMadrid
  {
    src:
      "https://upload.wikimedia.org/wikipedia/he/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png", //{RealMadrid}
    text: "Fact about Real Madrid",
    id: uid(),
    options:[{src: "https://cdn-wp.thesportsrush.com/2021/11/2d7c33db-untitled-design-5.jpg",
    text: "The referee tossed a jump ball after every basket in basketball until 1937.",
    id: `true`,},
    {src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
    text: "Kareem Abdul-Jabbar, the NBA's all-time leading scorer (38,387 points), collects rugs.",
    id: `true`},
    {src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Wilt_Chamberlain3.jpg",
    text: "Basketball legend Wilt Chamberlain never fouled out of a game.",
    id: `true`},
    {src: "https://bruinsbasketball.com.au/wp-content/uploads/2021/02/Pickup-basketball-game.jpg",
    text: "Basketball is the most popular sport in the us.",
    id: `false`}
    ]
    },

  //Atletico
  {
    src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png", //{Athletic}
    text: "Fact about Athletico Madrid",
    id: uid(),
   options:[{src: "https://cdn-wp.thesportsrush.com/2021/11/2d7c33db-untitled-design-5.jpg",
    text: "The referee tossed a jump ball after every basket in basketball until 1937.",
    id: `true`,},
    {src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
    text: "Kareem Abdul-Jabbar, the NBA's all-time leading scorer (38,387 points), collects rugs.",
    id: `true`},
    {src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Wilt_Chamberlain3.jpg",
    text: "Basketball legend Wilt Chamberlain never fouled out of a game.",
    id: `true`},
    {src: "https://bruinsbasketball.com.au/wp-content/uploads/2021/02/Pickup-basketball-game.jpg",
    text: "Basketball is the most popular sport in the us.",
    id: `false`}
    ]
    },

  //Sevilla
  {
    src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png", //{Sevilla},
    text: "Fact about Sevilla",
    id: uid(),
   options:[{src: "https://cdn-wp.thesportsrush.com/2021/11/2d7c33db-untitled-design-5.jpg",
    text: "The referee tossed a jump ball after every basket in basketball until 1937.",
    id: `true`,},
    {src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
    text: "Kareem Abdul-Jabbar, the NBA's all-time leading scorer (38,387 points), collects rugs.",
    id: `true`},
    {src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Wilt_Chamberlain3.jpg",
    text: "Basketball legend Wilt Chamberlain never fouled out of a game.",
    id: `true`},
    {src: "https://bruinsbasketball.com.au/wp-content/uploads/2021/02/Pickup-basketball-game.jpg",
    text: "Basketball is the most popular sport in the us.",
    id: `false`}
    ]
  },
];

const App = () => {
  return (
    <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="FactList" element={<FactsList facts={facts} />} />
          <Route
            path="PersonalFacts/:id"
            element={<PersonalFacts facts={facts} />}
          />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default App;
