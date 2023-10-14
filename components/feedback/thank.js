import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";

export function Thank(){
    return(
        <>
        <div className="container justify-content-center mt-5 p-5">
             
            <Link to="/Feedback"><FontAwesomeIcon icon={faFaceSadTear} id="emoji" className="me-2"/></Link>
            <Link to="/Feedback"><FontAwesomeIcon icon={faFaceSmileBeam} id="emoji" className="me-2"/></Link>
            <Link to="/Feedback"><FontAwesomeIcon icon={faFaceLaughBeam} id="emoji" className="me-2"/></Link>
            </div>
        
        </>
    )
}