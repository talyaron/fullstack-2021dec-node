import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./view/pages/main/Main";
import Home from "./view/pages/home/Home";
import Tickets from "./view/pages/tickets/Tickets";
import Ticket from "./view/pages/ticket/Ticket";

import "./view/styles/app.scss";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* OUTLET */}

          <Route index element={<Home />} />
          <Route path="tickets" element={<Tickets />}></Route>

          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;