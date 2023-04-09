import React from "react";

function Footer() {
    return (
        <section>
            <div className="Links">
                <div className="Section">
                    <h5>Pocedures</h5>
                    <p>Pulmonary Function Test (PFT)</p>
                    <p>Bronchoscopy</p>
                    <p>Thoracoscopy</p>
                    <p>Bone Marrow Aspiration</p>
                    <p>Inter Coastal Drainage</p>
                    <p>Pig Tail Catheterization</p>
                    <p>Sleep Study</p>
                </div>
                <div className="Section">
                    <h5>Supportive Care</h5>
                    <p>Inhalers</p>
                    <p>Nebulizers</p>
                    <p>Oxygen Concentrators</p>
                    <p>Ventilation</p>
                </div>
                <div className="Section">
                    <h5>Quick Links</h5>
                    <p>Home</p>
                    <p>About Specialist</p>
                    <p>Procedures</p>
                    <p>Book Appointment</p>
                </div>
            </div>
            <div className="Footer">
                <p>
                    Made with <i class="fa fa-heart"></i> by - Fireloop Developers
                </p>
            </div>
        </section>
    );
}

export default Footer;