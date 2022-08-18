import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './view/Pages/home/Home';
import About from './view/Pages/about/About';
import Main from './view/Pages/main/Main';
import Profile from './view/Pages/profile/Profile';

function App() {
  return (
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route index element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
