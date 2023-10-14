import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle'
export function Menu() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark gap-3 " id="/menu">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="main">
                        <ul class="navbar-nav me-1 mb-2 mb-lg-0">
                            <li class="nav-item"><Link className="Link1 m-2" to="/">Hello</Link></li>
                            <li class="nav-item"><Link className="Link1 m-2" to="/card">Congratscard</Link></li>
                            <li class="nav-item"><Link className="Link1 m-2" to="/SuperLeague">SuperLeague</Link> </li>
                            <li class="nav-item"><Link className="Link1 m-2" to="/Socialbutton">Socialbutton</Link> </li>
                            <li class="nav-item"><Link className="Link1 m-2" to="/Notifications">Notifications</Link></li>
                            <li class="nav-item"><Link className="Link1 m-2" to="/Login">Login</Link> </li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/Technologycard">Technologycard</Link> </li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/Counter">Counter</Link> </li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/Thank">Feedback</Link></li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/Fruits">Fruits</Link></li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/DateFunction">DateFunction</Link></li>
                            <li class="nav-item"> <Link className="Link1 m-2" to="/Jsondata">Jsondata</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}