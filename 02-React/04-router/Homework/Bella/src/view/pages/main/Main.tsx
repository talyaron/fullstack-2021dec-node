import { Outlet } from "react-router-dom";

//components
import { Nav } from "../../components/nav/Nav";

function Main() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Main;