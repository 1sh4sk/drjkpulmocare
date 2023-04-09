import React from "react";

function ReachUs() {
    return (

        <div className="content">

            <h1 className="heading">Reach Us</h1>



            <div className="row">
                <div className=" Detailscol-lg-6 col-md-6 col-sm-12">
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-phone fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Call Us Now:</h4>
                            <p>Cell: +91 9876543210</p>
                            <p>WhatsApp: +91 9786756453</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-location-dot fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Visit Our Clinic:</h4>
                            <p>ABC Colony, Tamil Nadu</p>
                            <p>Pincode 756 453</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="Icon">
                            <i class="fa-icon fa-solid fa-envelope fa-2xl"></i>
                        </div>
                        <div className="text">
                            <h4>Send A Message:</h4>
                            <p className="Link">abc@gmail.com</p>
                        </div>
                    </div>
                    <div className="Box">
                        <button type="button" className="btn btn-primary btn-lg appointment-btn">Book Appointment</button>
                    </div>
                </div>



                <div className="Map col-lg-6 col-md-6 col-sm-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.003218866053!2d79.31813461932855!3d11.515888694993453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab4a796cb7ceaf%3A0xe7cd39ca29dbafb1!2sVirudhachalam%2C%20Tamil%20Nadu%20606001!5e0!3m2!1sen!2sin!4v1680868186352!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </div>

    );
}

export default ReachUs;