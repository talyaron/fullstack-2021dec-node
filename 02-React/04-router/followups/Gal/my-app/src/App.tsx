import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./view/Pages/home/Home";
import About from "./view/Pages/about/About";
import Main from "./view/Pages/main/Main";
import Profile from "./view/Pages/profile/Profile";
import Page404 from './view/Pages/404/404';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
