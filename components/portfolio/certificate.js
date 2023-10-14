import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './portfolio.css';
import certificate1 from './certificate1.jpg'
import certificate2 from './certificate2.jpg'
import certificate3 from './certificate3.jpg'
export function Certification() {
   return (
      <>
         <div className="procertificationdiv d-flex flex-wrap justify-content-center">
            <div className="col-lg-12 row justify-content-center text-light text-center proeduhead p-5">
               <h1 className="procertificationdiv"> Certification</h1>
            </div>
            <div className="col-lg-3 row justify-content-center text-dark  bg-light procer  m-5">
               <div className="col-12">
                  <img src={certificate1} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>Intoduction to FrontEnd Development</h2>
                  
                  <button className="btn btn-outline-info">click</button>
               </div>
            </div>

            <div className="col-lg-3 row justify-content-center text-dark  bg-light procer  m-5">
               <div className="col-12">
                  <img src={certificate2} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>HTML and CSS Depth</h2>
                  <button className="btn btn-outline-info">click</button>
               </div>
            </div>
            <div className="col-lg-3 row justify-content-center text-dark  bg-light procer m-5 ">
               <div className="col-12">
                  <img src={certificate3} className="container-fluid procerimage" />
               </div>
               <div className="col-12 bg-dark text-light ">
                  <h2>Programming with JavaScript</h2>
                  <button className="btn btn-outline-info">click</button>
               </div>
            </div>

         </div>
      </>
   );
}