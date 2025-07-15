import PageHeader from "../components/PageHeader";
import RedesignedAboutSection from "../components/RedesignedAboutSection";

// About Page Component
const About = () => {
  // Partner logos with actual image URLs
  const shippingPartners = [
    {
      name: "Maersk Line",
      description: "Global Container Shipping",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Maersk-Logo.png"
    },
    {
      name: "MSC",
      description: "Mediterranean Shipping",
      logo: "https://1000logos.net/wp-content/uploads/2020/09/MSC-Logo.png"
    },
    {
      name: "COSCO Shipping",
      description: "Container Transportation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/COSCO_SHIPPING_logo.svg/1200px-COSCO_SHIPPING_logo.svg.png"
    },
    {
      name: "CMA CGM",
      description: "Global Shipping Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/CMA-CGM-Logo.png"
    },
    {
      name: "Hapag-Lloyd",
      description: "Container Shipping",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Hapag-Lloyd-Logo.png"
    }
  ];

  const courierPartners = [
    {
      name: "FedEx",
      description: "Express Delivery",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/FedEx-Logo.png"
    },
    {
      name: "DHL Express",
      description: "International Express",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/DHL-Logo.png"
    },
    {
      name: "UPS",
      description: "Logistics Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/UPS-Logo.png"
    },
    {
      name: "TNT Express",
      description: "Door-to-Door Delivery",
      logo: "https://logos-world.net/wp-content/uploads/2021/11/TNT-Logo.png"
    }
  ];

  const financialPartners = [
    {
      name: "IDFC FIRST Bank",
      description: "Trade Finance",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/ICICI-Bank-Logo.png"
    },
    {
      name: "HDFC Bank",
      description: "Letter of Credit",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/HDFC-Bank-Logo.png"
    },
    {
      name: "State Bank of India",
      description: "Export Credit",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/State-Bank-of-India-SBI-Logo.png"
    },
    {
      name: "EXIM Bank",
      description: "Export-Import Finance",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Export%E2%80%93Import_Bank_of_India_logo.svg/1200px-Export%E2%80%93Import_Bank_of_India_logo.svg.png"
    }
  ];

  return (
    <div>
      <PageHeader
        title="About Bringright International Pvt Ltd"
        subtitle="Your trusted partner in global trade since 2023, connecting markets across continents"
        breadcrumbItems={[
        { label: 'Home', href: '#' },
        { label: 'About Us' }
        ]}
      />

      <RedesignedAboutSection />
      
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Our Vision & Mission
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Driving global trade with integrity, innovation, and excellence
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #1a5276, #2980b9)'
              }} />
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                fontSize: '2.5rem'
              }}>
                👁️
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '20px'
              }}>
                Our Vision
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                To be the most trusted and innovative global trade partner, enabling businesses worldwide to achieve sustainable growth through seamless international commerce while maintaining the highest standards of quality, compliance, and customer satisfaction.
              </p>
            </div>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #27ae60, #1e8449)'
              }} />
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #27ae60, #1e8449)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '25px',
                fontSize: '2.5rem'
              }}>
                🎯
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '20px'
              }}>
                Our Mission
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                We are committed to delivering comprehensive import-export solutions that bridge global markets, facilitate international trade, and create value for our clients through expertise, innovation, and unwavering dedication to excellence in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f5e8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Why Choose Bringright International?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Your success in global trade is our commitment
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '🌍',
                title: 'Global Network',
                description: 'Extensive network across 5+ countries with established partnerships and local expertise'
              },
              {
                icon: '🛡️',
                title: 'Compliance Expertise',
                description: 'Deep understanding of international trade regulations and compliance requirements'
              },
              {
                icon: '⏱️',
                title: '1+ Years Experience',
                description: 'Years of proven expertise in facilitating successful international trade'
              },
              {
                icon: '🎧',
                title: '24/7 Support',
                description: 'Round-the-clock customer support to ensure your trade operations never stop'
              },
              {
                icon: '🚚',
                title: 'End-to-End Solutions',
                description: 'Comprehensive logistics and supply chain management from origin to destination'
              },
              {
                icon: '📊',
                title: 'Market Intelligence',
                description: 'Real-time market insights and trend analysis to optimize your trade strategies'
              },
              {
                icon: '🤝',
                title: 'Trusted Partnerships',
                description: 'Strong relationships with leading shipping lines, freight forwarders, and customs authorities'
              },
              {
                icon: '💰',
                title: 'Cost Effective',
                description: 'Competitive pricing and value-added services that maximize your return on investment'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                style={{
                  background: 'white',
                  padding: '30px 25px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {feature.icon}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {feature.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Our Valued Partners
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Strategic alliances that strengthen our global capabilities
            </p>
          </div>
          
          {/* Shipping & Logistics Partners */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#1a5276',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Shipping & Logistics Partners
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {shippingPartners.map((partner, index) => (
                <div
                  key={partner.name}
                  style={{
                    background: 'white',
                    padding: '30px 20px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    width: '100px',
                    height: '60px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0.8)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{
                      display: 'none',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                      borderRadius: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      🚢
                    </div>
                  </div>
                  <h5 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}>
                    {partner.name}
                  </h5>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0
                  }}>
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Express & Courier Partners */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#1a5276',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Express & Courier Partners
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px',
              marginBottom: '40px'
            }}>
              {courierPartners.map((partner, index) => (
                <div
                  key={partner.name}
                  style={{
                    background: 'white',
                    padding: '30px 20px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    width: '100px',
                    height: '60px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0.8)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{
                      display: 'none',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                      borderRadius: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      📦
                    </div>
                  </div>
                  <h5 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}>
                    {partner.name}
                  </h5>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0
                  }}>
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Financial & Trade Partners */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#1a5276',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              Financial & Trade Partners
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '30px'
            }}>
              {financialPartners.map((partner, index) => (
                <div
                  key={partner.name}
                  style={{
                    background: 'white',
                    padding: '30px 20px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{
                    width: '100px',
                    height: '60px',
                    marginBottom: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'brightness(0.8)'
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div style={{
                      display: 'none',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #27ae60, #1e8449)',
                      borderRadius: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: 'white'
                    }}>
                      🏦
                    </div>
                  </div>
                  <h5 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    marginBottom: '8px',
                    margin: '0 0 8px 0'
                  }}>
                    {partner.name}
                  </h5>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0
                  }}>
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Our Certifications & Accreditations
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Recognized standards that validate our commitment to excellence
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                icon: '⭐',
                title: 'Star Export House',
                description: 'Recognized by Government of India for outstanding export performance and contribution to India\'s foreign trade',
                color: '#f39c12'
              },
              {
                icon: '📈',
                title: 'CRISIL & ICRA Rated',
                description: 'Credit rating agencies validation for financial stability, business reliability, and operational excellence',
                color: '#8e44ad'
              },
              {
                icon: '🛡️',
                title: 'FSSC 22000-2011',
                description: 'Food Safety System Certification ensuring comprehensive food safety management systems',
                color: '#27ae60'
              },
              {
                icon: '✅',
                title: 'GMP/Kosher & Halal',
                description: 'Good Manufacturing Practices with religious dietary compliance certifications for global markets',
                color: '#e74c3c'
              }
            ].map((cert, index) => (
              <div
                key={cert.title}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2.5rem'
                }}>
                  {cert.icon}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {cert.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#1a5276',
              marginBottom: '15px'
            }}>
              Import & Export Sectors We Serve
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive expertise across diverse industry verticals
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              { icon: '🌾', title: 'Agriculture' },
              { icon: '👕', title: 'Textiles & Apparel' },
              { icon: '💊', title: 'Pharmaceuticals' },
              { icon: '⚙️', title: 'Engineering' }
            ].map((sector, index) => (
              <div
                key={sector.title}
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '1.8rem'
                }}>
                  {sector.icon}
                </div>
                <h5 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  margin: 0
                }}>
                  {sector.title}
                </h5>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <a 
              href="/products" 
              style={{
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                color: 'white',
                textDecoration: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(26, 82, 118, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(26, 82, 118, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.3)';
              }}
            >
              <span>🔍</span>
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(auto-fit, minmax(500px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          h3 {
            font-size: 1.6rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 40px"] {
            padding: 25px !important;
          }
          
          div[style*="padding: 30px 25px"] {
            padding: 20px 15px !important;
          }
          
          div[style*="padding: 30px 20px"] {
            padding: 20px 15px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="gap: 30px"] {
            gap: 20px !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          h3 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;