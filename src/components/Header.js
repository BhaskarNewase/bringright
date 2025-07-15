import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { id: '/', label: 'Home' },
    { id: '/about', label: 'About Us' },
    { id: '/services', label: 'Our Services' },
    { id: '/products', label: 'Our Products' },
    { id: '/gallery', label: 'Gallery' },
    { id: '/blog', label: 'Blog' },
    { id: '/careers', label: 'Careers' },
    { id: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #1a5276, #2980b9)',
        color: 'white',
        padding: '12px 0',
        fontSize: '0.9rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            {/* Contact Information */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '25px',
              flexWrap: 'wrap'
            }}>
              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <a 
                  href="mailto:contact@bringrightinternational.com" 
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffd54f';
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  contact@bringrightinternational.com
                </a>
              </div>

              {/* Phone */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem'
                }}>
                  <i className="fas fa-phone"></i>
                </div>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.85rem'
                }}>
                  +91 9975349144 / 8888653131 / 9579670950
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              {[
                { 
                  href: 'https://www.linkedin.com/company/bring-right-international-pvt-ltd', 
                  icon: 'fab fa-linkedin-in', 
                  name: 'LinkedIn',
                  color: '#0077B5'
                },
                { 
                  href: 'https://www.instagram.com/bringright_international/', 
                  icon: 'fab fa-instagram', 
                  name: 'Instagram',
                  color: '#E4405F'
                },
                { 
                  href: 'https://x.com/BringrightI', 
                  icon: 'fab fa-twitter', 
                  name: 'Twitter',
                  color: '#1DA1F2'
                },
                { 
                  href: 'https://www.facebook.com/profile.php?id=61576672798002', 
                  icon: 'fab fa-facebook-f', 
                  name: 'Facebook',
                  color: '#1877F2'
                },
                { 
                  href: 'https://www.youtube.com/@Bringrightinternational', 
                  icon: 'fab fa-youtube', 
                  name: 'YouTube',
                  color: '#FF0000'
                }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = `0 4px 15px ${social.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'white',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '15px 0',
            position: 'relative'
          }}>
            {/* Logo */}
            <Link 
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                textDecoration: 'none',
                color: '#1a5276',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src="./logo.png" 
                alt="BRINGRIGHT International Logo" 
                style={{
                  height: '50px',
                  width: 'auto',
                  transition: 'all 0.3s ease'
                }}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <span style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1a5276',
                  lineHeight: '1.2'
                }}>
                  Bringright International
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  fontWeight: '500'
                }}>
                  Pvt Ltd
                </span>
              </div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              style={{
                display: 'none',
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 12px',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '1.2rem'
              }}
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 4px 15px rgba(26, 82, 118, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* Desktop Navigation */}
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
            className="desktop-nav">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <Link 
                    to={item.id}
                    style={{
                      display: 'block',
                      padding: '12px 18px',
                      color: location.pathname === item.id ? '#1a5276' : '#666',
                      textDecoration: 'none',
                      fontWeight: location.pathname === item.id ? '600' : '500',
                      fontSize: '0.95rem',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                      background: location.pathname === item.id ? 'rgba(26, 82, 118, 0.1)' : 'transparent'
                    }}
                    onMouseOver={(e) => {
                      if (location.pathname !== item.id) {
                        e.target.style.color = '#1a5276';
                        e.target.style.background = 'rgba(26, 82, 118, 0.05)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (location.pathname !== item.id) {
                        e.target.style.color = '#666';
                        e.target.style.background = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                    {location.pathname === item.id && (
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #1a5276, #2980b9)',
                        borderRadius: '1px'
                      }} />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: '0 0 15px 15px',
              overflow: 'hidden',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
              opacity: isMenuOpen ? 1 : 0,
              visibility: isMenuOpen ? 'visible' : 'hidden',
              transition: 'all 0.3s ease',
              zIndex: 1000
            }}
            className="mobile-nav">
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: '10px 0',
                display: 'flex',
                flexDirection: 'column'
              }}>
                {navItems.map((item, index) => (
                  <li key={item.id}>
                    <Link 
                      to={item.id}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '15px 25px',
                        color: location.pathname === item.id ? '#1a5276' : '#666',
                        textDecoration: 'none',
                        fontWeight: location.pathname === item.id ? '600' : '500',
                        fontSize: '1rem',
                        borderLeft: location.pathname === item.id ? '4px solid #1a5276' : '4px solid transparent',
                        background: location.pathname === item.id ? 'rgba(26, 82, 118, 0.05)' : 'transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(26, 82, 118, 0.05)';
                        e.target.style.paddingLeft = '30px';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = location.pathname === item.id ? 'rgba(26, 82, 118, 0.05)' : 'transparent';
                        e.target.style.paddingLeft = '25px';
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: block !important;
          }
          
          .mobile-nav {
            display: block !important;
          }
        }

        @media (min-width: 993px) {
          .mobile-nav {
            display: none !important;
          }
          
          .mobile-menu-toggle {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          /* Top Bar Responsive */
          div[style*="display: flex"][style*="gap: 25px"] {
            flex-direction: column !important;
            gap: 15px !important;
            align-items: flex-start !important;
          }
          
          div[style*="justify-content: space-between"] {
            flex-direction: column !important;
            gap: 15px !important;
            align-items: center !important;
          }
          
          /* Logo Responsive */
          div[style*="display: flex"][style*="gap: 15px"] img {
            height: 40px !important;
          }
          
          div[style*="fontSize: '1.4rem'"] {
            font-size: 1.2rem !important;
          }
          
          /* Social Icons Responsive */
          div[style*="gap: 12px"] {
            gap: 8px !important;
          }
          
          div[style*="width: '36px'"] {
            width: 32px !important;
            height: 32px !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 576px) {
          /* Extra small devices */
          div[style*="padding: '0 20px'"] {
            padding: 0 15px !important;
          }
          
          /* Email responsive - hide on very small screens */
          div[style*="gap: '25px'"] > div:first-child {
            display: none !important;
          }
          
          /* Show only phone number */
          div[style*="gap: '25px'"] > div:last-child {
            display: flex !important;
          }
          
          /* Smaller social icons */
          div[style*="width: '32px'"] {
            width: 28px !important;
            height: 28px !important;
            font-size: 0.8rem !important;
          }
          
          /* Company name smaller */
          div[style*="fontSize: '1.2rem'"] {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          /* Very small devices */
          div[style*="padding: '12px 0'"] {
            padding: 8px 0 !important;
          }
          
          div[style*="padding: '15px 0'"] {
            padding: 12px 0 !important;
          }
          
          /* Hide company subtitle on very small screens */
          span[style*="fontSize: '0.85rem'"] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;