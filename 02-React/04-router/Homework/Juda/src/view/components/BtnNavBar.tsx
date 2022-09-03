import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import React from "react";



const BtnNavBar = ({name}:any) => {
    
    return (
        <div className="navBarBtn">
       {name}
        
        </div>
    );
}

export default BtnNavBar;