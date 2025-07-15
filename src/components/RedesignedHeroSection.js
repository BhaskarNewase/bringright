import React, { useState, useEffect } from 'react';

const RedesignedHeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "5+", label: "Countries Served" },
    { number: "5+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const tradingPartners = [
    { country: "USA", flag: "🇺🇸", position: { top: "35%", left: "20%" } },
    { country: "UK", flag: "🇬🇧", position: { top: "25%", left: "48%" } },
    { country: "Germany", flag: "🇩🇪", position: { top: "22%", left: "52%" } },
    { country: "UAE", flag: "🇦🇪", position: { top: "45%", left: "60%" } },
    { country: "Saudi Arabia", flag: "🇸🇦", position: { top: "42%", left: "58%" } },
    { country: "India", flag: "🇮🇳", position: { top: "40%", left: "72%" } },
    { country: "China", flag: "🇨🇳", position: { top: "32%", left: "80%" } },
    { country: "Japan", flag: "🇯🇵", position: { top: "28%", left: "85%" } }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 50%, #f0f8ff 100%)',
      minHeight: '80vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 0'
    }}
    className="hero-section">
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.3'%3E%3Cpath d='M11.1 44a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0zm35.4 20a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0z' fill='%231a5276'/%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'float 20s ease-in-out infinite'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}
        className="hero-grid">
          {/* Left Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s ease-out'
          }}
          className="hero-content">
            {/* Main Headline */}
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                display: 'block',
                marginBottom: '10px'
              }}
              className="hero-subtitle">
                Since 2023
                 {/* • Star Export House */}
              </span>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: '700',
                color: '#1a5276',
                lineHeight: '1.1',
                margin: 0,
                marginBottom: '20px'
              }}
              className="hero-title">
                Connect to the{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  World of Trade
                </span>
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: '#2980b9',
                lineHeight: '1.6',
                margin: 0,
                marginBottom: '40px',
                maxWidth: '500px'
              }}
              className="hero-description">
                Your trusted partner in global import-export excellence, connecting businesses across 5+ countries worldwide
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '40px',
              flexWrap: 'wrap'
            }}
            className="hero-buttons">
              <button style={{
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(26, 82, 118, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap'
              }}
              className="btn-primary"
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(26, 82, 118, 0.3)';
              }}>
                <span>🚢</span> <span>Explore Products</span>
              </button>
              
              <button style={{
                background: 'transparent',
                color: '#1a5276',
                border: '2px solid #1a5276',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                whiteSpace: 'nowrap'
              }}
              className="btn-secondary"
              onMouseOver={(e) => {
                e.target.style.background = '#1a5276';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#1a5276';
                e.target.style.transform = 'translateY(0)';
              }}>
                <span>🌐</span> <span>Explore Services</span>
              </button>
            </div>

            {/* Rotating Stats */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '25px',
              border: '1px solid rgba(26, 82, 118, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
            className="hero-stats">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  📊
                </div>
                <div>
                  <div style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: '700',
                    color: '#1a5276',
                    lineHeight: '1'
                  }}>
                    {stats[currentStat].number}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#666',
                    fontWeight: '500'
                  }}>
                    {stats[currentStat].label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive World Map */}
          <div style={{
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s ease-out 0.3s'
          }}
          className="hero-map-container">
            {/* Main Container */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '30px',
              padding: '40px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(26, 82, 118, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="map-container">
              {/* Header */}
              <div style={{
                textAlign: 'center',
                marginBottom: '30px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#1a5276',
                  margin: 0,
                  marginBottom: '10px'
                }}>
                  We Serve Worldwide
                </h3>
                <p style={{
                  color: '#666',
                  margin: 0,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  Global trade network spanning 5+ countries
                </p>
              </div>

              {/* World Map Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #e3f2fd, #f0f8ff)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2px solid rgba(26, 82, 118, 0.1)'
              }}
              className="world-map">
                {/* Simplified World Map SVG */}
                <svg viewBox="0 0 1000 500" style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute'
                }}>
                  {/* Continents (simplified shapes) */}
                  <path d="M150 200 L300 180 L280 250 L200 280 L120 240 Z" fill="#d4e3f0" stroke="#1a5276" strokeWidth="1" opacity="0.8" />
                  <path d="M300 150 L450 140 L480 200 L420 250 L350 240 L280 180 Z" fill="#d4e3f0" stroke="#1a5276" strokeWidth="1" opacity="0.8" />
                  <path d="M500 180 L650 170 L680 220 L620 260 L550 250 L480 200 Z" fill="#d4e3f0" stroke="#1a5276" strokeWidth="1" opacity="0.8" />
                  <path d="M700 160 L850 150 L880 200 L820 240 L750 230 L680 180 Z" fill="#d4e3f0" stroke="#1a5276" strokeWidth="1" opacity="0.8" />
                  
                  {/* Trade Routes */}
                  <path d="M200 220 Q400 150 600 200 Q750 180 820 190" stroke="#f39c12" strokeWidth="3" fill="none" opacity="0.7" strokeDasharray="10,5">
                    <animate attributeName="stroke-dashoffset" values="0;-15" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M250 240 Q500 280 700 210" stroke="#27ae60" strokeWidth="3" fill="none" opacity="0.7" strokeDasharray="8,4">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.5s" repeatCount="indefinite" />
                  </path>
                </svg>

                {/* Trading Partner Flags */}
                {tradingPartners.map((partner, index) => (
                  <div
                    key={partner.country}
                    style={{
                      position: 'absolute',
                      top: partner.position.top,
                      left: partner.position.left,
                      width: 'clamp(30px, 5vw, 40px)',
                      height: 'clamp(30px, 5vw, 40px)',
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      animation: `pulse 2s ease-in-out infinite ${index * 0.2}s`,
                      border: '2px solid #1a5276'
                    }}
                    className="flag-icon"
                    title={partner.country}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.2)';
                      e.target.style.zIndex = '10';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.zIndex = '1';
                    }}
                  >
                    {partner.flag}
                  </div>
                ))}

                {/* Shipping Icons */}
                <div style={{
                  position: 'absolute',
                  top: '60%',
                  left: '30%',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  animation: 'float 3s ease-in-out infinite'
                }}
                className="shipping-icon">
                  🚢
                </div>
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  right: '25%',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  animation: 'float 2.5s ease-in-out infinite 1s'
                }}
                className="shipping-icon">
                  ✈️
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '60%',
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  animation: 'float 2s ease-in-out infinite 0.5s'
                }}
                className="shipping-icon">
                  🚛
                </div>
              </div>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px',
                marginTop: '25px'
              }}
              className="quick-stats">
                <div style={{
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700' }}>5+</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', opacity: '0.9' }}>Countries</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700' }}>24/7</div>
                  <div style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', opacity: '0.9' }}>Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        opacity: '0.2',
        animation: 'float 4s ease-in-out infinite'
      }}
      className="floating-element">
        🌐
      </div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        opacity: '0.2',
        animation: 'float 3.5s ease-in-out infinite 1.5s'
      }}
      className="floating-element">
        📦
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        /* Tablet Styles */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .hero-section {
            padding: 60px 0 !important;
            min-height: 70vh !important;
          }
          
          .map-container {
            padding: 30px !important;
          }
          
          .world-map {
            height: 250px !important;
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 0 !important;
            min-height: auto !important;
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
            gap: 10px !important;
          }
          
          .btn-primary, .btn-secondary {
            padding: 14px 24px !important;
            min-width: 140px !important;
          }
          
          .hero-stats {
            padding: 20px !important;
          }
          
          .map-container {
            padding: 25px !important;
          }
          
          .world-map {
            height: 200px !important;
          }
          
          .flag-icon {
            width: 30px !important;
            height: 30px !important;
          }
          
          .quick-stats {
            gap: 10px !important;
          }
          
          .quick-stats > div {
            padding: 12px !important;
          }
        }
        
        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .hero-section {
            padding: 30px 0 !important;
          }
          
          .hero-grid {
            gap: 30px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .btn-primary, .btn-secondary {
            width: 100% !important;
            max-width: 280px !important;
            justify-content: center !important;
          }
          
          .map-container {
            padding: 20px !important;
            border-radius: 20px !important;
          }
          
          .world-map {
            height: 180px !important;
            border-radius: 15px !important;
          }
          
          .hero-stats {
            padding: 15px !important;
          }
          
          .floating-element {
            display: none !important;
          }
          
          /* Adjust flag positions for mobile */
          .flag-icon {
            width: 25px !important;
            height: 25px !important;
            font-size: 0.7rem !important;
          }
        }
        
        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .hero-section div[style*="padding: '0 20px'"] {
            padding: 0 15px !important;
          }
          
          .world-map {
            height: 160px !important;
          }
          
          .map-container {
            padding: 15px !important;
          }
          
          .hero-subtitle {
            font-size: 0.9rem !important;
            letter-spacing: 1px !important;
          }
        }
        
        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            min-height: 100vh !important;
            padding: 20px 0 !important;
          }
          
          .hero-grid {
            gap: 20px !important;
          }
          
          .world-map {
            height: 140px !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .btn-primary, .btn-secondary {
            padding: 18px 32px !important;
            font-size: 1rem !important;
          }
          
          .flag-icon {
            width: 35px !important;
            height: 35px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RedesignedHeroSection;