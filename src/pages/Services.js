import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedServices, setAnimatedServices] = useState([]);
  const [selectedService, setSelectedService] = useState(0);
  const sectionRef = useRef(null);

  const servicesOverview = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Operating across continents with services in Saudi Arabia, Dubai, USA, UK, Germany, and beyond",
      stats: "50+ Countries"
    },
    {
      icon: "🤝",
      title: "Trusted Partnership",
      description: "Building lasting relationships through reliable service and transparent communication",
      stats: "1000+ Clients"
    },
    {
      icon: "🚀",
      title: "End-to-End Solutions",
      description: "Complete trade lifecycle management from sourcing to final delivery",
      stats: "24/7 Support"
    }
  ];

  const coreServices = [
    {
      number: "01",
      icon: "↔️",
      title: "Import / Export Goods and Services",
      description: "Comprehensive import and export solutions covering all aspects of international trade. We handle documentation, compliance, customs clearance, and regulatory requirements across multiple countries.",
      features: [
        "International trade documentation",
        "Customs clearance and compliance",
        "Regulatory compliance management",
        "Multi-country operations"
      ],
      color: "#1a5276"
    },
    {
      number: "02",
      icon: "🚛",
      title: "Logistics Management",
      description: "Strategic logistics planning and execution to ensure efficient movement of goods across global supply chains with real-time tracking and optimization.",
      features: [
        "Route optimization and planning",
        "Real-time shipment tracking",
        "Multi-modal transportation",
        "Cost-effective solutions"
      ],
      color: "#2980b9"
    },
    {
      number: "03",
      icon: "🚢",
      title: "Transportation Management",
      description: "Comprehensive transportation solutions including sea freight, air freight, and land transportation with partnerships across major shipping lines and carriers.",
      features: [
        "Sea freight (FCL & LCL)",
        "Air freight services",
        "Road transportation",
        "Express delivery options"
      ],
      color: "#27ae60"
    },
    {
      number: "04",
      icon: "🏢",
      title: "Warehousing Management",
      description: "Modern warehousing facilities with advanced inventory management systems, climate-controlled storage, and value-added services for various product categories.",
      features: [
        "Climate-controlled storage",
        "Inventory management systems",
        "Pick and pack services",
        "Quality control inspection"
      ],
      color: "#f39c12"
    },
    {
      number: "05",
      icon: "🔗",
      title: "Supply Chain Management",
      description: "End-to-end supply chain optimization from procurement to delivery, ensuring maximum efficiency and cost-effectiveness throughout the entire process.",
      features: [
        "Procurement management",
        "Vendor coordination",
        "Supply chain optimization",
        "Risk management"
      ],
      color: "#8e44ad"
    },
    {
      number: "06",
      icon: "🏪",
      title: "Wholesale Trading",
      description: "Comprehensive wholesale trading services connecting global suppliers with buyers, facilitating bulk transactions across various industry sectors.",
      features: [
        "Bulk commodity trading",
        "Supplier network management",
        "Market intelligence",
        "Competitive pricing"
      ],
      color: "#e74c3c"
    },
    {
      number: "07",
      icon: "📦",
      title: "Packaging and Products Distribution",
      description: "Professional packaging solutions and distribution networks ensuring products reach their destination safely and efficiently with appropriate handling.",
      features: [
        "Custom packaging solutions",
        "Product labeling and marking",
        "Distribution network",
        "Quality assurance"
      ],
      color: "#16a085"
    },
    {
      number: "08",
      icon: "🏭",
      title: "Manufacturing Goods and Export",
      description: "Manufacturing coordination and export services, working with trusted manufacturers to produce quality goods meeting international standards and specifications.",
      features: [
        "Manufacturing coordination",
        "Quality control standards",
        "Export documentation",
        "International compliance"
      ],
      color: "#d35400"
    }
  ];

  const globalMarkets = [
    { country: "Saudi Arabia", region: "Middle East Operations", flag: "🇸🇦", color: "#27ae60" },
    { country: "Dubai, UAE", region: "Gulf Region Hub", flag: "🇦🇪", color: "#f39c12" },
    { country: "United States", region: "North American Markets", flag: "🇺🇸", color: "#3498db" },
    { country: "United Kingdom", region: "European Gateway", flag: "🇬🇧", color: "#e74c3c" },
    { country: "Germany", region: "European Union", flag: "🇩🇪", color: "#2c3e50" },
    { country: "Beyond", region: "Expanding Worldwide", flag: "🌍", color: "#8e44ad" }
  ];

  const processSteps = [
    {
      step: "1",
      icon: "💬",
      title: "Consultation",
      description: "Initial discussion to understand your specific requirements and objectives"
    },
    {
      step: "2",
      icon: "📋",
      title: "Planning",
      description: "Detailed planning and strategy development tailored to your needs"
    },
    {
      step: "3",
      icon: "⚙️",
      title: "Execution",
      description: "Professional execution of services with continuous monitoring"
    },
    {
      step: "4",
      icon: "📈",
      title: "Delivery",
      description: "Successful completion and ongoing support for your business growth"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate services one by one
          coreServices.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedServices(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Page Header */}
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive global trade solutions tailored to meet your business needs"
        breadcrumbItems={[
          { label: 'Home', href: '#' },
          { label: 'Our Services' }
        ]}
      />

      {/* Services Overview */}
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
              Complete Trade Solutions
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We specialize in comprehensive import-export solutions tailored to your business needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {servicesOverview.map((service, index) => (
              <div
                key={service.title}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.2}s`,
                  border: '1px solid rgba(26, 82, 118, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
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
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1a5276, #2980b9, #f39c12)'
                }} />
                
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {service.icon}
                </div>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {service.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {service.description}
                </p>
                <div style={{
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {service.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
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
              Our Core Services
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Bridging continents through seamless trade operations
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '30px'
          }}>
            {coreServices.map((service, index) => (
              <div
                key={service.title}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  opacity: animatedServices.includes(index) ? 1 : 0,
                  transform: animatedServices.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Service Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e8f4f8)',
                  padding: '30px',
                  position: 'relative',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  {/* Service Number */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '50px',
                    height: '50px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.2rem'
                  }}>
                    {service.number}
                  </div>

                  {/* Service Icon */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    fontSize: '2.5rem'
                  }}>
                    {service.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    margin: 0,
                    paddingRight: '80px'
                  }}>
                    {service.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div style={{ padding: '30px' }}>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '20px'
                  }}>
                    {service.description}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '10px'
                  }}>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '8px 0',
                          fontSize: '0.95rem',
                          color: '#666'
                        }}
                      >
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.7rem',
                          fontWeight: '700'
                        }}>
                          ✓
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Markets */}
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
              Our Global Markets
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We proudly serve clients in key global markets, bridging continents through seamless trade operations
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px'
          }}>
            {globalMarkets.map((market, index) => (
              <div
                key={market.country}
                style={{
                  background: 'white',
                  padding: '30px 20px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: `2px solid ${market.color}20`,
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 15px 35px ${market.color}30`;
                  e.currentTarget.style.borderColor = market.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = `${market.color}20`;
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '15px'
                }}>
                  {market.flag}
                </div>
                <h5 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '8px'
                }}>
                  {market.country}
                </h5>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  margin: 0
                }}>
                  {market.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Service Process
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                style={{
                  background: 'white',
                  padding: '40px 20px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.2}s`
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
                {/* Step Number */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(243, 156, 18, 0.3)'
                }}>
                  {step.step}
                </div>

                {/* Step Icon */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '20px auto 20px',
                  fontSize: '2.5rem'
                }}>
                  {step.icon}
                </div>

                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {step.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa, #e3f2fd)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '15px'
              }}>
                Ready to Expand Your Global Reach?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Let our experienced team help you navigate the complexities of international trade and unlock new opportunities for your business.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button style={{
                background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                color: 'white',
                border: 'none',
                padding: '20px 40px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(26, 82, 118, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 auto'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(26, 82, 118, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.3)';
              }}>
                <span>🚀</span> Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          h3 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;