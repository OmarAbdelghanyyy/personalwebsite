import React from "react";
import {Nav,NavLink,NavMenu} from './NavbarElements'
const Navbar = ()=>{
    return(
        <>
        <Nav>
            <NavMenu>
                <NavLink to= "/portfolio" activeStyle>
                    portfolio
                </NavLink>
                <NavLink to="/cv" activeStyle>
                    Curriculum vitae
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact Me
                </NavLink>

            </NavMenu>

        </Nav>
        </>
    )
}
export default Navbar;