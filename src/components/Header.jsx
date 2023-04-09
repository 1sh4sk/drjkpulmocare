import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo.webp" alt="Drjkpulmocare" width="150" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./AboutSpecialist">ABOUT SPECIALIST</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./Procedures">PROCEDURES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="./ReachUs">REACH US</Link>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary">Book Appointment</button>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>


    );
}

export default Header;