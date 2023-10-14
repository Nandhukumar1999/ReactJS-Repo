import React, { useState } from "react";

export function Counter(){
    // const[variable,setVariable]=useState(ini-value)
    const[count,setCount]=useState(0)
    // function add(){
    //     setCount(count+1)
    // }

    return(
        <>
        <div classname="text-center mt-5">
        <h1>{count}</h1>
        <button className="btn btn-success" onClick={()=>{setCount(count+1)}}>Add</button>
        <button className="btn btn-warning" onClick={()=>{setCount(count*0)}}>reset</button>
        <button className="btn btn-primary" onClick={()=>{setCount(count-1)}}>decress</button>
       
       
       
        </div>
        
        </>
    );
}