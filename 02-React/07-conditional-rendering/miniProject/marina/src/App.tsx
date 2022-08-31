import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./features/login/Login"
import { FactsList } from './features/factsList/FactsList';
import { Fact } from './features/fact/Fact'
import { Page404 } from './features/404/404'
import { OptionList } from "./features/optionList/OptionList";
import './styles/App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="list" element={<FactsList />} />
          <Route path="fact:id" element={<Fact />} />
          <Route path="option" element={<OptionList />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
