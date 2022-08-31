import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { FactsList } from "./features/factsList/FactsList";
import { Fact } from "./features/fact/Fact";
import { Page404 } from "./features/404/404";
import { OptionList } from "./features/optionList/OptionList";
import "./styles/App.scss";
import { FactProps } from "./features/fact/factModel";



function uid():string{
  return `${Math.floor(Math.random() * 10000000000)}`
}
export const facts: FactProps[] = [
  {
    src: "https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=360",
    text: "Sport facts",
    id: uid(),
    sons: [{src: "https://cdn-wp.thesportsrush.com/2021/11/2d7c33db-untitled-design-5.jpg",
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
  {
    src: "https://a-z-animals.com/media/2021/01/mammals-400x300.jpg",
    text: "Animals facts",
    id: uid(),
    sons: [{src: "https://kerenagam.co.il/wp-content/uploads/2021/06/Thinking-of-getting-a-cat.png",
    text: "Cats have 32 muscles in each ear.",
    id: `true`,},
    {src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Kareem-Abdul-Jabbar_Lipofsky.jpg",
    text: "Lions sleep about 12 hours each day.",
    id: `false`},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ps8TZRyIWb6SoQdrElDc0BWnkwI9p0TiSQ&usqp=CAU",
    text: "Every dog has a unique nose print with no two alike.",
    id: `true`},
    {src: "https://www.thoughtco.com/thmb/h2Xoum0SQtHv4i9uw2uxZgmc9k4=/2048x1536/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg",
    text: "Starfish do not have a brain.",
    id: `true`}
    ]
  },
  {
    src: "https://empireweekly.com/wp-content/uploads/2022/02/fall-movies-index-1628968089.jpeg",
    text: "Movie facts",
    id: uid(),
    sons: [{src: "https://i.insider.com/5abe4eca42e1cc583d4d9e90?width=800&format=jpeg&auto=webp",
    text: `The cat in "The Godfather" was a stray.`,
    id: `true`,},
    {src: "https://i.insider.com/5abe4eca42e1cc583d4d9e91?width=800&format=jpeg&auto=webp",
    text: `Sean Connery wore a toupee in every "James Bond" movie.`,
    id: `true`},
    {src: "https://static.onecms.io/wp-content/uploads/sites/6/2017/03/sheeranrupertsplit.jpg",
    text: `Ed sheeran was tested to harry potter's ron weasley`,
    id: `false`},
    {src: "https://i.insider.com/5abe4ecd42e1cc583d4d9ea0?width=800&format=jpeg&auto=webp",
    text: `Leonardo DiCaprio really did cut his hand in "Django Unchained".`,
    id: `true`}
    ]
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Collection-national-flags.png/1200px-Collection-national-flags.png",
    text: "Flag facts",
    id: uid(),
    sons: [{src: "https://safety4sea.com/wp-content/uploads/2018/02/denmark-e1519646323215-700x375.jpg",
    text: `Denmark has the oldest flag in the world.`,
    id: `true`,},
    {src: "https://media.13newsnow.com/assets/CCT/images/f11341ce-e640-4b65-b3dc-eaebc8b10b28/f11341ce-e640-4b65-b3dc-eaebc8b10b28_750x422.jpg",
    text: `By Law The USA Burns Thousands of Flags Every Year on June 14th.`,
    id: `true`},
    {src: "https://www.allstarflags.com/inc/files/editor/image/safricaflag.jpg",
    text: `The flag of South Africa has the most colors of any flag in the world.`,
    id: `false`},
    {src: "https://www.storage-r-us.net/wp-content/uploads/2019/12/military-self-storage-american-flags.jpg",
    text: `There have been 27 versions of the American Flag".`,
    id: `true`}
    ]
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="list" element={<FactsList facts={facts}/>} />
          <Route path="fact/:id" element={<Fact facts={facts}/>} />
          <Route path="option" element={<OptionList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
