import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './congratscard.css'
export function Congratscard() {
    return (
        <>
            <div className="container-fluid mmmm">
                <h1 className="text-center">Congratulations</h1>
                <div className="bg-info text-center col-lg-4 mx-auto p-5">
                    <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
                    <h2>Nandhakumar V</h2>
                    <p>KGisl micro college</p>
                    <img src=" https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
                </div>
            </div>

        </>
    )
}