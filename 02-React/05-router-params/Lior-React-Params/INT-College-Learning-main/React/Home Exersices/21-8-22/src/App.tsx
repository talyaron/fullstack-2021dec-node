import Breeds from './features/breeds';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';
import Breed from './features/breed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Breeds />} />
        <Route path="/:breedName" element={<Breed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
