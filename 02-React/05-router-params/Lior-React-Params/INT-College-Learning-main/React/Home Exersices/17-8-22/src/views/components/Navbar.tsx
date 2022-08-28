import { Link } from "react-router-dom";

//Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <Link to="/">
                    <li className="navbar__item">
                        <FontAwesomeIcon className="item__icon" icon={faHouse} size="2x"/>
                        <p className="item__description">Home</p>
                    </li>
                </Link>
                <Link to="/cart">
                    <li className="navbar__item">
                        <FontAwesomeIcon className="item__icon" icon={faCartShopping} size="2x" />
                        <p className="item__description">Cart</p>
                    </li>
                </Link>
                <Link to="/profile">
                    <li className="navbar__item">
                        <FontAwesomeIcon className="item__icon" icon={faUser} size="2x"/>
                        <p className="item__description">Profile</p>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;