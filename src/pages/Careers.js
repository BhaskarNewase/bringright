import React, { useState, useEffect, useRef } from 'react';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentSalary: '',
    coverLetter: '',
    availability: '',
    dataConsent: false
  });
  const sectionRef = useRef(null);

  const whyWorkWithUs = [
    {
      icon: "🌍",
      title: "Global Exposure",
      description: "Work with international markets across 50+ countries and gain valuable global business experience.",
      color: "#1a5276"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Clear career progression paths with opportunities for professional development and leadership roles.",
      color: "#27ae60"
    },
    {
      icon: "👥",
      title: "Collaborative Culture",
      description: "Work in a supportive environment that values teamwork, innovation, and continuous learning.",
      color: "#f39c12"
    },
    {
      icon: "🏆",
      title: "Industry Leadership",
      description: "Be part of a Star Export House with 30+ years of excellence in international trade.",
      color: "#8e44ad"
    },
    {
      icon: "🤝",
      title: "Work-Life Balance",
      description: "Enjoy flexible working arrangements and comprehensive benefits that support your well-being.",
      color: "#e74c3c"
    },
    {
      icon: "🎓",
      title: "Learning & Development",
      description: "Access to training programs, workshops, and certifications to enhance your skills and expertise.",
      color: "#2980b9"
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Export Manager",
      type: "Full-time",
      location: "Pune, Maharashtra",
      experience: "3-5 years experience",
      salary: "₹6-10 LPA",
      description: "Lead export operations, manage international client relationships, and develop export strategies for agricultural and pharmaceutical products.",
      requirements: [
        "Bachelor's degree in International Business or related field",
        "Experience in export operations and documentation",
        "Strong knowledge of international trade regulations",
        "Excellent communication and negotiation skills"
      ]
    },
    {
      id: 2,
      title: "Logistics Coordinator",
      type: "Full-time",
      location: "Pune, Maharashtra",
      experience: "2-4 years experience",
      salary: "₹4-7 LPA",
      description: "Coordinate global logistics operations, manage shipping schedules, and ensure efficient supply chain management.",
      requirements: [
        "Degree in Supply Chain Management or Logistics",
        "Experience in freight forwarding and shipping",
        "Knowledge of customs procedures and documentation",
        "Proficiency in logistics software and MS Office"
      ]
    },
    {
      id: 3,
      title: "Business Development Executive",
      type: "Full-time",
      location: "Pune, Maharashtra",
      experience: "1-3 years experience",
      salary: "₹3-6 LPA",
      description: "Identify new business opportunities, develop client relationships, and drive sales growth in international markets.",
      requirements: [
        "MBA in Marketing or Business Development",
        "Strong sales and presentation skills",
        "Understanding of international markets",
        "Ability to travel for business development"
      ]
    },
    {
      id: 4,
      title: "Quality Assurance Manager",
      type: "Full-time",
      location: "Pune, Maharashtra",
      experience: "4-6 years experience",
      salary: "₹7-12 LPA",
      description: "Ensure product quality standards, manage certification processes, and implement quality control systems.",
      requirements: [
        "Engineering degree with quality management certification",
        "Experience in ISO and international quality standards",
        "Knowledge of pharmaceutical and food safety regulations",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      id: 5,
      title: "Export Documentation Intern",
      type: "Internship",
      location: "Pune, Maharashtra",
      experience: "0-1 year experience",
      salary: "₹15-20K/month",
      description: "Learn export documentation processes, assist with trade operations, and gain hands-on experience in international trade.",
      requirements: [
        "Graduate in Commerce, Economics, or related field",
        "Basic understanding of international trade",
        "Good written and verbal communication skills",
        "Willingness to learn and adapt quickly"
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      type: "Contract",
      location: "Remote/Pune",
      experience: "2-4 years experience",
      salary: "₹4-8 LPA",
      description: "Develop and execute digital marketing strategies to enhance online presence and generate leads for international business.",
      requirements: [
        "Degree in Marketing, Communications, or related field",
        "Experience in B2B digital marketing and lead generation",
        "Proficiency in Google Ads, LinkedIn, and analytics tools",
        "Knowledge of international business marketing"
      ]
    }
  ];

  const hiringProcess = [
    {
      step: "1",
      icon: "📄",
      title: "Apply Online",
      description: "Submit your application with resume and cover letter through our online portal"
    },
    {
      step: "2",
      icon: "🔍",
      title: "Initial Screening",
      description: "Our HR team reviews applications and conducts initial phone/video screening"
    },
    {
      step: "3",
      icon: "👥",
      title: "Interview Rounds",
      description: "Face-to-face or virtual interviews with hiring managers and team members"
    },
    {
      step: "4",
      icon: "🤝",
      title: "Job Offer",
      description: "Successful candidates receive offer letter with competitive compensation package"
    }
  ];

  const benefits = [
    { icon: "❤️", title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
    { icon: "✈️", title: "Travel Opportunities", description: "International business travel and exposure to global markets" },
    { icon: "🎓", title: "Training Programs", description: "Professional development and skill enhancement opportunities" },
    { icon: "⏰", title: "Flexible Hours", description: "Work-life balance with flexible working arrangements" },
    { icon: "🏆", title: "Performance Bonus", description: "Annual performance bonuses and incentive programs" },
    { icon: "🏖️", title: "Paid Leave", description: "Generous vacation days and paid time off policies" },
    { icon: "☕", title: "Team Events", description: "Regular team building activities and company celebrations" },
    { icon: "💻", title: "Modern Workspace", description: "Equipped offices with latest technology and tools" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items one by one
          setTimeout(() => {
            [...whyWorkWithUs, ...jobOpenings, ...hiringProcess].forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => [...prev, index]);
              }, index * 100);
            });
          }, 200);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowModal(true);
  };

  const handleGeneralApplication = () => {
    setSelectedPosition('General Application');
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    setTimeout(() => {
      setSubmitting(false);
      setShowModal(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        currentSalary: '',
        coverLetter: '',
        availability: '',
        dataConsent: false
      });
      alert('Application submitted successfully! We will review your application and get back to you soon.');
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div ref={sectionRef}>
      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #1a5276, #2980b9)',
        color: 'white',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: '-20%',
          width: '40%',
          height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='2' fill='white' opacity='0.1'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '20px'
            }}>
              Join Our Team
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '30px',
              opacity: 0.9,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Build your career with a leading name in international trade
            </p>
            
            {/* Breadcrumb */}
            <nav style={{ marginTop: '30px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)'
              }}>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none' }}>Home</a>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>/</span>
                <span style={{ color: 'white' }}>Careers</span>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With Bringright International?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join a dynamic team that's shaping the future of global trade
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {whyWorkWithUs.map((benefit, index) => (
              <div
                key={benefit.title}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer',
                  opacity: animatedItems.includes(index) ? 1 : 0,
                  transform: animatedItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
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
                {/* Top Border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: `linear-gradient(90deg, ${benefit.color}, ${benefit.color}dd)`
                }} />
                
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {benefit.icon}
                </div>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
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
              Current Job Openings
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore exciting opportunities to advance your career with us
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '30px'
          }}>
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  opacity: animatedItems.includes(index + whyWorkWithUs.length) ? 1 : 0,
                  transform: animatedItems.includes(index + whyWorkWithUs.length) ? 'translateY(0)' : 'translateY(30px)',
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
                {/* Job Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e8f4f8)',
                  padding: '25px',
                  position: 'relative',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  {/* Job Type Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: job.type === 'Full-time' ? 'linear-gradient(135deg, #27ae60, #1e8449)' :
                               job.type === 'Internship' ? 'linear-gradient(135deg, #f39c12, #e67e22)' :
                               'linear-gradient(135deg, #8e44ad, #5b2c6f)',
                    color: 'white',
                    padding: '6px 15px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {job.type}
                  </div>

                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    marginBottom: '15px',
                    paddingRight: '80px'
                  }}>
                    {job.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                    fontSize: '0.9rem',
                    color: '#666'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      📍 {job.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      💼 {job.experience}
                    </span>
                  </div>
                </div>

                {/* Job Content */}
                <div style={{ padding: '25px' }}>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.7',
                    marginBottom: '20px'
                  }}>
                    {job.description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: '25px'
                  }}>
                    {job.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: '5px 0',
                          color: '#666',
                          position: 'relative',
                          paddingLeft: '20px',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#27ae60',
                          fontWeight: 'bold'
                        }}>
                          ✓
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid #eee'
                  }}>
                    <span style={{
                      fontWeight: '600',
                      color: '#1a5276',
                      fontSize: '1.1rem'
                    }}>
                      {job.salary}
                    </span>
                    <button
                      style={{
                        background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                        color: 'white',
                        border: 'none',
                        padding: '12px 25px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => handleApply(job.title)}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.3)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
              Don't see a position that matches your skills?
            </p>
            <button
              style={{
                background: 'transparent',
                color: '#1a5276',
                border: '2px solid #1a5276',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 auto'
              }}
              onClick={handleGeneralApplication}
              onMouseOver={(e) => {
                e.target.style.background = '#1a5276';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#1a5276';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span>📧</span>
              Send Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
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
              Our Hiring Process
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A streamlined process to help us find the right talent
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {hiringProcess.map((step, index) => (
              <div
                key={step.title}
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
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
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {step.step}
                </div>

                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '20px auto 20px',
                  fontSize: '2rem'
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

      {/* Employee Benefits */}
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
              Employee Benefits
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive benefits package to support your well-being and growth
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                style={{
                  textAlign: 'center',
                  padding: '25px 15px',
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #27ae60, #1e8449)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '1.5rem'
                }}>
                  {benefit.icon}
                </div>

                <h5 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '10px'
                }}>
                  {benefit.title}
                </h5>
                <p style={{
                  color: '#666',
                  lineHeight: '1.5',
                  margin: 0,
                  fontSize: '0.9rem'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={() => setShowModal(false)}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#1a5276',
                margin: 0
              }}>
                Apply for Position
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                padding: '5px'
              }}
              onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>

            <div style={{
              background: '#e3f2fd',
              padding: '15px',
              borderRadius: '10px',
              marginBottom: '25px',
              border: '1px solid #2196f3'
            }}>
              <strong>Applying for: {selectedPosition}</strong>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Years of Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    Current Salary (LPA)
                  </label>
                  <input
                    type="text"
                    name="currentSalary"
                    value={formData.currentSalary}
                    onChange={handleInputChange}
                    placeholder="e.g., 5-7 LPA"
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      border: '2px solid #e9ecef',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1a5276';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e9ecef';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Upload Resume *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1a5276';
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <small style={{ color: '#666' }}>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1a5276';
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '5px',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Notice Period
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e9ecef',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#1a5276';
                    e.target.style.boxShadow = '0 0 0 0.2rem rgba(26, 82, 118, 0.25)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e9ecef';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select Notice Period</option>
                  <option value="immediate">Immediate</option>
                  <option value="15-days">15 days</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="3-months">3 months</option>
                </select>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    name="dataConsent"
                    checked={formData.dataConsent}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '18px',
                      height: '18px'
                    }}
                  />
                  <span style={{ color: '#333', fontSize: '0.9rem' }}>
                    I consent to the processing of my personal data for recruitment purposes *
                  </span>
                </label>
              </div>

              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'flex-end'
              }}>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: submitting 
                      ? 'linear-gradient(135deg, #27ae60, #1e8449)' 
                      : 'linear-gradient(135deg, #1a5276, #2980b9)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {submitting ? '⏳' : '✈️'} {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(500px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
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
          
          .job-header {
            padding: 20px !important;
          }
          
          .job-content {
            padding: 20px !important;
          }
          
          .job-footer {
            flex-direction: column !important;
            gap: 15px !important;
            align-items: stretch !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 40px 30px"] {
            padding: 25px 20px !important;
          }
          
          div[style*="padding: 30px 20px"] {
            padding: 25px 15px !important;
          }
          
          div[style*="padding: 25px"] {
            padding: 20px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gap: 20px"] {
            gap: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Careers;