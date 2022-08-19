import {
BrowserRouter,
Routes,
Route,}
from  "react-router-dom";

import Home from "./view/pages/home/Home";
import About from "./view/pages/about/About";
import Profile from "./view/pages/profile/Profile";
const App = ()=>{
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element ={<Home/>}>
  <Route path="/about" element ={<About/>}/>
</Route>
</Routes>
</BrowserRouter>
  
  )}

export default App
