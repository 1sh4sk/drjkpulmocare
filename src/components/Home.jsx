import React from "react";
import LandingPage from "./LandingPage";
import Header from "./Header";
import Timings from "./Timings";
import Procedures from "./Procedures";
import Suppportive from "./Supportive";
import ReachUs from "./ReachUs";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Header />
            <LandingPage />
            <Timings />    
            <Procedures />
            <Suppportive />
            <ReachUs />
            <Footer />



        </div>
    );
}

export default Home;