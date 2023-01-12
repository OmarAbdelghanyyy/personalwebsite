import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Styles/Footer.css'
const Footer= ()=>{
    return(
    <div className="footer">
    <div className="media">
        <LinkedInIcon style={{color:"white"}} />
        <GitHubIcon style={{color:"white"}} />  
        <p>@
            Copyright 
            2023
        </p>

    </div>
</div>)
    
}

export default Footer;