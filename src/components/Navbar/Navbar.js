import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component{
    state= {clicked:false}
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
render(){
    return(
    <>
    <nav>
    <div>
        <ul id="navbar" className=
        {this.state.clicked ? 
            "#navbar active"
            : "#navbar"}>
            <li>
                <a href="/Home" id="navlink">Home</a>
            </li>
            <li>
                <a href="/portfolio" id="navlink">Portfolio</a>
            </li>
            <li>
                <a href="/cv" id="navlink">Curriculum vitae</a>
            </li>
            <li>
                <a href="/contact" id="navlink">Contact</a>
            </li>
        </ul>

    </div>
    <div id="mobile" 
     onClick=
     {this.handleClick}>
        <i 
        id="bar"
        className={
            this.state.clicked?
            "fas fa-times" : "fas fa-bars"
            }></i>
        
    </div>
    </nav>
    </>
)
}
}

export default Navbar;