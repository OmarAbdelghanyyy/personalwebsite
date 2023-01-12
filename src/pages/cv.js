import React from "react";
import finalCv from '../assets/finalCv.pdf'
import { Document,Page,pdfjs } from "react-pdf";
import '../Styles/cv.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// Allign it to the middle
//TODO: create a css file this component
const Cv =()=>{
    return(
        <div className="resume">
        <div className="resume-pdf">
        <Document file={finalCv}
        onContextMenu={(e) => e.preventDefault()}>
        <Page pageNumber={1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        />
        </Document>
        </div>
        </div>
    )
}
export default Cv;