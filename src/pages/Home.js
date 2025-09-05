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

  const [showProductPopup, setShowProductPopup] = useState(false);

  // Product categories for popup
  const productCategories = [
    {
      title: "Agricultural Products",
      items: ["Onion", "Basmati Rice", "Wheat", "Spices", "Tea", "Coffee", "Pulses", "Cotton", "Sugar"],
      icon: "fas fa-seedling",
      color: "#28a745"
    },
    {
      title: "Frozen Food Products",
      items: ["Frozen Vegetables", "Frozen Fruits", "Frozen Meat", "Frozen Seafood", "Ready-to-Eat Meals", "Ice Cream"],
      icon: "fas fa-snowflake",
      color: "#17a2b8"
    },
    {
      title: "Candles & Home Decor",
      items: ["Scented Candles", "Decorative Candles", "Religious Candles", "Aromatherapy Candles", "LED Candles", "Candle Holders"],
      icon: "fas fa-fire",
      color: "#ffc107"
    },
    {
      title: "Textiles and Apparel",
      items: ["Cotton Fabrics", "Silk Products", "Handloom Items", "Garments", "Home Textiles", "Handicrafts"],
      icon: "fas fa-tshirt",
      color: "#6f42c1"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 1, countries: 5, clients: 5, support: 24 };
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

    // Show popup after 3 seconds
    const popupTimer = setTimeout(() => {
      setShowProductPopup(true);
    }, 3000);

    return () => clearTimeout(popupTimer);
  }, []);

  const closePopup = () => {
    setShowProductPopup(false);
  };

  const handleContactRedirect = () => {
    setShowProductPopup(false);  // Close popup first
    window.location.href = '/contact';  // Then redirect
  };

  return (
    <div>
      {/* Product Highlight Popup */}
      {showProductPopup && (
        <div className="product-popup-overlay" onClick={closePopup}>
          <div className="product-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3><i className="fas fa-star text-warning me-2"></i>Our Product Portfolio</h3>
              <button className="popup-close-btn" onClick={closePopup}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="popup-body">
              <p className="popup-intro">Discover our comprehensive range of export-import products across multiple sectors</p>
              <div className="product-categories">
                {productCategories.map((category, index) => (
                  <div key={index} className="category-item">
                    <div className="category-header">
                      <i className={category.icon} style={{color: category.color}}></i>
                      <h5>{category.title}</h5>
                    </div>
                    <div className="category-products">
                      {category.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="product-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="popup-footer">
                <button className="btn btn-primary me-2" onClick={handleContactRedirect}>
                  <i className="fas fa-phone me-1"></i>Contact Us for More Details
                </button>
                <button className="btn btn-outline-secondary" onClick={handleContactRedirect}>
                  <i className="fas fa-download me-1"></i>Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <a href="https://wa.me/+919975349144" className="btn btn-success btn-sm" target="_blank" rel="noopener noreferrer">
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
                <a href="contact" className="btn btn-primary btn-sm">
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
                <a href="contact" className="btn btn-info btn-sm">
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
                <a href="contact" className="btn btn-warning btn-sm">
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

      {/* Sectors Section - Updated with New Sectors */}
      <section className="sectors-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Import and Export Sectors</h2>
            <p className="section-subtitle">We specialize in various industry sectors with proven expertise</p>
            <button 
              className="btn btn-outline-primary mt-3" 
              onClick={() => setShowProductPopup(true)}
            >
              <i className="fas fa-eye me-2"></i>View All Products
            </button>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image agricultural">
                  <i className="fas fa-seedling sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Agricultural Products</h4>
                  <p>Premium quality agricultural products including rice, spices, pulses, and organic produce for global markets.</p>
                  <a href="#products" className="sector-link">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image frozen-food">
                  <i className="fas fa-snowflake sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Frozen Food Products</h4>
                  <p>High-quality frozen vegetables, fruits, seafood, and ready-to-eat meals with maintained cold chain.</p>
                  <a href="#products" className="sector-link">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sector-card">
                <div className="sector-image candles">
                  <i className="fas fa-fire sector-icon"></i>
                </div>
                <div className="sector-content">
                  <h4>Candles & Home Decor</h4>
                  <p>Artisan crafted candles, aromatherapy products, and decorative items for international retail markets.</p>
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

      <style jsx>{`
        /* Popup Styles */
        .product-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          padding: 20px;
        }

        .product-popup-content {
          background: white;
          border-radius: 15px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: popupSlideIn 0.3s ease-out;
        }

        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 25px;
          border-bottom: 2px solid #f8f9fa;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px 15px 0 0;
        }

        .popup-header h3 {
          margin: 0;
          font-weight: 600;
        }

        .popup-close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }

        .popup-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .popup-body {
          padding: 25px;
        }

        .popup-intro {
          font-size: 16px;
          color: #6c757d;
          text-align: center;
          margin-bottom: 25px;
        }

        .product-categories {
          display: grid;
          gap: 20px;
        }

        .category-item {
          border: 1px solid #e9ecef;
          border-radius: 10px;
          padding: 20px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .category-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .category-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .category-header i {
          font-size: 20px;
          margin-right: 12px;
        }

        .category-header h5 {
          margin: 0;
          font-weight: 600;
          color: #495057;
        }

        .category-products {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .product-tag {
          background: #f8f9fa;
          color: #495057;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 12px;
          border: 1px solid #dee2e6;
          transition: background-color 0.2s;
        }

        .product-tag:hover {
          background: #e9ecef;
        }

        .popup-footer {
          text-align: center;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        /* New Sector Styles */
        .sector-image.agricultural {
          background: linear-gradient(135deg, #56ab2f, #a8e6cf);
        }

        .sector-image.frozen-food {
          background: linear-gradient(135deg, #74b9ff, #0984e3);
        }

        .sector-image.candles {
          background: linear-gradient(135deg, #fdcb6e, #e17055);
        }

        @media (max-width: 768px) {
          .product-popup-content {
            margin: 10px;
            max-height: 95vh;
          }
          
          .popup-header,
          .popup-body {
            padding: 15px;
          }
          
          .popup-footer .btn {
            display: block;
            width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;