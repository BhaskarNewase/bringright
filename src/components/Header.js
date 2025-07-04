import React, { useState, useEffect } from 'react';

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'products', label: 'Our Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <a href="mailto:contact@bringrightinternational.com" className="email-link">
                  <i className="fas fa-envelope"></i>
                  contact@bringrightinternational.com
                </a><br/>
                <span className="phone-link">
                  <i className="fas fa-phone"></i>
                  +91 9975349144/8888653131/9579670950
                </span>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/bring-right-international-pvt-ltd" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/bringright_international/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/BringrightI" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61576672798002" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@Bringrightinternational" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#" onClick={() => setCurrentPage('home')}>
              <img src="./logo.png" alt="BRINGRIGHT International Logo" className="logo-img" />
              <span className="company-name">Bringright International Pvt Ltd</span>
            </a>

            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                {navItems.map(item => (
                  <li key={item.id} className="nav-item">
                    <a 
                      className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;