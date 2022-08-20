import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

//components
import { Nav } from "../../components/nav/Nav";

function Main() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;