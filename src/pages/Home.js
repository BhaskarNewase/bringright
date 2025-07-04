// Home Page Component
import React, { useState, useEffect } from 'react';
import RedesignedHeroSection from '../components/RedesignedHeroSection';

const Home = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    countries: 0,
    clients: 0,
    support: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 30, countries: 50, clients: 1000, support: 24 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const increment = targets[key] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= targets[key]) {
            current = targets[key];
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, interval);
      });
    };

    animateCounters();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <RedesignedHeroSection />

      {/* Quick Connect Section */}
      <section className="quick-connect-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Connect With Us</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="connect-card text-center h-100">
                <div className="connect-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h4>WhatsApp Connect</h4>
                <p>Get instant support and quick responses</p>
                <a href="https://wa.me/911234567890" className="btn btn-success btn-sm" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp me-1"></i>Chat Now
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="connect-card text-center h-100">
                <div className="connect-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>Call Scheduling</h4>
                <p>Schedule a consultation call with our experts</p>
                <a href="#contact" className="btn btn-primary btn-sm">
                  <i className="fas fa-calendar me-1"></i>Schedule Call
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="connect-card text-center h-100">
                <div className="connect-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Smart Email Form</h4>
                <p>Send us your inquiries through our contact form</p>
                <a href="#contact" className="btn btn-info btn-sm">
                  <i className="fas fa-paper-plane me-1"></i>Send Message
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="connect-card text-center h-100">
                <div className="connect-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <h4>Trade Alerts</h4>
                <p>Get notified about new export opportunities</p>
                <a href="#contact" className="btn btn-warning btn-sm">
                  <i className="fas fa-bell me-1"></i>Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive global trade solutions tailored to your business needs</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="fas fa-file-import"></i>
                </div>
                <h4>Import Services</h4>
                <p>Specialized import solutions to streamline your global sourcing operations and maximize efficiency.</p>
                <a href="#services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="fas fa-file-export"></i>
                </div>
                <h4>Export Services</h4>
                <p>Comprehensive export solutions to help you reach global markets and expand your business internationally.</p>
                <a href="#services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-card h-100">
                <div className="service-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <h4>Logistics Management</h4>
                <p>End-to-end logistics solutions to ensure your goods reach their destination safely and on time.</p>
                <a href="#services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="sectors-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Import and Export Sectors</h2>
            <p className="section-subtitle">We specialize in various industry sectors with proven expertise</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image petroleum">
                  <i className="fas fa-oil-can sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Petroleum Products</h4>
                  <p>Refined petroleum products with international quality standards and compliance.</p>
                  <a href="#products" className="sector-link">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image gems">
                  <i className="fas fa-gem sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Gems and Jewellery</h4>
                  <p>Premium quality gems and handcrafted jewellery for global luxury markets.</p>
                  <a href="#products" className="sector-link">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image textiles">
                  <i className="fas fa-tshirt sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Textiles and Apparel</h4>
                  <p>High-quality cotton, silk, and handloom products for international clients.</p>
                  <a href="#products" className="sector-link">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">{counters.experience}+</h3>
                <p className="stat-label">Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">{counters.countries}+</h3>
                <p className="stat-label">Countries Served</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">{counters.clients}+</h3>
                <p className="stat-label">Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <h3 className="stat-number">{counters.support}/7</h3>
                <p className="stat-label">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready to Expand Your Business Globally?</h3>
              <p className="mb-0">Let us help you navigate the complexities of international trade and grow your business worldwide.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-primary btn-lg">
                <i className="fas fa-rocket me-2"></i>Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;