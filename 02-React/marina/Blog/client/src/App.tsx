import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/home/Home";
import { Register } from "./features/register/Register";
import { Login } from "./features/login/Login";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Single } from "./features/single/Single";
import { Write } from "./features/write/Write";
import { useAppSelector } from "./app/hooks";
import { isShowingNavbarSelector } from "./components/navbar/showNavbarSlice";

function App() {
  const navbarSelector = useAppSelector(isShowingNavbarSelector);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          {navbarSelector && (
            <nav>
              <Navbar />
            </nav>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Single />} />
            <Route path="/write" element={<Write />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {navbarSelector && (
            <nav>
              <Footer />
            </nav>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
