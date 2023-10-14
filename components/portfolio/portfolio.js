import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle"
import './portfolio.css'
import { Link as ScrollLink } from "react-scroll";


export function Portfolio() {

    return (
        <>
            <div className="nav5">
                <nav class="navbar navbar-expand-lg sticky-top" id="nav1">
                    <div class="container-fluid">
                        <a class="navbar-brand nav1 " href="#">Portfolio</a>
                        <button class="navbar-toggler" id="tagnav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ">
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/" spy={true} smooth={true} offset={-50} duration={50}>Home</ScrollLink>
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/portabout" spy={true} smooth={true} offset={-50} duration={50}>About</ScrollLink>
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/porteducation" spy={true} smooth={true} offset={-50} duration={50}>Education</ScrollLink>
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/moodle" spy={true} smooth={true} offset={-50} duration={50}>Project</ScrollLink>
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/porttechnical" spy={true} smooth={true} offset={-50} duration={50}>Technical Skills</ScrollLink>
                                <ScrollLink activeClass="active" className="nav-link nav2"  to ="/portcontact" spy={true} smooth={true} offset={-50} duration={50}>Contact</ScrollLink>
                                {/* <ScrollLink to='/about'><a class="nav-link nav2" aria-current="page" href="#">About</a></ScrollLink>
                                <ScrollLink to='/education'><a class="nav-link nav2" href="#">Education</a></ScrollLink>
                                <ScrollLink to='/project'><a class="nav-link nav2" href="#">Project</a></ScrollLink>
                                <ScrollLink to='/Tech'><a class="nav-link nav2" href="#">Technical Skills</a></ScrollLink>
                                <ScrollLink to="/contact"><a class="nav-link nav2" href="#">Contact</a></ScrollLink> */}

                            </div>
                        </div>

                    </div>
                </nav>
                
            </div>


        </>

    );
}