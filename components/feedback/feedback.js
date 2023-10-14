import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-solid-svg-icons"
import './feedback.css'
import "bootstrap/dist/css/bootstrap.css";


export function Feedback(){

    return(
   
        <>
        <div className="feedbackmain container justify-content-center mt-5 p-5 text-center">
            
            <div className="d-flex justify-content-around m-5"> 
            <FontAwesomeIcon icon={faHeart} className="text-danger fs-5"/>
            </div>
            <h2>Thankyou....!</h2>
            <p>we will use your feedback to improve your customer support performance</p>
        </div>

        </>
    );
}