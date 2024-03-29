import {BrowserRouter,Routes,Route } from "react-router-dom";
// import your route components too

import Main from "./view/pages/main/Main";
import Home from "./view/pages/home/Home";
import About from "./view/pages/about/About";
import Profile from "./view/pages/profile/Profile";

import './view/styles/App.css'

const App = () => {
  return (
  <div> 
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          {/* OUTLET */}

        <Route index element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
        </Route>
        
      </Routes>
   </BrowserRouter>
  

  </div>


  )
}

export default App;




