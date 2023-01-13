import { FC } from 'react'
import { Outlet, Link } from 'react-router-dom'
const Layout: FC = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
            </nav>

            <Outlet /> {/* door to exit */}

            <footer>Dorit is the best!</footer>
        </>
    )
}

export default Layout