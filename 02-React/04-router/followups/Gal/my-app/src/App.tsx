import Card from "./view/components/card/Card";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/components/home/Home';
import Outside from './view/components/outside/Outside';
import './App.css';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Outside" element={<Outside/>} />
          <Route path="/Card" element={<Card text={""} title={""}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
