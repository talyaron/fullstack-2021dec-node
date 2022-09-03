import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
const Main = () => {
    return (
        <div className="main conatiner">
            <Outlet />
            <Navbar />
        </div>
    );
}

export default Main;