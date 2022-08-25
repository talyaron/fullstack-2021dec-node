import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">

      <Link to="/">
        <div className="link">Dashboard</div>{" "}
      </Link>

      <Link to="/Analytics">
        <div className="link">Analytics</div>{" "}
      </Link>

      <Link to="/Products">
        <div className="link">Products</div>
      </Link>
      
    </div>
  );
};
