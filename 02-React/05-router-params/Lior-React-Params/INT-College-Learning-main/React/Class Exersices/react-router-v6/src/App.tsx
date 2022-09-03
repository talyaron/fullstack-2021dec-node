import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.scss';

import Main from "./views/pages/main/Main";

import Home from "./views/pages/home/Home";
import About from "./views/pages/about/About";
import Faq from "./views/pages/faq/Faq";
import Contact from "./views/pages/contact/Contact";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
