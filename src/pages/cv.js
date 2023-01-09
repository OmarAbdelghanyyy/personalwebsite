import React from "react";
import finalCv from './finalCv.pdf'
import { Document,Page,pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Cv =()=>{
    return(
        <div className="resume">
        <h1>Below you can find a copy of my cv</h1>
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