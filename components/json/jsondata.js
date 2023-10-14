import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
export function Jsondata() {
    const [data, setData] = useState([])
    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(viewdata => setData(viewdata))
    })

    return (

        <>
            <h1 >Products</h1>
            <div className="container row m-2 text-center justify-content-center">
                {
                    data.map((value, index) => (
                        <>


                            <div class="card col-lg-3 m-3 p-3 bg-warning">
                                <img src={value.image} class="card-img-top"  alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{value.title}</h5>
                                
                                    <p class="card-text ">{value.text}</p>
                                    <StarRatings rating={value.rating.rate} starDimension="30px" starRatedColor="green"/> 
                                    <h3 className="card-text">rating:{value.rating.rate}</h3>
                                    <Link to={`/details/${value.id}`} class="btn btn-primary">View</Link>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    );
            }



