import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './socialbutton.css'
export function Socialbutton(){
    return(
        <>
        <div className="ohhh">
            <h1 className=" text-white text-center pt-5 ">Social Button</h1>
            <div className=" text-center">
                <button className="btn btn-warning m-4">Like</button>
                <button className="btn btn-light m-3">Comment</button>
                <button className="btn btn-primary m-3">Share</button>
            </div>
        </div>
        </>
    )
}