import React from "react";
import './portfolio.css'
const Portfolio =() =>{
    //I want to put the logo of the languages used next to the project name and add a quick bullet point list summary of the project
    //TODO: create a css file this component
    //TODO: make the name redirect to github repo
    return(
        <div className="portfolio">
            <h1>Below you can find my list of up to date projects</h1>
            <div className="tictactoe"> 
                <h3>TicTacToeGame <i id="java-icon-tictactoe"className="fa-brands fa-java fa-stack javaIcon icon-large"></i></h3> 
                <ul>
                    <li>Developped a TicTacToeGame in java with a couple of different implementations</li>
                    <li>Developped an implementation where two players would play against each other using the console </li>
                    <li>Developped an implementation where a player would play against the program, with the program using randomly generated moves</li>
                    <li>Developped an implementation where after each move, a list of all the possible next moves woold be generated</li>
                    <li></li>
                </ul>
                </div>
            <div className="currency">
                <h3>Currency Converter <i id="java-icon-currency"className="fa-brands fa-java fa-stack javaIcon"></i></h3>
                <ul>
                    <li>Made a currency converter application in Java</li>
                    <li>Utilized Json and API technologies to get real time currency values</li>
                    <li>Made a simple GUI using Java's Swing library</li>
                    <li></li>

                </ul> 
                </div>
            <div className="enroll"> 
                <h3>EnrollAutomation <i id="python-icon"className="fa-brands fa-python"></i></h3> 
                <ul>  
                    <li></li>  
                    <li>Used Python's Selenium library to automate course enrollment</li>
                    <li>Gained an understanding of the fundamentals of web scraping</li>
                    <li></li>

                </ul>
            </div>
            <div className="thermo">
               
                <h3>ThermoMug 
                    <i id ="mug-html-icon"className="fa-brands fa-html5"></i>
                    <i id ="mug-css-icon"className="fa-brands fa-css3"></i>
                    <i id ="mug-js-icon"className="fa-brands fa-square-js"></i>
                    
                    </h3>
                <ul>
                    <li></li>
                    <li>Implemented a website to pitch a theoretical business idea of a temperature contrulled mug in a group</li>
                    <li>Learnt the basics of web development</li>
                    <li>Used github to share code with my group</li>
                    <li></li>
                </ul>
            </div>
            <div className="todo">
                <h3>ToDoList
                <i id="todo-react-icon"className="fa-brands fa-react"></i>
                </h3>
                <ul>
                    <li></li>
                    <li>Developed a simple to do list using React</li>
                    <li>Gained an understanding of the fundamentals of React</li>
                    <li>Acquired knowledge of the basics of CRUD</li>
                    <li></li>
                </ul>
            </div>
            
            <div className="movie">
                
                <h3>MovieApp
                <i id="movie-react-icon"className="fa-brands fa-react icon-spin"></i>
                </h3>
                <ul>
                    <li></li>
                    <li>Developed a simple movieapp using react</li>
                    <li>Used an API to get movies searched by user</li>
                    
                </ul>
            </div>
          
            
        </div>
    )
}
export default Portfolio;