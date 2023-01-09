import React from "react";
import latestCv from './latestCv.pdf'
const Cv =()=>{
    return(
        <div className="resume">
        <h1>Below you can find a copy of my cv</h1>
        <div className="resume-pdf">
        <embed 
        src={latestCv + "#toolbar=0"}
        type="application/pdf"
        height={800}
        width={900}
        />
        </div>
        </div>
    )
}
export default Cv;