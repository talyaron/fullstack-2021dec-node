import { NavLink } from "react-router-dom";
import { SiSuperuser } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="nav">
      <h2 className="heading">Now! Saling Exibition</h2>
      <div className="links">
        <NavLink className="link-decoration" to="/">
          <span className="nav-icon">
            <FaRegUser />
          </span>
          <p>User</p>
        </NavLink>

        <NavLink className="link-decoration" to="/add">
          <span className="nav-icon">
            <SiSuperuser />
          </span>
          <p>Admin</p>
        </NavLink>
      </div>
    </div>
  );
};
