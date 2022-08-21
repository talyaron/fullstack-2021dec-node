import { Nav } from "./nav/Nav";
import {Outlet} from "react-router-dom";


function Main() {
  return (
    <div>
      <Outlet />
      <Nav />
    </div>
  );
}

export default Main;
