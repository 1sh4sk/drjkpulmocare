import React from "react";

function Timings() {
    return (
        <section>
            <div className="content">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="heading timing-heading">OPD Hours</h1>
                        <p className="timing-para clinic-name">At Dr. Adhi Polyclinic, Virudhachalam</p>
                        <div className="timings">
                            <p>Monday</p><p>9:00 AM - 2:00 PM</p>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Tuesday</p><p>9:00 AM - 2:00 PM</p>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Wednesday</p><p>9:00 AM - 2:00 PM</p>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Thurday</p><p>9:00 AM - 2:00 PM</p>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Friday</p><p>9:00 AM - 2:00 PM</p>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Saturday</p><p>9:00 AM - 2:00 PM</p>
                        </div>

                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h1 className="heading timing-heading vch">Visiting Consultant Hours</h1>

                        <div className="timings timings-vch">
                            <p>Monday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 6:00 PM</p>
                                <p className="timing-para">Sudha Hospital, Vadalur</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Tuesday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 6:00 PM</p>
                                <p className="timing-para">Gokul Raja Medicals, Jayakondam</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Thurday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 6:00 PM</p>
                                <p className="timing-para">Mahalakshmi Hospital,
                                    Ulundhurpet, Kalakuruchi post</p>
                            </div>
                        </div>
                        <hr />
                        <div className="timings">
                            <p>Friday</p>
                            <div className="timings-content">
                                <p>2:00 PM - 6:00 PM</p>
                                <p className="timing-para">Sri Sri Clinic & Medicals,
                                    Shrimooshnam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timings;