import React from "react";
import BtnNavBar from "./BtnNavBar";

import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="navBarBox">

            <Link to="/analytics">
                <BtnNavBar name="Analytics" />
            </Link>


            <Link to="/dashboard">
                <BtnNavBar name="Dashboard" />
            </Link>

            <Link to="/">
                <BtnNavBar name="Main" />
            </Link>

        </div>

    );
};