import React from "react";
import ProjectItem from "./projectItem";
import '../Styles/projects.css';
import {ProjectList} from '../helpers/projectList';
function Projects(){
    return(
        <div className="projects">
           <h1>My Personal Projects</h1> 
           <div className="projectList">
            {ProjectList.map(
                (project,index)=>{
                    return<ProjectItem key ={index}id ={index} name ={project.name} image ={project.image}/>
                }
            )}
           </div>
        </div>
    )
}

export default Projects;