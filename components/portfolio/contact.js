import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons"
import './portfolio.css'

export function Protfoliocontact(){
    return(
        <>
        <div id="/portcontact" className="container-fluid p-3 portfoliocontact bg-dark ">
            <h1 className="text-center text-info">Contact</h1>
            <div className="d-flex flex-wrap">

                {/* <div className="col-log-2 ">
                   <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125254.0983864227!2d77.19202388253667!3d11.173521152304547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba903729a2d8461%3A0x1c3320dc2f44e3b3!2sAvinashi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1697123765687!5m2!1sen!2sin"
                    height="20%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                   </div>
                </div> */}
                
                <div className="col-log-2 p-5">
                    <h3 className="fs-3 text-success">Address</h3>
                    <p className="fs-5 text-info">12/7 Periya semur,<br/>Periyasemur(po),<br/>k.kulam,Erode,<br/>Tamil Nadu - 638004</p>
                </div>

                <div className="col-log-4 p-5  flex-wrap">
                    <h3 className="fs-3 text-successr">Phone Number</h3>
                    <p className="text-info"><FontAwesomeIcon icon={faPhone} className="text-success" /> 6383685055 </p>
                    <h3 className="fs-3 text-success">Email</h3>
                    <p className="text-info"> nandhakumar041199@gmail.com </p>
                    
                </div>
              
                <div className="col-log-3 p-5">
                   <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="/"><FontAwesomeIcon icon={faLinkedin} className=" p-3 iconho text-info" /></a>
                   <a href="https://github.com/Nandhukumar1999" target="/"><FontAwesomeIcon icon={faGithub} className=" p-3 iconho text-info" /></a>
                   <a href="mailto:nandhakumar041199@gmail.com"target="/"><FontAwesomeIcon icon={faEnvelope} className=" p-3 iconho text-info"  /></a>
                   <a href="tel:63836865055"target="/"><FontAwesomeIcon icon={faPhone} className="text-info p-3 iconho" /></a>
                   
                </div>
            </div>
        </div>
        </>
    )
}