import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FindDoctor = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/styles/Find-doctor.css';
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    return (
        <>
            <Navbar />
            
            <section className="hero-banner">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-main-title">Skip the travel!</h1>
                        <h2 className="hero-subtitle">Take Online Doctor Consultation</h2>
                        <p className="hero-desc">Private consultation + Audio call · Starts at just ₹199</p>
                        
                        <div className="doctors-online">
                            <p className="doctors-count">+154 Doctors are online 🟢</p>
                        </div>
                        
                        <button className="cta-btn primary">Consult Now</button>
                        
                        <div className="hero-features">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span className="feature-text">Verified Doctors</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">📄</span>
                                <span className="feature-text">Digital Prescription</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">💬</span>
                                <span className="feature-text">Free Followup</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero-image">
                        <img src="https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png" alt="Woman consulting online" style={{width: '500px'}} />
                    </div>
                </div>
            </section>

            <section className="specialities-section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">25+ Specialities</h2>
                        <p className="section-subtitle">Consult with top doctors across specialities</p>
                    </div>
                    <button className="see-all-btn">See all Specialities</button>
                </div>
                
                <div className="specialities-grid">
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg" alt="Gynaecology" />
                        </div>
                        <h3 className="speciality-name">Gynaecology</h3>
                        <p className="speciality-price">₹599</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                    
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="Sexology" />
                        </div>
                        <h3 className="speciality-name">Sexology</h3>
                        <p className="speciality-price">₹599</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                    
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg" alt="General physician" />
                        </div>
                        <h3 className="speciality-name">General physician</h3>
                        <p className="speciality-price">₹499</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                    
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg" alt="Dermatology" />
                        </div>
                        <h3 className="speciality-name">Dermatology</h3>
                        <p className="speciality-price">₹549</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                    
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg" alt="Psychiatry" />
                        </div>
                        <h3 className="speciality-name">Psychiatry</h3>
                        <p className="speciality-price">₹599</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                    
                    <div className="speciality-card">
                        <div className="speciality-icon">
                            <img src="https://www.practo.com/consult/static/images/top-speciality-stomach.svg" alt="Stomach and digestion" />
                        </div>
                        <h3 className="speciality-name">Stomach and digestion</h3>
                        <p className="speciality-price">₹499</p>
                        <a href="#" className="speciality-link">Consult now ›</a>
                    </div>
                </div>
            </section>

            <section className="health-concerns-section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Common Health Concerns</h2>
                        <p className="section-subtitle">Consult a doctor online for any health issue</p>
                    </div>
                    <button className="see-all-btn">See All Symptoms</button>
                </div>
                
                <div className="concerns-grid">
                    <div className="concern-card">
                        <img src="https://www.practo.com/consult/static/images/cough-cold-v1.jpg" alt="Cough & Cold" className="concern-image" />
                        <div className="concern-content">
                            <h3 className="concern-title">Cough & Cold?</h3>
                            <p className="concern-price">₹ 499</p>
                            <a href="#" className="concern-link">Consult Now ›</a>
                        </div>
                    </div>
                    
                    <div className="concern-card">
                        <img src="https://www.practo.com/consult/static/images/period-problems-v1.jpg" alt="Period problems" className="concern-image" />
                        <div className="concern-content">
                            <h3 className="concern-title">Period problems?</h3>
                            <p className="concern-price">₹ 599</p>
                            <a href="#" className="concern-link">Consult Now ›</a>
                        </div>
                    </div>
                    
                    <div className="concern-card">
                        <img src="https://www.practo.com/consult/static/images/performance-issues-bed-v1.jpg" alt="Performance issues in bed" className="concern-image" />
                        <div className="concern-content">
                            <h3 className="concern-title">Performance issues in bed?</h3>
                            <p className="concern-price">₹ 599</p>
                            <a href="#" className="concern-link">Consult Now ›</a>
                        </div>
                    </div>
                    
                    <div className="concern-card">
                        <img src="https://www.practo.com/consult/static/images/skin-problems-v1.jpg" alt="Skin problems" className="concern-image" />
                        <div className="concern-content">
                            <h3 className="concern-title">Skin problems?</h3>
                            <p className="concern-price">₹ 549</p>
                            <a href="#" className="concern-link">Consult Now ›</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offers-section">
                <h2 className="section-title">Offers</h2>
                
                <div className="offers-grid">
                    <div className="offer-card mint">
                        <span className="offer-badge">OFFER</span>
                        <h3 className="offer-title">Download the App & get ₹200 HealthCash</h3>
                        <a href="#" className="offer-btn">Download App ⚪</a>
                        <img src="https://www.practo.com/consult/static/images/offer-app-v1.png" alt="App preview" className="offer-image" />
                    </div>
                    
                    <div className="offer-card orange">
                        <span className="offer-badge">OFFER</span>
                        <h3 className="offer-title">Consult with specialists at just ₹199</h3>
                        <a href="#" className="offer-btn">Consult Now ⚪</a>
                        <img src="https://www.practo.com/consult/static/images/offer-specialist-v1.png" alt="Doctor" className="offer-doctor" />
                    </div>
                </div>
            </section>

            <section className="doctors-section">
                <h2 className="section-title">Our Doctors</h2>
                
                <div className="doctors-carousel">
                    <div className="doctor-card">
                        <img src="https://www.practostatic.com/images1-fabric/doctor/1083576/dr-g-arun-68e59b0c838c0.jpg" alt="Dr.pic" className="doctor-photo" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr. Murali Reddy</h3>
                            <p className="doctor-specialty">Dermatologist</p>
                            <p className="doctor-experience">8 years experience</p>
                            <p className="doctor-consults">72883 consults done</p>
                        </div>
                    </div>
                    
                    <div className="doctor-card">
                        <img src="https://www.practostatic.com/images1-fabric/doctor/1060960/dr-amandeep-676e53f8839c4.jpg" alt="Dr. pic" className="doctor-photo" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr. Amandeep</h3>
                            <p className="doctor-specialty">Dermatologist</p>
                            <p className="doctor-experience">6 years experience</p>
                            <p className="doctor-consults">27024 consults done</p>
                        </div>
                    </div>
                    
                    <div className="doctor-card">
                        <img src="https://www.practostatic.com/images1-fabric/doctor/679165/dr-arpita-6791ca6fde5cd.jpg" alt="Dr.pic" className="doctor-photo" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr. Arpita</h3>
                            <p className="doctor-specialty">Dermatologist</p>
                            <p className="doctor-experience">14 years experience</p>
                            <p className="doctor-consults">43492 consults done</p>
                        </div>
                    </div>
                    
                    <div className="doctor-card">
                        <img src="https://www.practostatic.com/images1-fabric/doctor/647391/dr-kamal-kishore-verma-5d69f93f40699.jpg" alt="Dr.pic" className="doctor-photo" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">Dr. Pushpa Gour</h3>
                            <p className="doctor-specialty">Gynecologist</p>
                            <p className="doctor-experience">32 years experience</p>
                            <p className="doctor-consults">51539 consults done</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works-section">
                <h2 className="section-title centered">How it works</h2>
                
                <div className="steps-container">
                    <div className="step">
                        <div className="step-icon">
                            <span>🔍</span>
                        </div>
                        <p className="step-text">Select a speciality or symptom</p>
                    </div>
                    
                    <div className="step-connector"></div>
                    
                    <div className="step">
                        <div className="step-icon">
                            <span>💬</span>
                        </div>
                        <p className="step-text">Audio/video call with a verified doctor</p>
                    </div>
                    
                    <div className="step-connector"></div>
                    
                    <div className="step">
                        <div className="step-icon">
                            <span>📝</span>
                        </div>
                        <p className="step-text">Get a digital prescription & a free follow-up</p>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <h3 className="stat-number">2,00,000+</h3>
                        <p className="stat-label">Happy Users</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">20,000+</h3>
                        <p className="stat-label">Verified Doctors</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">25+</h3>
                        <p className="stat-label">Specialities</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">4.5 / 5</h3>
                        <p className="stat-label">App Rating</p>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <h2 className="section-title">Benefits of Online Consultation</h2>
                
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <h3 className="benefit-title">✓ Consult Top Doctors 24x7</h3>
                        <p className="benefit-desc">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                    </div>
                    
                    <div className="benefit-item">
                        <h3 className="benefit-title">✓ Convenient and Easy</h3>
                        <p className="benefit-desc">Start an instant consultation within 2 minutes or do video consultation at the scheduled time.</p>
                    </div>
                    
                    <div className="benefit-item">
                        <h3 className="benefit-title">✓ 100% Safe Consultations</h3>
                        <p className="benefit-desc">Be assured that your online consultation will be fully private and secured.</p>
                    </div>
                    
                    <div className="benefit-item">
                        <h3 className="benefit-title">✓ Similar Clinic Experience</h3>
                        <p className="benefit-desc">Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Practo app.</p>
                    </div>
                    
                    <div className="benefit-item">
                        <h3 className="benefit-title">✓ Free Follow-up</h3>
                        <p className="benefit-desc">Get a valid digital prescription and a 7-day, free follow-up for further clarifications.</p>
                    </div>
                </div>
            </section>

            <section className="video-experience-section">
                <h2 className="section-title">Experience online doctor consultations</h2>
                
                <div className="video-grid">
                    <div className="video-card">
                        <div className="video-thumbnail">
                            <img src="" alt="Video thumbnail" />
                            <button className="play-button">▶</button>
                        </div>
                        <h3 className="video-title">#HelloDoctor Consult a doctor online from</h3>
                    </div>
                    
                    <div className="video-card">
                        <div className="video-thumbnail">
                            <img src="" alt="Video thumbnail" />
                            <button className="play-button">▶</button>
                        </div>
                        <h3 className="video-title">#HelloDoctor Consult a doctor online from</h3>
                    </div>
                    
                    <div className="video-card">
                        <div className="video-thumbnail">
                            <img src="" alt="Video thumbnail" />
                            <button className="play-button">▶</button>
                        </div>
                        <h3 className="video-title">Video Consult with Top Doctors Online</h3>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2 className="section-title">What our users say about their online consultation experience</h2>
                
                <div className="testimonials-carousel">
                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <img src="https://www.practo.com/consult/static/images/testimonial-abhy-v1.png" alt="Abhy" className="user-avatar" />
                            <div className="user-info">
                                <h4 className="user-name">Abhy</h4>
                                <p className="user-detail">33 yr old IT Professional</p>
                            </div>
                        </div>
                        <p className="testimonial-text">I was really sick and <strong>couldn't get out of bed.</strong> I talked to the doctor through Practo and he shared a <strong>prescription in 10 minutes.</strong> I even got the <strong>medicines delivered on the same day</strong> through Practo, just a WOW experience.</p>
                    </div>
                    
                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <img src="https://www.practo.com/consult/static/images/testimonial-default-women-v1.png" alt="Preeti" className="user-avatar" />
                            <div className="user-info">
                                <h4 className="user-name">Preeti</h4>
                                <p className="user-detail">26 yr old IT Professional</p>
                            </div>
                        </div>
                        <p className="testimonial-text">I was <strong>in pain</strong> and it was really <strong>late at night.</strong> I wanted help but couldn't go to see the doctor due to lateness of the hour. Consulted online on Practo and <strong>doctor responded immediately.</strong></p>
                    </div>
                    
                    <div className="testimonial-card">
                        <div className="testimonial-header">
                            <img src="https://www.practo.com/consult/static/images/testimonial-deepak-v1.png" alt="Deepak" className="user-avatar" />
                            <div className="user-info">
                                <h4 className="user-name">Deepak</h4>
                                <p className="user-detail">29 yr old traveller</p>
                            </div>
                        </div>
                        <p className="testimonial-text">I was travelling to a <strong>remote place</strong> for scuba diving and <strong>injured myself.</strong> Tough to find doctors around, so <strong>did an online consultation</strong> on Practo and hey presto, I have <strong>my medicines.</strong> Disruptive. Convenient.</p>
                    </div>
                </div>
                
                <div className="carousel-indicators">
                    <span className="indicator active"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                </div>
            </section>

            <section className="faqs-section">
                <h2 className="section-title">FAQs</h2>
                
                <div className="faqs-grid">
                    <div className="faq-item">
                        <h3 className="faq-question">▸ What is online doctor consultation?</h3>
                        <p className="faq-answer">Online doctor consultation or online medical consultation is a method .... <a href="#">Read More</a></p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className="faq-question">▸ How do I start online consultation with doctors on Practo?</h3>
                        <p className="faq-answer">Starting an online doctor consultation is very simple on Practo. Follo.... <a href="#">Read More</a></p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className="faq-question">▸ Are your online doctors qualified?</h3>
                        <p className="faq-answer">We follow a strict verification process for every doctor providing onl.... <a href="#">Read More</a></p>
                    </div>
                    
                    <div className="faq-item">
                        <h3 className="faq-question">▸ Is online doctor consultation safe and secured on Practo?</h3>
                        <p className="faq-answer">The privacy of our patients is critical to us, and thus, we are compli.... <a href="#">Read More</a></p>
                    </div>
                </div>
            </section>

            <section className="final-cta-section">
                <div className="final-cta-content">
                    <h2 className="final-cta-title">Still delaying your health concerns ?</h2>
                    <p className="final-cta-text">Connect with India's top doctors online</p>
                </div>
                <button className="cta-btn primary large">Consult Now</button>
            </section>

            <section className="app-download-section">
                <div className="app-download-container">
                    <div className="app-preview">
                        <img src="https://www.practo.com/consult/static/images/app-download-banner-web.png" alt="Practo app preview" />
                    </div>
                    
                    <div className="app-download-content">
                        <h2 className="app-download-title">Download the Practo app</h2>
                        <p className="app-download-subtitle">Get ₹200 HealthCash</p>
                        
                        <ul className="app-features">
                            <li>✓ Video consult with Doctors</li>
                            <li>✓ Live medicine order tracking</li>
                            <li>✓ Exclusive healthcare packages</li>
                            <li>✓ Ask free questions</li>
                        </ul>
                        
                        <div className="app-link-form">
                            <p className="form-label">Get the link to download the app</p>
                            <div className="phone-input-group">
                                <span className="country-code">+91</span>
                                <input type="tel" placeholder="Enter phone number" className="phone-input" />
                                <button className="send-link-btn">Send app link</button>
                            </div>
                        </div>
                        
                        <div className="store-buttons">
                            <img src="" alt="Get it on Google Play" />
                            <img src="" alt="Download on App Store" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default FindDoctor;
