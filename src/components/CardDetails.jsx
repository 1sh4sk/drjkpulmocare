import React from "react";
import { useLocation } from 'react-router-dom';
import Header from "./Header";

function CardDetails() {

    const location = useLocation();
    return (
        <section>
            <Header />

            <div className="card-details">
                
                    <img src="./images/doctor-img.png" width="300px" height="300px"></img>
                    <h1>{location.state.item.title} Funtion Test</h1>
                    <p>{location.state.item.explanation}</p>
                
            </div>

        </section>
    );
}

export default CardDetails;