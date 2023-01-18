
import {Routes , Route} from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import {Navbar} from "./components/Navbar"
import { StoreProvider } from "./context/StoreContext";

import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <StoreProvider>
    <Navbar/>
   <Container className="mb-4">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Container>
  </StoreProvider>
  )
}

export default App;
