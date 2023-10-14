import React, { useState } from "react";

export function DateFunction() {
    const[College,SetCollege]=useState('')
    function DATECollege(){
            let a=document.getElementById("DATE").value;
            var todaydate= new Date(a)
            todaydate.setDate(todaydate.getDate()+90)
            var output=todaydate.toDateString();
            SetCollege(output)
    }
    return (
        <>
            <div className=" text-center mt-5">
                <input type="Date" id="DATE" placeholder="ENTRY A COLLEGE DATE"/><br/><br/>
                <div onClick={DATECollege} className="btn btn-warning">entry</div>
                <h1>{College}</h1>
            </div>
            </>
    );
}