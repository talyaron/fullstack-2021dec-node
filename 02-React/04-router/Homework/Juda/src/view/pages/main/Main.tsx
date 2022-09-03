import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

//components


function Main() {
  return (
    <div>
 <NavBar />
 
 <Outlet />
 </div>
  );
}

export default Main;