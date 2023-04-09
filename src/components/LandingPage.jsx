import React from "react";
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <section>
            <section>
                <div className="landing-page row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1>breath in life with lungs that last</h1>
                        <p>exceptional pulmo care clinic for all your lung related problems </p>
                        <button type="button" className="btn btn-primary btn-lg appointment-btn">Book Appointment</button>
                    </div>
                </div>
            </section>

            <section>
                <div className="content">
                    <h1 className="heading">
                        About Specialist
                    </h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="about-img" alt="Dr. Jayakumar" src="/images/doctor-img.webp" />
                        </div>

                        <div className="about-content col-md-6 col-sm-12">
                            <h1>Dr. Jayakumar</h1>
                            <h2>pulmonologist, sleep specialist, allergist/immunologist, Intensivist and Infectious disease specialist</h2>
                            <p>who has a thriving experience of more than 10 years. He is specialised in diagnosing and treating lung conditions like Asthma, Bronchiectasis, Acute respiratory distress syndrome, COPD, Cor pulmonate, Sleep Apnoea. The doctor has exemplary experience in treating Breathlessness, Chest pain, Haemoptysis, Pleural effusion, Chronic cough, Respiratory infection. He has the best treatment in Eosinophilic lung disease, Pneumothorax, Pulmonary hypertension, Sarcoidosis, Pulmonary thromboembolic disease, Upper Airway diseases. His supportive care of treatment includes ....</p>
                            <div className="about-btn"><Link to="/AboutSpecialist"><button type="button" className="btn btn-primary btn-lg">Know More...</button></Link></div>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default LandingPage;