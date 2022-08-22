import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import Home from "./view/pages/home/Home";
import Rose from "./view/pages/rose/Rose";
import Lilly from "./view/pages/lilly/Lilly";
import Main from "./view/pages/main/Main";
import Lotus from "./view/pages/lotus/Lotus";
import UnderRose from "./view/pages/UnderRose/underRose";
import './App.css'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* OUTLET */}

          <Route index element={<Home />} />
          <Route path='rose' element={<Rose />} ></Route>
          <Route path="lilly" element={<Lilly />} ></Route>
          <Route path="lotus" element={<Lotus />} ></Route>
          <Route path="rose/:flowerId" element={<UnderRose />} ></Route>
        </Route>
       
        </Routes>
      
      
    </BrowserRouter>
  );
};


export default App

