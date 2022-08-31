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
    // id: "1",
    id: uid(),
    options:{
      true:{
        text:"fhdfhdfhdfh",
        id:'dsgdfhdfjfjfgjturuyrt',
        src:'https://artprojectsforkids.org/wp-content/uploads/2020/08/Elephant-recolor.jpg'
      },
      false:{
        text:"fhdfhdfhdfh",
        id:'dsgdfhdfjfjfgjturuyrt',
        src:'https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg'
      }
    }
  },
  // {
  //   src: "https://static.dw.com/image/57327077_303.jpg",
  //   text: "Fact about Mosquitos",
  //   // id: "2",
  //   id: uid(),
  // },
  // {
  //   src: "https://www.worldwidepest.com/wp-content/uploads/2020/01/scorpions.jpg",
  //   text: "Fact about Scorpions",
  //   // id: "3",
  //   id: uid(),
  // },
  // {
  //   src: "https://assets3.thrillist.com/v1/image/2498980/1584x1026/scale;webp=auto;jpeg_quality=60.jpg",
  //   text: "Fact about Jiraphes",
  //   // id: "4",
  //   id: uid(),
  // },
];


// export const elephant: FactProps[] = [
//   {
//     src: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KT2JHPPZCJECNIGX44RUBOTOMM.jpeg",
//     text: "If an Elephant dies, it’s family members take very good care of the bones",
//     id: uid(),
//   },
//   {
//     src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/b4/65/jumbo-the-elephant-monument.jpg?w=1200&h=1200&s=1",
//     text: "The elephants never dies",
//     id: uid(),
//   },
// ];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="list" element={<FactsList facts={facts} />} />
          <Route path="fact/:id" element={<Fact facts={facts} />} />
          {/* <Route path="option" element={<OptionList facts={facts} />} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
