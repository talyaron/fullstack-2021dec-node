import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import moonIcon from "../../assets/icon-moon.svg";
import sunIcon from "../../assets/icon-sun.svg";
import s from "../../assets/s1.png";
import { selectUser, updateUser } from "../../userRedux/userSlice";
import { disabbleUser } from "../../userRedux/userSlice";
import axios from "axios";
import { changeSearch, selectSearch } from "./serachSlice";

interface NavbarProps {
  setTheme: Function;
  theme: string;
}

export const Navbar = ({ setTheme, theme }: NavbarProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const search = useAppSelector(selectSearch);

  const toggleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleLogout = async () => {
    await axios.post("/api/auth/logout", { user });
    // currentUser as {}:
    localStorage.removeItem("currentUser");
    localStorage.setItem("booleanCurrentUser", JSON.stringify(false));
    navigate("/");
    dispatch(disabbleUser());
  };

  useEffect(() => {
    dispatch(updateUser(user));
    // console.log("dispatch from Navbar:", dispatch(updateUser(user)));
  }, [user.name]);
  // console.log("user from Navbar:", user);

  const handleGoHome = () => {
    navigate("/home");
  };

  const handleSearch = (e: React.FormEvent<Element> | any) => {
    e.preventDefault();
    dispatch(changeSearch(search));
    console.log(search);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="span">marinasocial</span>
        </Link>

        <HouseOutlinedIcon
          style={{ cursor: "pointer" }}
          onClick={handleGoHome}
        />
        {theme === "dark" ? (
          <img
            className="themeModeIcon"
            src={sunIcon}
            alt="icon"
            onClick={toggleDarkMode}
          />
        ) : (
          <img
            className="themeModeIcon"
            src={moonIcon}
            alt="icon"
            onClick={toggleDarkMode}
          />
        )}
        <GridViewOutlinedIcon style={{ cursor: "pointer" }} />

        <form className="search" onSubmit={handleSearch}>
          <button type="submit">
            <SearchOutlinedIcon />
          </button>

          <input
            type="text"
            className="input"
            value={search}
            placeholder="Search..."
            onChange={(e) => dispatch(changeSearch(e.target.value))}
          />
        </form>
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
          <Link to={`/profile/${user.id}`}>
            <img src={user.profilePic} alt="" />
          </Link>

          <Link to={`/profile/${user.id}`} style={{ textDecoration: "none" }}>
            <span className="user">{user.name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
