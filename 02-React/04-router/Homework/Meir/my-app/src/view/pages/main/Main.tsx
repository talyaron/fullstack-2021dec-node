import { Outlet } from "react-router-dom";

//components
import { Nav } from "../../components/nav/Nav";

function Main() {
  return (
    <div>
      
      <Outlet />
      <Nav />
    </div>
  );
}

export default Main;