import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.modern-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/bring-right-international-pvt-ltd', 
      icon: '💼',
      color: '#0077B5' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/bringright_international', 
      icon: '📷',
      color: '#E4405F' 
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/BringrightI', 
      icon: '🐦',
      color: '#1DA1F2' 
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61576672798002', 
      icon: '📘',
      color: '#1877F2' 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@bringright-international', 
      icon: '📺',
      color: '#FF0000' 
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Import Services', href: '/services' },
    { name: 'Export Solutions', href: '/services' },
    { name: 'Logistics Support', href: '/services' },
    { name: 'Trade Consultation', href: '/services' },
    { name: 'Warehousing', href: '/services' },
    { name: 'Supply Chain', href: '/services' }
  ];

  return (
    <footer 
      className="modern-footer"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.03'%3E%3Cpath d='M11.1 44a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0zm35.4 20a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0z' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.1
      }} />

      {/* Top Wave */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        background: 'linear-gradient(135deg, #1a5276, #2980b9)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)'
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 20px 40px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Company Info */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
            transitionDelay: '0.1s'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1a5276, #2980b9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '20px',
              display: 'inline-block'
            }}>
              Bringright International Pvt Ltd
            </div>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '25px',
              fontSize: '1rem'
            }}>
              Your trusted partner in global trade since 1994. Star Export House with international certifications, connecting markets across continents.
            </p>

            {/* Company Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              marginBottom: '25px'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '15px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#64b5f6' }}>1+</div>
                <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Years</div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '15px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#81c784' }}>5+</div>
                <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Countries</div>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '15px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffb74d' }}>5+</div>
                <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>Clients</div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '45px',
                    height: '45px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontSize: '1.2rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.transform = 'translateY(-3px) scale(1.1)';
                    e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
            transitionDelay: '0.2s'
          }}>
            <h5 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '25px',
              color: '#64b5f6',
              position: 'relative'
            }}>
              Quick Links
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #64b5f6, #2196f3)'
              }} />
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link, index) => (
                <li key={link.name} style={{ marginBottom: '12px' }}>
                  <Link
                    to={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '5px 0',
                      fontSize: '0.95rem'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#64b5f6';
                      e.target.style.paddingLeft = '10px';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    <span style={{ fontSize: '0.8rem' }}>▶</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
            transitionDelay: '0.3s'
          }}>
            <h5 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '25px',
              color: '#81c784',
              position: 'relative'
            }}>
              Our Services
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #81c784, #4caf50)'
              }} />
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, index) => (
                <li key={service.name} style={{ marginBottom: '12px' }}>
                  <Link
                    to={service.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '5px 0',
                      fontSize: '0.95rem'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = '#81c784';
                      e.target.style.paddingLeft = '10px';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    <span style={{ fontSize: '0.8rem' }}>▶</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
            transitionDelay: '0.4s'
          }}>
            <h5 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '25px',
              color: '#ffb74d',
              position: 'relative'
            }}>
              Contact Information
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '30px',
                height: '2px',
                background: 'linear-gradient(90deg, #ffb74d, #ff9800)'
              }} />
            </h5>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #ff7043, #d84315)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📍
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>Address</div>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    YASHLAXMI S.NO. 54, NEAR PRANIT COMPUTER<br />
                    Karvenagar, Pune, Maharashtra, India, 411052
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '15px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #42a5f5, #1976d2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  📧
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>Email</div>
                  <a 
                    href="mailto:contact@bringrightinternational.com"
                    style={{
                      color: '#64b5f6',
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                    onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                    onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                  >
                    contact@bringrightinternational.com
                  </a>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #66bb6a, #388e3c)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}>
                  📞
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>Phone</div>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    fontSize: '0.9rem'
                  }}>
                    +91 9975349144 / 8888653131 / 9579670950
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease',
          transitionDelay: '0.5s'
        }}>
          <p style={{
            margin: 0,
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem'
          }}>
            © {currentYear} Bringright International Pvt Ltd. All Rights Reserved.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            {/* <div style={{
              background: 'linear-gradient(135deg, #ffd54f, #ff8f00)',
              color: '#1a1a2e',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              ⭐ Star Export House
            </div> */}
            <div style={{
              background: 'linear-gradient(135deg, #81c784, #388e3c)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}>
              🏆 CRISIL & ICRA Rated
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <a
          href="https://wa.me/919975349144"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #25d366, #128c7e)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.8rem',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 12px 35px rgba(37, 211, 102, 0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
          }}
        >
          💬
        </a>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3); }
          50% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6); }
          100% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3); }
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns: 2fr 1fr 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 10px !important;
          }
          
          div[style*="display: flex"][style*="justify-content: space-between"] {
            flex-direction: column !important;
            text-align: center !important;
            gap: 20px !important;
          }
          
          div[style*="display: flex"][style*="gap: 15px"][style*="flex-wrap: wrap"] {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 80px 20px 40px"] {
            padding: 60px 15px 30px !important;
          }
          
          div[style*="padding: 15px"] {
            padding: 12px !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;