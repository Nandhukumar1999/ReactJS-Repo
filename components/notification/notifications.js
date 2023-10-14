import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faBell,faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export function Notifications(){
return(
    <>
    <div className="container-fluid text-center">
        <h1>Notifications</h1>
        <div className="bg-primary p-4 m-5 text-white">
            <h1><FontAwesomeIcon icon={faCheck} /> Information Message</h1></div>
        <div className="bg-success p-4 m-5 text-white">
            <h1><FontAwesomeIcon icon={faCheck} /> Success Message</h1></div>
        <div className="bg-warning p-4 m-5 text-white">
            <h1><FontAwesomeIcon icon={faBell} /> Warning Message</h1></div>
        <div className="bg-danger p-4 m-5 text-white">
            <h1><FontAwesomeIcon icon={faCircleExclamation} /> Error Message</h1></div>
    </div>
    </>
)
}