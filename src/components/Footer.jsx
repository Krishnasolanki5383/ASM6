import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Practo Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Practo</h4>
                        <ul className="footer-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* For Patients Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">For patients</h4>
                        <ul className="footer-links">
                            <li><a href="#">Search for doctors</a></li>
                            <li><a href="#">Search for clinics</a></li>
                            <li><a href="#">Search for hospitals</a></li>
                            <li><a href="#">Book Diagnostic Tests</a></li>
                            <li><a href="#">Book Full Body Checkups</a></li>
                            <li><a href="#">Practo Plus</a></li>
                            <li><a href="#">Covid Hospital listing</a></li>
                            <li><a href="#">Practo Care Clinics</a></li>
                            <li><a href="#">Read health articles</a></li>
                            <li><a href="#">Read about medicines</a></li>
                            <li><a href="#">Practo drive</a></li>
                            <li><a href="#">Health app</a></li>
                        </ul>
                    </div>

                    {/* For Doctors Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">For doctors</h4>
                        <ul className="footer-links">
                            <li><a href="#">Practo Profile</a></li>
                        </ul>
                        
                        <h4 className="footer-heading">For clinics</h4>
                        <ul className="footer-links">
                            <li><a href="#">Ray by Practo</a></li>
                            <li><a href="#">Practo Reach</a></li>
                            <li><a href="#">Ray Tab</a></li>
                            <li><a href="#">Practo Pro</a></li>
                        </ul>
                    </div>

                    {/* For Hospitals Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">For hospitals</h4>
                        <ul className="footer-links">
                            <li><a href="#">Insta by Practo</a></li>
                            <li><a href="#">Qikwell by Practo</a></li>
                            <li><a href="#">Practo Profile</a></li>
                            <li><a href="#">Practo Reach</a></li>
                            <li><a href="#">Practo Drive</a></li>
                        </ul>
                        
                        <h4 className="footer-heading">For Corporates</h4>
                        <ul className="footer-links">
                            <li><a href="#">Wellness Plans</a></li>
                        </ul>
                    </div>

                    {/* More Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">More</h4>
                        <ul className="footer-links">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">PCS T&C</a></li>
                            <li><a href="#">Healthcare Directory</a></li>
                            <li><a href="#">Practo Health Wiki</a></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Social</h4>
                        <ul className="footer-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Github</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="Practo Logo" />
                    </div>
                    <p className="copyright">Copyright © 2025, Practo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
