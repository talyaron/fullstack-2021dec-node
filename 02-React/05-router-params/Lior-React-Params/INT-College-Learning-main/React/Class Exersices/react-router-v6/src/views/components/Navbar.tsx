import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul className='Navbar-items'>
                <Link to="/"><li className='Navbar-item'>Home</li></Link>
                <Link to="/about"><li className='Navbar-item'>About</li></Link>
                <Link to="/faq"><li className='Navbar-item'>FAQ</li></Link>
                <Link to="/contact"><li className='Navbar-item'>Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;