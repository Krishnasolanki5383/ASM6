import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/styles/style.css';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <>
            <Navbar />
            
            <section className="search-section">
                <div className="search-container">
                    <div className="search-box">
                        <div className="location-input">
                            <span className="icon">📍</span>
                            <input type="text" placeholder="Ahmedabad" className="location-field" />
                        </div>
                        <div className="search-divider"></div>
                        <div className="search-input">
                            <span className="icon">🔍</span>
                            <input type="text" placeholder="Search doctors, clinics, hospitals, etc." className="search-field" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Cards Section */}
            <section className="services-section">
                <div className="services-container">
                    <div className="service-card">
                        <div className="card-image blue-bg">
                            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" alt="Video Consultation" />
                        </div>
                        <div className="card-content">
                            <h3>Instant Video Consultation</h3>
                            <p>Connect within 60 secs</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="card-image cyan-bg">
                            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" alt="Find Doctors" />
                        </div>
                        <div className="card-content">
                            <h3>Find Doctors Near You</h3>
                            <p>Confirmed appointments</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="card-image purple-bg">
                            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" alt="Lab Tests" />
                        </div>
                        <div className="card-content">
                            <h3>Lab Tests</h3>
                            <p>Safe and trusted lab tests</p>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="card-image gray-bg">
                            <img src="https://www.practostatic.com/home/surgeries-2b.png" alt="Surgeries" />
                        </div>
                        <div className="card-content">
                            <h3>Surgeries</h3>
                            <p>Safe and trusted surgery centers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialities Section */}
            <section className="specialities-section">
                <div className="specialities-container">
                    <div className="section-header">
                        <div>
                            <h2>Consult top doctors online for any health concern</h2>
                            <p>Private online consultations with verified doctors in all specialists</p>
                        </div>
                        <button className="view-all-btn">View All Specialities</button>
                    </div>
                </div>
            </section>

            <section className="consult-section">
                <div className="consult-item">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png" alt="Period doubts or Pregnancy" />
                    <h3>Period doubts or Pregnancy</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
                <div className="consult-item">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png" alt="Acne, pimple or skin issues" />
                    <h3>Acne, pimple or skin issues</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
                <div className="consult-item">
                    <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="Performance issues in bed" />
                    <h3>Performance issues in bed</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
                <div className="consult-item">
                    <img src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png" alt="Cold, cough or fever" />
                    <h3>Cold, cough or fever</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
                <div className="consult-item">
                    <img src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg" alt="Child not feeling well" />
                    <h3>Child not feeling well</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
                <div className="consult-item">
                    <img src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png" alt="Depression or anxiety" />
                    <h3>Depression or anxiety</h3>
                    <a href="#">CONSULT NOW</a>
                </div>
            </section>

            <section className="appointment-section">
                <h2>Book an appointment for an in-clinic consultation</h2>
                <p>Find experienced doctors across all specialties</p>
                <div className="specialities-list">
                    <div className="speciality-card">
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" alt="Dentist" />
                        <h4>Dentist</h4>
                        <p>Teething troubles? Schedule a dental checkup</p>
                    </div>
                    <div className="speciality-card">
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" alt="Gynecologist/Obstetrician" />
                        <h4>Gynecologist/Obstetrician</h4>
                        <p>Explore for women’s health, pregnancy and infertility treatments</p>
                    </div>
                    <div className="speciality-card">
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" alt="Dietitian/Nutrition" />
                        <h4>Dietitian/Nutrition</h4>
                        <p>Get guidance on eating right, weight management and sports nutrition</p>
                    </div>
                    <div className="speciality-card">
                        <img src="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" alt="Physiotherapist" />
                        <h4>Physiotherapist</h4>
                        <p>Pulled a muscle? Get it treated by a trained physiotherapist</p>
                    </div>
                </div>
            </section>

            {/* Health Articles Section */}
            <section className="health-articles">
                <div className="container">
                    <div className="articles-content">
                        <div className="articles-text">
                            <h2 className="articles-title">Read top articles from health experts</h2>
                            <p className="articles-subtitle">Health articles that keep you informed about good health practices and achieve your goals.</p>
                            <a href="#" className="see-all-btn">See all articles</a>
                        </div>

                        <div className="articles-grid">
                            <div className="article-card">
                                <div className="article-image">
                                    <img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="12 Coronavirus Myths and Facts" />
                                </div>
                                <div className="article-info">
                                    <span className="article-category">CORONAVIRUS</span>
                                    <h3 className="article-title">12 Coronavirus Myths and Facts That You Should Be Aware Of</h3>
                                    <p className="article-author">Dr. Diana Borgio</p>
                                </div>
                            </div>

                            <div className="article-card">
                                <div className="article-image">
                                    <img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="Eating Right to Build Immunity" />
                                </div>
                                <div className="article-info">
                                    <span className="article-category">VITAMINS AND SUPPLEMENTS</span>
                                    <h3 className="article-title">Eating Right to Build Immunity Against Cold and Viral Infections</h3>
                                    <p className="article-author">Dr. Diana Borgio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="testimonials-title">What our users have to say</h2>
                    
                    <div className="testimonial-slider">
                        <button className="slider-btn prev-btn">
                            <span>‹</span>
                        </button>

                        <div className="testimonial-content">
                            <p className="testimonial-text">Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way</p>
                            <div className="testimonial-author">
                                <p className="author-name">Avinash Kumar</p>
                            </div>
                        </div>

                        <button className="slider-btn next-btn">
                            <span>›</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="app-download">
                <div className="container">
                    <div className="download-content">
                        <div className="download-image">
                            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="Practo App" style={{height: '100px'}} />
                        </div>

                        <div className="download-text">
                            <h2 className="download-title">Download the Practo app</h2>
                            <p className="download-desc">Access video consultation with India's top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                            
                            <div className="download-form">
                                <h3 className="form-title">Get the link to download the app</h3>
                                <div className="phone-input-group">
                                    <div className="country-code">+91</div>
                                    <input type="tel" className="phone-input" placeholder="Enter phone number" />
                                    <button className="send-sms-btn">Send SMS</button>
                                </div>
                            </div>

                            <div className="app-buttons">
                                <a href="#" className="app-btn google-play">
                                    <span className="play-icon">▶</span>
                                    <span className="btn-text">Google Play</span>
                                </a>
                                <a href="#" className="app-btn app-store">
                                    <span className="apple-icon"></span>
                                    <span className="btn-text">App Store</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
