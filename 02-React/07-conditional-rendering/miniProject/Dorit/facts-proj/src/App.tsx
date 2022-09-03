import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/login/Login";
import { FactsList } from "./features/factsList/FactsList";
import { Fact } from "./features/fact/Fact";
import { Page404 } from "./features/404/404";
import "./styles/App.scss";
import { FactProps } from "./features/fact/factModel";
import axios from "axios";



function uid():string{
  return `${Math.round(Math.random() * 10000000)}`
}

// export const myFacts: FactProps[] = [
  // {
  //   src: "https://static.dw.com/image/45665028_303.jpg",
  //   text: "First fact about me:drumming",
  //   id: uid(),
  //   isTrue:"no",
  // },
  // {
  //   src: "https://static.dw.com/image/57327077_303.jpg",
  //   text: "Second fact about me:motocycling",
  //   id: uid(),
  //   isTrue:"yes",
  // },
  // {
  //   src: "https://www.worldwidepest.com/wp-content/uploads/2020/01/scorpions.jpg",
  //   text: "Third fact about me:running",
  //   id: uid(),
  //   isTrue:"yes",
  // },
  // {
  //   src: "https://assets3.thrillist.com/v1/image/2498980/1584x1026/scale;webp=auto;jpeg_quality=60.jpg",
  //   text: "fourth fact about me:dogpsychologist",
  //   id: uid(),
  //   isTrue:"no"
  // },
// ];

function App() {
  const [myFacts, setMyFacts] = useState<Array<FactProps>>([])

  useEffect(()=>{
   (async ()=>{
    const {data} = await axios.get("/fact/get-all")
    console.log(data)
    const {ok, facts} = data
    setMyFacts(facts)
   })()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="list" element={<FactsList facts={myFacts}/>} />
          <Route path="fact/:id" element={<Fact facts={myFacts}/>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
