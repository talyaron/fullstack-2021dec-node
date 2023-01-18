import {Button, Navbar as NavbarBs,Nav, Container} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { filterPrice, useStore } from "../context/StoreContext"
export function Navbar(){
    const {openCart , cartQuantity} = useStore ()
    return( 
    <NavbarBs sticky="top" className="bg-white shadow-sm nb-3">
    <Container>
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
                Login
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
                Store
            </Nav.Link> 
              <Nav.Link to="/about" as={NavLink}>
                About
            </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <Button 
        onClick={openCart}
        style={{width:"3rem", height:"3rem", position:"relative"}}
        // variant="outline-primary"
         className="a">
        <svg xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" width="22" height="22"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"  
        style={{color:"white"
        ,width:"1rem",
         height:"1.3rem",
         position:"absolute",
         bottom:0,
         right:0,
         transform:"translate(25% , 25%)"}}>
         {cartQuantity}
         </div>
        </Button>
        )}


    </Container>
    </NavbarBs>
    )
}
