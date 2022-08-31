import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { FactsList } from "./features/factsList/FactsList";
import { Fact } from "./features/fact/Fact";
import { Page404 } from "./features/404/404";
// import { OptionList } from "./features/optionList/OptionList";
import "./styles/App.scss";
import { FactProps } from "./features/fact/factModel";



function uid():string{
  return `${Math.floor(Math.random() * 10000000000)}`
}

export const facts: FactProps[] = [
  {
    src: "https://static.dw.com/image/45665028_303.jpg",
    text: "Fact about Elephants",
    id: uid(),
    options: {
      true: {
        text: "If an Elephant dies, it’s family members take very good care of the bones",
        id: uid(),
        src: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KT2JHPPZCJECNIGX44RUBOTOMM.jpeg",
      },
      false: {
        text: "The elephants never dies",
        id: uid(),
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/b4/65/jumbo-the-elephant-monument.jpg?w=1200&h=1200&s=1",
      },
    },
  },
  {
    src: "https://static.dw.com/image/57327077_303.jpg",
    text: "Fact about Mosquitos",
    id: uid(),
    options: {
      true: {
        text: "Mosquitoes spend their first 10 days in water",
        src: "https://media.istockphoto.com/photos/black-and-white-spotted-mosquito-on-the-surface-of-liquid-picture-id157316301?k=20&m=157316301&s=612x612&w=0&h=kAjrJhksZcbBRDh6S9tbLyKI9Zb5XpZaBSSdmAsksmE=",
        id: uid(),
      },
      false: {
        text: "Mosquitoes are not the world’s deadliest creatures",
        src: "https://www.rentokil.co.uk/blog/wp-content/uploads/2018/11/facts-about-mosquitoes-1.jpg",
        id: uid(),
      },
    },
  },
  {
    src: "https://www.worldwidepest.com/wp-content/uploads/2020/01/scorpions.jpg",
    text: "Fact about Scorpions",
    id: uid(),
    options: {
      true: {
        text: "Scorpions Were Around When Dinosaurs Roamed The Earth",
        src: "https://a-z-animals.com/media/2018/09/Scorpion-on-sand.jpg",
        id: uid(),
      },
      false: {
        text: "Scorpions Have Bones",
        src: "https://a-z-animals.com/media/2021/08/flat-rock-scorpion-on-hand-picture-id1294570204.jpg",
        id: uid(),
      },
    },
  },
  {
    src: "https://assets3.thrillist.com/v1/image/2498980/1584x1026/scale;webp=auto;jpeg_quality=60.jpg",
    text: "Fact about Jiraphes",
    id: uid(),
    options: {
      true: {
        text: "Giraffe only drink once every few days",
        src: "https://africafreak.com/wp-content/uploads/2019/09/giraffe-drinking.jpg",
        id: uid(),
      },
      false: {
        text: "Two giraffe have the same coat pattern",
        src: "https://www.thefactsite.com/wp-content/uploads/2016/01/giraffes-in-love.jpg",
        id: uid(),
      },
    },
  },
];




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
