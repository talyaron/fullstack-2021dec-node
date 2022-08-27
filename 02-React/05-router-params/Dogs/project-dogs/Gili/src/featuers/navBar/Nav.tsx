import { Link } from "react-router-dom";
import "./nav.scss"

export const Nav = () => {
    return( 
    <div className="nav">
        <div className="nav__links">
        <Link to="/"><div className="nav__links__item">Home</div>{" "} </Link>
        <div className="nav__links__item">Search breed</div>
        </div>
        <h1 className="header">Breeds</h1>
    </div>
    )
}