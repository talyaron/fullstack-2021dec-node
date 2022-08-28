import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="link">Home</div>{" "}
      </Link>
      <Link to="/about">
        <div className="link">About</div>{" "}
      </Link>
      <Link to="/profile">
        <div className="link">Profile</div>
      </Link>
    </div>
  );
};
