import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page404 } from "./features/404/404";
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
      "https://upload.wikimedia.org/wikipedia/he/thumb/a/aa/Fc_barcelona.svg/1200px-Fc_barcelona.svg.png",
    text: "Fact about Fc Barcelona",
    // id: "1",
    id: uid(),
    options: [
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxTvUoigeuHKqV2e7t3UUk9W7zTbmqnWDow&usqp=CAU",
        text:
          "Fc Barcelona was born in 1899.",
        id: `true`,
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyPp0W4hlw8GlX_1s9vCoNzC-gVIZeEKzlQ&usqp=CAU",
        text:
          "Fc Barcelona is the 1st spanish football club.",
        id: `false`,
      },
    ],
  },
  //RealMadrid
  {
    src:
      "https://upload.wikimedia.org/wikipedia/he/thumb/c/c7/Logo_Real_Madrid.svg/1200px-Logo_Real_Madrid.svg.png",
    text: "Fact about Real Madrid",
    id: uid(),
    options: [
      {
        src:
          "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203427034513&ssbinary=true",
        text:
          "Real Madrid won the most amount of wins in the spanish cup.",
        id: `false`,
      },
      {
        src:
          "https://ynet-images1.yit.co.il/picserver5/crop_images/2022/05/30/H1Ix7a11dc/H1Ix7a11dc_0_0_1024_685_0_x-large.jpg",
        text:
          "Real Madrid won the most amount of wins in the UCL.",
        id: `true`,
      },
    ],
  },

  //Liverpool
  {
    src:
      "https://1.bp.blogspot.com/-1JI9IoCHBu0/Xs1CCt4dJ4I/AAAAAAAAQQE/5S3XKBuAetI5-KUtfJjjXbBJr2T4S-oxgCLcBGAsYHQ/s1600/Liverpool.png",
    text: "Fact about Liverpool",
    id: uid(),
    options: [
      {
        src:
          "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220522123743-03-liverpool-wolves-premier-league-0522.jpg",
        text:
          "Liverpool anthem is 'You Never Walk Alone'.",
        id: `true`,
      },
      {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOdh6ycFJFGMZmb3S2fb6WVVb1xQtZ8qpAYg&usqp=CAU",
        text:
          "Liverpool is the leader of the English Premier League cup.",
        id: `false`,
      },
    ],
  },

  //Man City
  {
    src: "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/66.png",
    text: "Fact about Man City",
    id: uid(),
    options: [
      {
        src:
          "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0168407a10a76ec9/62ea2c90d7f6b63b71d20721/Talent_Factories_Man_City.jpg",
        text:
          "Man City is the current Premier League champions.",
        id: `true`,
      },
      {
        src:
          "https://resources.premierleague.com/photos/2022/08/15/2feb37d2-eef6-4391-a46d-aa215e1f5d5f/MCIDM2223_2.jpg?width=500&height=333",
        text:
          "Man City captain is Phill foden.",
        id: `false`,
      },
    ],
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
};

export default App;
