import { useEffect, useState } from "react";
import "./styles/app.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Page404 } from "./features/404/404";
import { Login } from "./features/login/Login";
import { Register } from "./features/register/Register";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./features/home/Home";
import { Leftbar } from "./components/leftbar/Leftbar";
import { Rightbar } from "./components/rightbar/Rightbar";
import { Profile } from "./features/profile/Profile";
import { selectDarkMode } from "./themeRedux/themeSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectUser, updateUser } from "./userRedux/userSlice";
import { selectCurrentUser } from "./userRedux/userSlice";
import axios from "axios";
import useLocalStorage from "use-local-storage";

function App() {
  const dispatch = useAppDispatch();
  // DARK MODE TOGGLING
  const darkMode = useAppSelector(selectDarkMode);
  // const [themeMode, setThemeMode] = useState(
  //   //@ts-ignore
  //   JSON.parse(localStorage.getItem("darkMode")) || false
  // );

  // BLOCKING UNSIGNED USER & AUTO REDIRECTING TO THE LOGIN PAGE
  // const currentUser = useAppSelector(selectCurrentUser);
  const currentUser = true;
  const ProtectedRoute = ({ children }: any) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // const ProtectedRoute = ({ children }: any) => {
  //   if (currentUser === false) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };


  
  // // GET USER BY COOKIE:
  const getUserByCookie = async () => {
    try {
      const { data } = await axios.get("/auth/user-by-cookie");
      const { userCookie, decodedCookie } = data;
      if (!userCookie || !decodedCookie)
        throw new Error("userCookie not found");

      // console.log("Cookie from getUserByCookie:", data.decodedCookie);
      dispatch(updateUser(data.decodedCookie));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUserByCookie();
  }, []);

  
  // APP STRUCTURE: (ADDING OUTLET BECAUSE OF USING TWO SIDE BARS)
  const Layout = () => {
    return (
      <div className={`app ${darkMode ? "darkMode" : ""}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div className={`home ${darkMode ? "darkMode" : ""}`}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            // OUTLET
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
          {/* END OUTLET */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
