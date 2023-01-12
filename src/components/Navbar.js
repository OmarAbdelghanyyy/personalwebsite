import React, { Component } from "react";
import '../Styles/Navbar.css';

class Navbar extends Component{
  
render(){
    return(
    <>
    <nav>
    <div id="bardiv">
        <ul id="navbar" className="#navbarative">
            <li>
                <a href="/Home" id="navlink">Home</a>
            </li>
            <li>
                <a href="/projects" id="navlink">Projects</a>
            </li>
            <li>
                <a href="/cv" id="navlink">CV</a>
            </li>
            <li>
                <a href="/contact" id="navlink">Contact</a>
            </li>
            
        </ul>

    </div>
  
    </nav>
    </>
)
}
}

export default Navbar;