import { Link, Outlet } from "react-router-dom";

const Louyt = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Louyt;
