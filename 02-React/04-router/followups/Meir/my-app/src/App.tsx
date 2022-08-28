import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import  { Home }  from "./view/pages/home/Home";
import  { About }  from "./view/pages/about/About";

const App = () => {
  return (
  <div> 
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />}>
        <Route path="/about" element={<About />}>
      </Routes>

   </BrowserRouter>
  

  </div>


  )
}

export default App




