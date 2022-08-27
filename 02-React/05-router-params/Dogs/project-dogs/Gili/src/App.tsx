import './App.css';
import Breeds from './featuers/breeds';
import Breed from './featuers/breed';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from './featuers/404';

function App() {
	return (
		<BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Breeds />} />
        <Route path="/breed/:breed" element={<Breed />} />
      </Routes>
    </BrowserRouter>
	);
}

export default App;
