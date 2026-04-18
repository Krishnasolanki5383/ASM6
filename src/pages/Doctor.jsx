import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Doctor = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/styles/Doctor.css';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-background">
               
                    {/* Main Content */}
                    <div className="hero-content">
                        <h1 className="hero-title">Your home for health</h1>
                        
                        <div className="search-container">
                            <h2 className="search-title">Find and Book</h2>
                            
                            <div className="search-box">
                                <div className="location-input">
                                    <span className="location-icon">📍</span>
                                    <input type="text" placeholder="Bangalore" className="input-field" />
                                </div>
                                
                                <div className="search-divider"></div>
                                
                                <div className="search-input">
                                    <span className="search-icon">🔍</span>
                                    <input type="text" placeholder="Search doctors, clinics, hospitals, etc." className="input-field" />
                                </div>
                            </div>
                            
                            <div className="popular-searches">
                                <span className="popular-label">Popular searches:</span>
                                <a href="#" className="search-link">Dermatologist</a>
                                <a href="#" className="search-link">Pediatrician</a>
                                <a href="#" className="search-link">Gynecologist/Obstetrician</a>
                                <a href="#" className="search-link dropdown">Others ▼</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="services-container">
                    <div className="service-card">
                        <h3 className="service-title">Consult with a doctor</h3>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Order Medicines</h3>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">View medical records</h3>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Book test</h3>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Read articles</h3>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">For healthcare providers</h3>
                    </div>
                </div>
            </section>

            {/* Data Safety Section */}
            <section className="safety-section">
                <div className="section-container">
                    <div className="section-image">
                        <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="Data security" />
                    </div>
                    <div className="section-content">
                        <h2 className="section-title">Safety of your data is our <span className="bold-text">top priority.</span></h2>
                        <ul className="feature-list">
                            <li>✓ Multi-level security checks</li>
                            <li>✓ Multiple data backups</li>
                            <li>✓ Stringent data privacy policies</li>
                        </ul>
                        <button className="cta-button">Read more</button>
                        
                        {/* Security Badges */}
                        <div className="security-badges">
                            <div className="badge">
                                <div className="badge-icon">📁</div>
                                <p className="badge-text">256-bit<br/>encryption</p>
                            </div>
                            <div className="badge">
                                <div className="badge-icon">🏅</div>
                                <p className="badge-text">ISO 27001<br/>certified</p>
                            </div>
                            <div className="badge">
                                <div className="badge-icon">🗄️</div>
                                <p className="badge-text">HIPAA<br/>compliant data centers</p>
                            </div>
                            <div className="badge">
                                <div className="badge-icon">🔒</div>
                                <p className="badge-text">DSCI<br/>member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instant Appointment Section */}
            <section className="appointment-section">
                <div className="section-container reverse">
                    <div className="section-content">
                        <h2 className="section-title">Instant appointment with doctors.<span className="bold-text">Guaranteed.</span></h2>
                        <ul className="feature-list">
                            <li>✓ <strong>100,000</strong> Verified doctors</li>
                            <li>✓ <strong>3M+</strong> Patient recommendations</li>
                            <li>✓ <strong>25M</strong> Patients/year</li>
                        </ul>
                        <button className="cta-button">Find me the right doctor</button>
                        
                        {/* Testimonial */}
                        <div className="testimonial">
                            <div className="stars">★ ★ ★ ★ ★</div>
                            <p className="testimonial-text">Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.</p>
                            <div className="testimonial-author">
                                <span className="author-icon">👤</span>
                                <span className="author-name">Amit Sharma</span>
                            </div>
                            <div className="testimonial-nav">
                                <button className="nav-arrow">‹</button>
                                <button className="nav-arrow">›</button>
                            </div>
                        </div>
                        
                        {/* Partner Logos */}
                        <div className="partner-logos">
                            <img src="/Screenshot 2025-11-09 155852.png" alt="" />
                        </div>
                    </div>
                    <div className="section-image">
                        <video src="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm" style={{height: '700px'}}></video>
                    </div>
                </div>
            </section>

            {/* Consult with Doctor Section */}
            <section className="consult-section">
                <div className="section-container">
                    <div className="section-content">
                        <h2 className="section-title">Skip the waiting room. <span className="bold-text">Consult with a doctor</span></h2>
                        <ul className="feature-list">
                            <li>✓ Fees starting at <strong>₹99</strong></li>
                            <li>✓ Verified doctors respond in <strong>5 minutes</strong></li>
                            <li>✓ <strong>100%</strong> Private and confidential</li>
                        </ul>
                        <div className="cta-wrapper">
                            <button className="cta-button">Consult now</button>
                            <span className="online-doctors">● 94751 doctors online</span>
                        </div>
                        
                        {/* Testimonial */}
                        <div className="testimonial">
                            <div className="stars">★ ★ ★ ★</div>
                            <p className="testimonial-text">Good initiative. The doctors are responsive and provide you a brief consultation</p>
                            <div className="testimonial-author">
                                <span className="author-icon">👤</span>
                                <span className="author-name">Aaron Moitra</span>
                            </div>
                            <div className="testimonial-nav">
                                <button className="nav-arrow">‹</button>
                                <button className="nav-arrow">›</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="articles-section">
                <h2 className="articles-title">Read top articles from health experts</h2>
                <div className="articles-container">
                    <button className="carousel-arrow left">‹</button>
                    <div className="articles-grid">
                        <div className="article-card">
                            <img src="https://www.practostatic.com/fit/f243ec6fe2c4060d2d966616c49a3c4081993649" alt="Article thumbnail" />
                            <h3 className="article-title">Masturbation - Good or Bad?</h3>
                            <p className="article-author">Dr.Anish Kumar Gupta, Andrologist</p>
                            <p className="article-stats">321Likes • 554783Views</p>
                        </div>
                        <div className="article-card">
                            <img src="https://www.practostatic.com/fit/63762d10b674b86ee4bf94e5db41784e24ceaa7d" alt="Article thumbnail" />
                            <h3 className="article-title">Are You Tired All the Time?</h3>
                            <p className="article-author">Ms.Swati Kapoor, Dietitian/Nutritionist</p>
                            <p className="article-stats">189Likes • 18164Views</p>
                        </div>
                        <div className="article-card">
                            <img src="https://www.practostatic.com/fit/6cf047747b7fbb61f063e94e10a4d26bf3a55e67" alt="Article thumbnail" />
                            <h3 className="article-title">20 Health Benefits of Kidney Beans</h3>
                            <p className="article-author">Ms.Swati Kapoor, Dietitian/Nutritionist</p>
                            <p className="article-stats">189Likes • 389094Views</p>
                        </div>
                    </div>
                    <button className="carousel-arrow right">›</button>
                </div>
                <button className="cta-button centered">More articles</button>
            </section>

            {/* Medicine Order Section */}
            <section className="medicine-section">
                <div className="section-container">
                    <div className="section-image">
                        <video src="https://www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm" style={{width: '300px'}}></video>
                    </div>
                    <div className="section-content">
                        <h2 className="section-title">Get all your medicines. <span className="bold-text">Everytime. On time.</span></h2>
                        <ul className="feature-list">
                            <li>✓ Guaranteed availability</li>
                            <li>✓ Over <strong>130,000+</strong> genuine medicines</li>
                            <li>✓ Home delivery in <strong>24hrs</strong></li>
                        </ul>
                        <div className="order-info">
                            <button className="cta-button">Order Medicines</button>
                            <p className="last-order">← Last order delivered <strong>1 hour 14 mins</strong> ago in Bellandur, Bengaluru</p>
                        </div>
                        
                        {/* Testimonial */}
                        <div className="testimonial">
                            <p className="testimonial-text">Very Helpful! I hope a lot more doctors come onboard soon.The Doctor's tool is also very helpful, apart from the app.The prescriptions are all on mail, and messages, which makes things very easy to use and track. Great job overall!</p>
                            <div className="testimonial-nav">
                                <button className="nav-arrow">‹</button>
                                <button className="nav-arrow">›</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medical Records Section */}
            <section className="records-section">
                <div className="section-container reverse">
                    <div className="section-content">
                        <h2 className="section-title">All your medical records <span className="bold-text">In one secure app.</span></h2>
                        <ul className="feature-list">
                            <li>✓ 256-bit end to end encryption</li>
                            <li>✓ Records are accessible only by you</li>
                            <li>✓ Access your records across <strong>8000+</strong> centers</li>
                        </ul>
                        <button className="cta-button">Find out more</button>
                    </div>
                    <div className="section-image">
                        <video src="https://www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm" style={{width: '400px'}}></video>
                    </div>
                </div>
            </section>

            {/* Healthcare Providers Section */}
            <section className="providers-section">
                <div className="section-container">
                    <div className="section-content">
                        <h2 className="section-title">Leading Healthcare Providers. <span className="bold-text">Trust us for Business</span></h2>
                        <ul className="feature-list">
                            <li>✓ Get seen by <strong>25M+</strong> patients on Practo.com</li>
                            <li>✓ The most advanced software for clinics and hospitals</li>
                            <li>✓ State of the art business analytics for enterprises</li>
                        </ul>
                        <button className="cta-button">Learn more</button>
                        
                        {/* Testimonial */}
                        <div className="testimonial">
                            <div className="stars">★ ★ ★ ★ ★</div>
                            <p className="testimonial-text">Enjoying all the programs that too through one app.but for Physio people pls add a column for notes instead of prescription.</p>
                            <div className="testimonial-author">
                                <span className="author-icon">👤</span>
                                <span className="author-name">Nidhi Kumar</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-image">
                       <img src="https://www.practostatic.com/web-assets/home/assets/images/provider.c4a3d938da109434de6ce3a9046bbf42.png" alt="" />
                    </div>
                </div>
            </section>

            {/* App Download Section */}
            <section className="app-section">
                <div className="section-container reverse">
                    <div className="section-content">
                        <h2 className="section-title">Download the Practo app</h2>
                        <ul className="feature-list">
                            <li>✓ Book appointments and lab tests</li>
                            <li>✓ Order medicines</li>
                            <li>✓ Consult doctors online</li>
                            <li>✓ Set medicine reminders</li>
                            <li>✓ Store health records</li>
                            <li>✓ Read health tips</li>
                        </ul>
                        <div className="app-buttons">
                            <img src="https://www.practostatic.com/web-assets/home/assets/images/google_badge.bfeb9607baa4c7c0b6897ad8c3adbebe.png" alt="Get it on Google Play" />
                            <img src="https://www.practostatic.com/web-assets/home/assets/images/appstore_badge.adc5473a4cad8e6b9d80f29477b68ae5.png" alt="Download on App Store" />
                        </div>
                    </div>
                    <div className="section-image">
                        <img src="https://www.practostatic.com/web-assets/home/assets/images/download.a9fb5307ceed47df0af1f39cf4e95519.png" alt="Practo app screenshots" />
                    </div>
                </div>
            </section>

            <Footer />

            {/* Fixed CTA Card */}
            <div className="fixed-cta">
                <img src="https://www.practostatic.com/practo-care/doctor_home.png" alt="Doctor" />
                <div className="fixed-cta-content">
                    <h4>Book appointment with an expert surgeon</h4>
                    <p>Piles, Hernia & 50+ surgeries</p>
                    <button className="fixed-cta-button">KNOW MORE</button>
                </div>
            </div>
        </>
    );
};

export default Doctor;
