import React from "react";
import { Link } from "react-router-dom";
import briefcase from './briefcase.png';
import analysis from './analysis.png';
import list from './list.png';
import dashboard from "./dashboard.png";
 export const Nav = () => {
    return (
    <div className="nav">
        <div className="manage">
            <img src={briefcase} alt="briefcase" />
         <Link to='/'>
            <div className="link">Manage</div>{" "}
          </Link>
       </div>
        <div className="analytics">
        <img src={analysis} alt="analytics" />
            <Link to='/Analytics'>
             <div className="link">analytics</div>{" "}
            </Link>
        </div>  
        <div className="myProduct">
        <img src={list} alt="list" />
            <Link to='/MyProducts'>
                <div className="link">MyProducts</div>{" "}
             </Link>
        </div> 
        <div className="dashboard">
        <img src={dashboard} alt="dashboard" />
            <Link to='/Dashboard'>
                <div className="link">Dashboard</div>{" "}
            </Link>
         </div>
    </div>);
}
