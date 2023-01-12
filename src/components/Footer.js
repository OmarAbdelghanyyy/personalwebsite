import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Footer.css'
import { ClassNames } from "@emotion/react";
const Footer= ()=>{
    return(
    <div className="footer">
    <div className="media">
        <Link href="https://www.linkedin.com/in/omar-abdelghany-027585254/" className={ClassNames.Link} target="_blank">
            <LinkedInIcon style={{color:"white"}}  className="linkedinicon"/>
        </Link>
        <Link href="https://github.com/OmarAbdelghanyyy" className={ClassNames.Link} target ="_blank">
             <GitHubIcon style={{color:"white"}}  className="githubicon"/>  
        </Link>
        <p>   @Copyright 2023
        </p>

    </div>
</div>)
    
}

export default Footer;