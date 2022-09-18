import React from "react";
import {Link } from "react-router-dom"

export const UserNav = () => {
    return (
        <div className="navBar">
            <Link to="/">
                <div className="link">Browse</div>{" "}
            </Link>
            <Link to="userCart">
                <div className="link">Cart</div>{" "}
            </Link>
            <Link to="adminLogin">
                <div className="link">Admin Login</div>{" "}
            </Link>
        </div>
    );
}