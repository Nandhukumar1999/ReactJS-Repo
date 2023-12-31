import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import { Link } from "react-router-dom";
export function Skills() {
    return (
        <>
            <div className="na">
                <div className="techdiv skillbground  d-flex flex-wrap justify-content-center p-5" id="/porttechnical">
                    <div className="col-lg-8 row justify-content-center text-light text-center  p-3">
                        <h1 className="eduhead text-info">TECHNICAL SKILLS</h1>
                    </div>
                    <div className="col-lg-8 row justify-content-center text-dark  bg-info  p-3 mt-5 ">
                        <div className="col-lg-4">
                            <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" className="rounded-circle container-fluid" />
                        </div>
                        <div className="col-lg-7 ps-5">
                            <h2 className="fw-bold text-secondary ">CSS</h2>
                            <h4>Click view my work</h4>
                            <button className="btn btn1 mt-3"><h5>Click</h5></button>
                        </div>
                    </div>
                    <div className="col-lg-8 row justify-content-center text-dark bg-info p-3 mt-5">
                        <div className="col-lg-4">
                            <img src="https://static.vecteezy.com/system/resources/previews/012/697/297/non_2x/3d-bootstrap-programming-framework-logo-free-png.png" className="rounded-circle container-fluid" />
                        </div>
                        <div className="col-lg-7 ps-5">
                            <h2 className="fw-bold text-secondary pt-3">Bootstrap</h2>
                            <h4>Click view my work</h4>
                            <button className="btn btn1 mt-3"><h5>Click</h5></button>
                        </div>
                    </div>
                    <div className="col-lg-8 row justify-content-center text-dark bg-info p-3 mt-5">
                        <div className="col-lg-4">
                            <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" className="rounded-circle container-fluid mt-4" />
                        </div>

                        <div className="col-lg-7 ps-5">
                            <h2 className="fw-bold text-secondary pt-3">JavaScript</h2>
                            <h4>Click view my work</h4>
                            <button className="btn btn1 mt-3"><h5>Click</h5></button>
                        </div>
                    </div>
                    <div className="col-lg-8 row justify-content-center text-dark bg-info  p-3 mt-5">
                        <div className="col-lg-4">
                            <img src="https://www.pngmart.com/files/23/React-Logo-PNG-Pic.png" className=" container-fluid" />
                        </div>

                        <div className="col-lg-7 ps-5">
                            <h2 className="fw-bold text-secondary pt-3">ReactJS</h2>
                            <h4>Click view my work</h4>
                            <Link to='/menu'> <button className="btn btn1 pt-2 mt-3"><h5>Click</h5></button></Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}