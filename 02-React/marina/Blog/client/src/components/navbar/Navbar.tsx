import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/blog.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/login/loginSlice";
import { hide } from "./showNavbarSlice";
import axios from "axios";
import { userSelector } from "../../features/login/userSlice";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  const handleLogout = async () => {
    // const { data } = await axios.post("/auth/logout");
    // const { other } = data;
    dispatch(logout());
    dispatch(hide());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <NavLink className="link" to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/?cat=art">
            <h6>ART</h6>
          </NavLink>

          <NavLink className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </NavLink>

          <NavLink className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </NavLink>

          <NavLink className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </NavLink>

          <NavLink className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </NavLink>

          <NavLink className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </NavLink>
          <span>Max</span>
          <span onClick={handleLogout}>Logout</span>
          <span>
            <NavLink className="write" to="/write">
              Write
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};
