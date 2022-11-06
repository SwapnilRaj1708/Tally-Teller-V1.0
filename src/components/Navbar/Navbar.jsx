import React from 'react';
import "./Navbar.css"

export default function Navbar() {

    return (
        <div className="navbar navbar-expand-lg navbar-dark" aria-label="Eighth navbar example">
            <div className="container">
                <a className="navbar-brand" href="/">TallyTeller</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample07">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">More</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown07">
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><a className="dropdown-item" href="/">Setting</a></li>
                                <li><a className="dropdown-item" href="/">Sign in/Login</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
