import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

//components
import { Nav } from "./nav/Nav";

function Main() {
  return (
    <div>
     
      <Outlet />
      <Nav />
    </div>
  );
}

export default Main;