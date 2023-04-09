import React from "react";
import LandingPage from "./LandingPage";
import Timings from "./Timings";
import Procedures from "./Procedures";
import Suppportive from "./Supportive";
import ReachUs from "./ReachUs";


function Home() {
    return (
        <div>
           
            <LandingPage />
            <Timings />   
            <Procedures />
            <Suppportive />
            <ReachUs />

        </div>
    );
}

export default Home;