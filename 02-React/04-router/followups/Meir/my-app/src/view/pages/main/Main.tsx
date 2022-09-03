import { Outlet } from "react-router-dom";

// components
import { Nav } from "../../Components/nav/Nav";

export const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Main;