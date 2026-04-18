import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img style={{ width: '4rem', height: '4rem' }} src="https://images.seeklogo.com/logo-png/34/1/practo-logo-png_seeklogo-347987.png" alt="Practo Logo" />
                    </Link>
                </div>
                
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/doctor">Find Doctors</Link></li>
                    <li><Link to="/find-doctor">Video Consult</Link></li>
                    <li><a href="#">Lab Tests</a></li>
                    <li><a href="#">Surgeries</a></li>
                </ul>

                <div className="nav-right">
                    <div className="dropdown">
                        <button className="dropdown-btn">
                            <span className="new-badge">NEW</span>
                            For Corporates
                            <span className="arrow">▼</span>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">
                            For Providers
                            <span className="arrow">▼</span>
                        </button>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-btn">
                            Security & help
                            <span className="arrow">▼</span>
                        </button>
                    </div>
                    <a href="#" className="login-btn">Login / Signup</a>
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
