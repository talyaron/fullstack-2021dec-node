import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDarkMode, toggleTheme } from "../../themeRedux/themeSlice";
import { selectUser, updateUser } from "../../userRedux/userSlice";
import { disabbleUser } from "../../userRedux/userSlice";
import axios from "axios";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode);
  const user = useAppSelector(selectUser);
  // console.log("useAppSelector(selectUser) from Navbar is :", useAppSelector(selectUser));

  const handleLogout = async () => {
    await axios.post("/auth/logout", { user });
    // currentUser as {}:
    localStorage.removeItem("currentUser");
    localStorage.setItem("booleanCurrentUser", JSON.stringify(false));
    navigate("/login");
    dispatch(disabbleUser());
  };

  useEffect(() => {
    dispatch(updateUser(user));
    // console.log("dispatch from Navbar:", dispatch(updateUser(user)));
  }, [user.name]);
  // console.log("user from Navbar:", user);

  const handleLeevePage = () => {
    navigate("/");
  };

  return (
    <div className={`navbar ${darkMode ? "darkMode" : ""}`}>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className={`span ${darkMode ? "darkMode" : ""}`}>
            marinasocial
          </span>
        </Link>

        <HouseOutlinedIcon
          style={{ cursor: "pointer" }}
          onClick={handleLeevePage}
        />
        {darkMode ? (
          <img
            className="themeModeIcon"
            src={sunIcon}
            alt="icon"
            onClick={() => dispatch(toggleTheme())}
          />
        ) : (
          <img
            className="themeModeIcon"
            src={moonIcon}
            alt="icon"
            onClick={() => dispatch(toggleTheme())}
          />
        )}
        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />
        <div className={`search ${darkMode ? "darkMode" : ""}`}>
          <SearchOutlinedIcon />
          <input
            type="text"
            className={`input ${darkMode ? "darkMode" : ""}`}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon style={{ cursor: "pointer" }} />
        <EmailOutlinedIcon style={{ cursor: "pointer" }} />
        <NotificationsOutlinedIcon />
        <LogoutOutlinedIcon
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        />
        <div className="user">
          {/* <Link to="/profile/4"> */}
          <Link to={`/profile/${user.id}`}>
            {/* <img src={avatarImg} alt="user" /> */}
            <img src={user.profilePic} alt="" />
          </Link>
          <span>{user.name}</span>
        </div>
      </div>
    </div>
  );
};
