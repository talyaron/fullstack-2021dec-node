import { NavLink } from "react-router-dom";
import logo from "../../img/blog4.png";

export const Footer = () => {

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  return (
    <footer>
      <NavLink className="link" to="/">
        <div className="logo">
          <img src={logo} alt="logo" onClick={goToTop} />
        </div>
      </NavLink>
      <span>
        Made with 💖and <b>React.TS</b>.{" "}
      </span>
    </footer>
  );
};
