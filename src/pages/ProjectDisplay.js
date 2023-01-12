import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/projectdisplay.css'
import { Link } from "@mui/material";
import { ClassNames } from "@emotion/react";
function ProjectDisplay() {
    const {id}= useParams();
    const project= ProjectList[id];
    return(
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="project"/>
        <p>{project.text}</p>
        <Link href={project.repo} className={ClassNames.Link} target="_blank">
        <GitHubIcon />
        </Link>
        </div>
    )
}

export default ProjectDisplay;