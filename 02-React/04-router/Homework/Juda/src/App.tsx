import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.scss"
import Dashboard from "./view/pages/dashboard/Dashboard";
import Page404 from "./view/pages/404/404";
import Main from "./view/pages/main/Main";
import Analytics from "./view/pages/analytics/Analytics";

const App = () => {





  return (
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Main />}>
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='analytics' element={<Analytics />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
