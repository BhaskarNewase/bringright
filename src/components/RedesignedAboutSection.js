import React, { useState, useEffect, useRef } from 'react';

const RedesignedAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  const achievements = [
    {
      icon: "🏆",
      title: "Star Export House Status",
      description: "Recognized by Government of India for outstanding export performance",
      color: "#f39c12"
    },
    {
      icon: "📊",
      title: "CRISIL & ICRA Rated",
      description: "Credit rating validation for financial stability and reliability",
      color: "#27ae60"
    },
    {
      icon: "✅",
      title: "ISO Certified Operations",
      description: "International quality management standards compliance",
      color: "#8e44ad"
    },
    {
      icon: "🌍",
      title: "5+ Countries Served",
      description: "Global reach spanning major international markets",
      color: "#e74c3c"
    }
  ];

  const timelineEvents = [
    {
      year: "1994",
      title: "Company Founded",
      description: "Started our journey in international trade",
      icon: "🏗️"
    },
    {
      year: "2000",
      title: "Star Export House",
      description: "Achieved Government recognition",
      icon: "⭐"
    },
    {
      year: "2010",
      title: "Global Expansion",
      description: "Extended operations to 30+ countries",
      icon: "🌐"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Modernized operations with technology",
      icon: "💻"
    },
    {
      year: "2024",
      title: "50+ Countries",
      description: "Serving clients across the globe",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats one by one
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = true;
                return newStats;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f0f8ff 100%)',
      padding: '80px 0 0 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpath d='M11.1 44a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0zm35.4 20a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0z' fill='%231a5276'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px'
        }}>
          {/* Left Content */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s ease-out'
          }}>
            {/* Section Badge */}
            {/* <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(26, 82, 118, 0.1)',
              padding: '8px 20px',
              borderRadius: '25px',
              marginBottom: '20px',
              border: '1px solid rgba(26, 82, 118, 0.2)'
            }}>
              <span style={{ fontSize: '1.2rem' }}>🏢</span>
              <span style={{
                color: '#1a5276',
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                About Our Company
              </span>
            </div> */}

            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '700',
              color: '#1a5276',
              lineHeight: '1.2',
              marginBottom: '25px'
            }}>
              Gateway to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Global Trade
              </span>
              <br />Excellence
            </h2>

            {/* Description Paragraphs */}
            <div style={{ marginBottom: '40px' }}>
              <p style={{
                fontSize: '1.2rem',
                color: '#2980b9',
                lineHeight: '1.7',
                marginBottom: '20px',
                fontWeight: '500'
              }}>
                Since 2023, Bringright International Pvt Ltd has been a trusted partner in global trade, connecting businesses worldwide through comprehensive import-export solutions.
              </p>
              
              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.7',
                marginBottom: '20px'
              }}>
                As a Star Export House recognized by the Government of India, we have established ourselves as a leading player in international trade across multiple sectors including agricultural, engineering, pharmaceuticals and textiles products.
              </p>

              <p style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.7'
              }}>
                Our commitment to excellence, combined with deep industry expertise and strategic partnerships, enables us to deliver end-to-end solutions that help businesses expand their global footprint while ensuring compliance with international trade regulations.
              </p>
            </div>

            {/* Key Numbers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%'
                }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '5px' }}>1+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Years Experience</div>
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%'
                }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '5px' }}>5+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Office Image & Stats */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s ease-out 0.3s'
          }}>
            {/* Main Image Container */}
            <div style={{
              position: 'relative',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              marginBottom: '30px'
            }}>
              <img 
                src="/assets/images/office.png" 
                alt="Bringright International Office" 
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {/* Overlay Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🏢</span>
                <span style={{
                  color: '#1a5276',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  Corporate Office
                </span>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '25px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-20px)'
            }}>
              <h4 style={{
                color: '#1a5276',
                fontWeight: '600',
                marginBottom: '20px',
                fontSize: '1.3rem',
                textAlign: 'center'
              }}>
                Our Achievements
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px'
              }}>
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    style={{
                      background: 'white',
                      padding: '20px 15px',
                      borderRadius: '15px',
                      textAlign: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
                      border: `2px solid ${achievement.color}20`,
                      opacity: animatedStats[index] ? 1 : 0,
                      transform: animatedStats[index] ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.6s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    <div style={{
                      fontSize: '2rem',
                      marginBottom: '10px'
                    }}>
                      {achievement.icon}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#1a5276',
                      lineHeight: '1.3'
                    }}>
                      {achievement.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        {/* <div style={{
          marginTop: '80px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s ease-out 0.6s'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Our Journey Through Time
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Three decades of excellence in international trade and global partnerships
            </p>
          </div>

   
          <div style={{
            position: 'relative',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              position: 'absolute',
              top: '50px',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #1a5276, #f39c12, #27ae60, #e74c3c, #8e44ad)',
              borderRadius: '2px',
              zIndex: 1
            }} />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '20px',
              position: 'relative',
              zIndex: 2
            }}>
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  style={{
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s ease-out ${0.8 + index * 0.1}s`
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'white',
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    border: '4px solid',
                    borderColor: index === 0 ? '#1a5276' : 
                                index === 1 ? '#f39c12' : 
                                index === 2 ? '#27ae60' : 
                                index === 3 ? '#e74c3c' : '#8e44ad',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    {event.icon}
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#1a5276',
                      marginBottom: '8px'
                    }}>
                      {event.year}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#2980b9',
                      marginBottom: '8px'
                    }}>
                      {event.title}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#666',
                      lineHeight: '1.4'
                    }}>
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Floating Background Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        fontSize: '4rem',
        opacity: '0.05',
        animation: 'float 6s ease-in-out infinite',
        color: '#1a5276'
      }}>
        🌐
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '3%',
        fontSize: '3rem',
        opacity: '0.05',
        animation: 'float 5s ease-in-out infinite 2s',
        color: '#f39c12'
      }}>
        📈
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          div[style*="grid-template-columns: repeat(5, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RedesignedAboutSection;