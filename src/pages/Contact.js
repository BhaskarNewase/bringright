// Contact Page Component
import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    service: '',
    subject: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      service: '',
      subject: '',
      message: '',
      newsletter: false,
      privacy: false
    });
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="page-title">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#home">Home</a></li>
                  <li className="breadcrumb-item active">Contact Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Get In Touch With Us</h2>
            <p className="section-subtitle">We're here to help you with all your global trade needs</p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Visit Our Office</h4>
                <p>YASHLAXMI S.NO. 54, NEAR PRANIT COMPUTER<br />
                Karvenagar, Pune, Maharashtra<br />
                India, 411052</p>
                <a href="https://maps.google.com/?q=18.5204,73.8567" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-directions me-1"></i>Get Directions
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>Call Us</h4>
                <p>Phone: <a href="tel:+911234567890">+91 1234567890</a><br />
                Fax: +91 1234567891<br />
                Toll Free: 1800-123-4567</p>
                <a href="tel:+911234567890" className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-phone me-1"></i>Call Now
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>General: <a href="mailto:contact@bringrightinternational.com">contact@bringrightinternational.com</a><br />
                Sales: <a href="mailto:sales@bringrightinternational.com">sales@bringrightinternational.com</a><br />
                Support: <a href="mailto:support@bringrightinternational.com">support@bringrightinternational.com</a></p>
                <a href="mailto:contact@bringrightinternational.com" className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-envelope me-1"></i>Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="contact-form-wrapper">
                <h3 className="mb-4">Send Us a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country" className="form-label">Country</label>
                      <select 
                        className="form-select" 
                        id="country" 
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="service" className="form-label">Service Interest</label>
                      <select 
                        className="form-select" 
                        id="service" 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Service</option>
                        <option value="import">Import Services</option>
                        <option value="export">Export Services</option>
                        <option value="logistics">Logistics Management</option>
                        <option value="consultation">Trade Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea 
                        className="form-control" 
                        id="message" 
                        name="message" 
                        rows="6" 
                        value={formData.message}
                        onChange={handleInputChange}
                        required 
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="newsletter" 
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="newsletter">
                          Subscribe to our newsletter for trade insights and updates
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="privacy" 
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          required 
                        />
                        <label className="form-check-label" htmlFor="privacy">
                          I agree to the Privacy Policy and Terms of Service *
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="fas fa-paper-plane me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              {/* WhatsApp Card */}
              <div className="whatsapp-card mb-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="whatsapp-icon mb-3">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <h5>WhatsApp Support</h5>
                    <p>Get instant support and quick responses to your queries</p>
                    <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg w-100">
                      <i className="fab fa-whatsapp me-2"></i>Start WhatsApp Chat
                    </a>
                    <small className="text-muted d-block mt-2">Available 24/7</small>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="office-hours-card">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-clock me-2"></i>Office Hours
                    </h5>
                    <ul className="list-unstyled office-hours">
                      <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                      <li><strong>Saturday:</strong> 9:00 AM - 2:00 PM</li>
                      <li><strong>Sunday:</strong> Closed</li>
                    </ul>
                    <div className="timezone-info">
                      <small className="text-muted">
                        <i className="fas fa-globe me-1"></i>Indian Standard Time (IST)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2674633970143!2d73.85438997496152!3d18.520430282557866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BRINGRIGHT International Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;