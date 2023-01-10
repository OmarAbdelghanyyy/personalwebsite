import React from "react";
import './portfolio.css'
const Portfolio =() =>{
    //I want to put the logo of the languages used next to the project name and add a quick bullet point list summary of the project
    //TODO: create a css file this component
    return(
        <div className="portfolio">
            <h1>Below you can find my list of up to date projects</h1>
            <div className="tictactoe"> 
                <h3>TicTacToeGame</h3> 
                <ul>
                    <li>Developped a TicTacToeGame in java</li>
                </ul>
                </div>
            <div className="currency">
                <h3>Currency Converter</h3>
                <ul>
                    <li>

                    </li>
                </ul> 
                </div>
            <div className="enroll"> 
                <h3>EnrollAutomation</h3> 
                <ul>
                    <li>
                    </li>
                </ul>
            </div>
            <div className="thermo">
               
                <h3>ThermoMug</h3>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
            <div className="movie">
                <h3>MovieApp</h3>
                <ul>
                    <li>
                        </li>
                </ul>
            </div>
            <div className="todo">
                <h3>ToDoList</h3>
                <ul>
                    <li>
                        </li>
                </ul>
            </div>
            
        </div>
    )
}
export default Portfolio;