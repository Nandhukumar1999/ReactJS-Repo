import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './portfolio.css'

export function Education() {

    return (

        <>


            <div class="container-fluid text-center d-flex align-content-center edudiv" id="/porteducation">
                <div className="d-grid">
                    <div className="row d-flex justify-content-evenly align-content-center">
                        <div class="card bg-dark edudiv2 col-sm-12 col-md-12 col-lg-3 col-12" >
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                                <h5 class="card-title">Government Higher Secondary School</h5>
                                <h3 class="card-text">SSLC</h3>
                                <h2>Percentage: 60%</h2>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div class="card bg-dark edudiv2 col-sm-12 col-md-12 col-lg-3 col-12" >
                            {/* <img src="..." class="card-img-top" alt="..."/> */}
                            <div class="card-body">
                                <h5 class="card-title">Government Higher Secondary School</h5>
                                <h3 class="card-text">HSC</h3>
                                <h2>Percentage: 60%</h2>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div class="card bg-dark edudiv2 col-sm-12 col-md-12 col-lg-3 col-12" >
                            {/* <img src="..." class="card-img-top" alt="..." /> */}
                            <div class="card-body">
                                <h5 class="card-title">Sri Vasavi College (SFW),Bharathiyar University</h5>
                                <h3 class="card-text">B.com Corportate Secondaryship</h3>
                                <h2>Percentage: 65%</h2>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
        
                </div>
        </>
    );
}