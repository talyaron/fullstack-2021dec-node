import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="link">Home</div>{" "}
      </Link>
      <Link to="/rose">
        <div className="link">Rose</div>{" "}
      </Link>
      <Link to="/lilly">
        <div className="link">Lilly</div>
      </Link>
      <Link to="/lotus">
        <div className="link">Lotus</div>
      </Link>
    </div>
  );
};
