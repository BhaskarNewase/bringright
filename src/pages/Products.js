import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedCategories, setAnimatedCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sectionRef = useRef(null);

  const productCategories = [
    {
      id: 'agriculture',
      title: 'Agriculture Products',
      icon: '🌱',
      description: 'Premium agricultural products and food commodities sourced from India\'s finest farms',
      color: '#27ae60',
      gradient: 'linear-gradient(135deg, #27ae60, #196f3d)',
      items: ['Grains & Cereals', 'Spices & Seasonings', 'Fresh & Processed Foods', 'Tea & Beverages'],
      stats: '500+ Products'
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals',
      icon: '💊',
      description: 'Quality pharmaceutical products meeting international regulatory standards',
      color: '#8e44ad',
      gradient: 'linear-gradient(135deg, #8e44ad, #5b2c6f)',
      items: ['Generic Medicines', 'Injectable Products', 'Ayurvedic & Herbal', 'Medical Devices'],
      stats: '200+ Products'
    },
    {
      id: 'textile',
      title: 'Textiles & Garments',
      icon: '👕',
      description: 'Premium fabrics and fashion-forward garments showcasing India\'s textile heritage',
      color: '#e74c3c',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      items: ['Cotton Products', 'Ready-Made Garments', 'Home Textiles', 'Handloom & Heritage'],
      stats: '300+ Products'
    },
    {
      id: 'engineering',
      title: 'Engineering Products',
      icon: '⚙️',
      description: 'Advanced engineering solutions and industrial machinery for global industries',
      color: '#34495e',
      gradient: 'linear-gradient(135deg, #34495e, #2c3e50)',
      items: ['Industrial Machinery', 'Automotive Components', 'Electrical Equipment', 'Precision Components'],
      stats: '150+ Products'
    }
  ];

  const detailedProducts = {
    agriculture: [
      {
        title: 'Grains & Cereals',
        icon: '🌾',
        products: [
          'Basmati Rice (Premium Quality)',
          'Non-Basmati Rice (IR64, Sona Masuri)',
          'Wheat & Wheat Products',
          'Specialty Grains (Quinoa, Millet)',
          'Corn & Maize',
          'Barley & Oats'
        ]
      },
      {
        title: 'Spices & Seasonings',
        icon: '🌶️',
        products: [
          'Turmeric (Curcumin Rich)',
          'Red Chilli & Paprika',
          'Coriander Seeds & Powder',
          'Cumin Seeds & Powder',
          'Black Pepper',
          'Cardamom & Cloves'
        ]
      },
      {
        title: 'Fresh & Processed',
        icon: '🍎',
        products: [
          'Fresh Fruits (Mango, Grapes)',
          'Fresh Vegetables (Onion, Potato)',
          'Frozen Vegetables',
          'Fruit Pulps & Concentrates',
          'Nuts & Dry Fruits',
          'Pickles & Preserves'
        ]
      },
      {
        title: 'Tea & Beverages',
        icon: '☕',
        products: [
          'Black Tea (Assam, Darjeeling)',
          'Green Tea & Specialty Blends',
          'Herbal & Ayurvedic Teas',
          'Coffee Beans (Arabica, Robusta)',
          'Instant Coffee',
          'Natural Fruit Juices'
        ]
      }
    ],
    pharma: [
      {
        title: 'Generic Medicines',
        icon: '💊',
        products: [
          'Antibiotics (WHO-GMP)',
          'Cardiovascular Drugs',
          'Diabetes Medications',
          'Pain Management',
          'Respiratory Drugs',
          'Gastrointestinal'
        ]
      },
      {
        title: 'Injectable Products',
        icon: '💉',
        products: [
          'Sterile Injectables',
          'IV Fluids & Solutions',
          'Antibiotic Injections',
          'Critical Care Drugs',
          'Vaccines',
          'Oncology Injectables'
        ]
      },
      {
        title: 'Ayurvedic & Herbal',
        icon: '🌿',
        products: [
          'Herbal Extracts',
          'Ayurvedic Formulations',
          'Essential Oils',
          'Wellness Products',
          'Immunity Boosters',
          'Natural Supplements'
        ]
      },
      {
        title: 'Medical Devices',
        icon: '🩺',
        products: [
          'Diagnostic Equipment',
          'Surgical Instruments',
          'Disposable Items',
          'Hospital Equipment',
          'Personal Care Devices',
          'Safety Equipment'
        ]
      }
    ],
    textile: [
      {
        title: 'Cotton Products',
        icon: '🌱',
        products: [
          '100% Cotton Fabrics',
          'Organic Cotton',
          'Cotton Yarns',
          'Denim Fabrics',
          'Terry Products',
          'Cotton Blends'
        ]
      },
      {
        title: 'Ready-Made Garments',
        icon: '👕',
        products: [
          'Men\'s Clothing',
          'Women\'s Apparel',
          'Children\'s Wear',
          'Sportswear',
          'Formal Wear',
          'Casual Clothing'
        ]
      },
      {
        title: 'Home Textiles',
        icon: '🏠',
        products: [
          'Bed Linens',
          'Curtains & Drapes',
          'Kitchen Textiles',
          'Bath Towels',
          'Decorative Items',
          'Table Linens'
        ]
      },
      {
        title: 'Handloom & Heritage',
        icon: '✨',
        products: [
          'Silk Sarees',
          'Handwoven Fabrics',
          'Ethnic Wear',
          'Traditional Crafts',
          'Block Prints',
          'Embroidered Items'
        ]
      }
    ],
    engineering: [
      {
        title: 'Industrial Machinery',
        icon: '🏭',
        products: [
          'Manufacturing Equipment',
          'Textile Machinery',
          'Food Processing',
          'Construction Equipment',
          'CNC Machines',
          'Automation Systems'
        ]
      },
      {
        title: 'Automotive Components',
        icon: '🚗',
        products: [
          'Engine Parts',
          'Brake Systems',
          'Electrical Components',
          'Body Parts',
          'Transmission Parts',
          'Aftermarket Parts'
        ]
      },
      {
        title: 'Electrical Equipment',
        icon: '⚡',
        products: [
          'Transformers',
          'Switchgear',
          'Motors & Generators',
          'Cables & Wires',
          'Control Panels',
          'Power Distribution'
        ]
      },
      {
        title: 'Precision Components',
        icon: '🔧',
        products: [
          'CNC Machined Parts',
          'Castings & Forgings',
          'Fasteners',
          'Tools & Hardware',
          'Custom Components',
          'Quality Inspection'
        ]
      }
    ]
  };

  const qualityStandards = [
    {
      title: 'Star Export House',
      icon: '⭐',
      description: 'Government of India recognition for export excellence',
      status: 'Certified',
      color: '#f39c12'
    },
    {
      title: 'FSSC 22000',
      icon: '🛡️',
      description: 'Food Safety System Certification',
      status: 'Certified',
      color: '#27ae60'
    },
    {
      title: 'WHO-GMP',
      icon: '✅',
      description: 'Good Manufacturing Practices',
      status: 'Certified',
      color: '#8e44ad'
    },
    {
      title: 'ISO Standards',
      icon: '📜',
      description: 'International quality management',
      status: 'Certified',
      color: '#e74c3c'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate categories one by one
          productCategories.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedCategories(prev => [...prev, index]);
            }, index * 200);
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

  const filteredProducts = activeCategory === 'all' 
    ? Object.values(detailedProducts).flat() 
    : detailedProducts[activeCategory] || [];

  return (
    <div ref={sectionRef}>
      {/* Page Header */}
      <PageHeader
        title="Our Product Portfolio"
        subtitle="Premium quality products across four key sectors for global markets"
        breadcrumbItems={[
          { label: 'Home', href: '#' },
          { label: 'Our Products' }
        ]}
        showStats={true}
        stats={[
          { value: '1000+', label: 'Products' },
          { value: '4', label: 'Sectors' },
          { value: '50+', label: 'Countries' },
          { value: '24/7', label: 'Support' }
        ]}
      />

      {/* Product Categories Overview */}
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
              Our Product Categories
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive range of products across four major industry sectors
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  opacity: animatedCategories.includes(index) ? 1 : 0,
                  transform: animatedCategories.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative'
                }}
                onClick={() => setActiveCategory(category.id)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Category Header */}
                <div style={{
                  background: category.gradient,
                  padding: '30px 25px',
                  color: 'white',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  {/* Floating Icon */}
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '15px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
                  }}>
                    {category.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    margin: '0 0 10px 0'
                  }}>
                    {category.title}
                  </h3>
                  
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {category.stats}
                  </div>
                </div>

                {/* Category Content */}
                <div style={{ padding: '25px' }}>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.95rem'
                  }}>
                    {category.description}
                  </p>

                  <div style={{ marginBottom: '25px' }}>
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '5px 0',
                          fontSize: '0.9rem',
                          color: '#666'
                        }}
                      >
                        <div style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: category.color
                        }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button style={{
                    background: category.gradient,
                    color: 'white',
                    border: 'none',
                    padding: '12px 25px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = `0 8px 20px ${category.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    View Products
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Filter Tabs */}
      <section style={{
        padding: '40px 0',
        background: 'linear-gradient(135deg, #e8f5e8 0%, #f0f8ff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <button
              style={{
                background: activeCategory === 'all' ? 'linear-gradient(135deg, #1a5276, #2980b9)' : 'white',
                color: activeCategory === 'all' ? 'white' : '#1a5276',
                border: `2px solid ${activeCategory === 'all' ? 'transparent' : '#1a5276'}`,
                padding: '12px 25px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setActiveCategory('all')}
            >
              All Categories
            </button>
            {productCategories.map(category => (
              <button
                key={category.id}
                style={{
                  background: activeCategory === category.id ? category.gradient : 'white',
                  color: activeCategory === category.id ? 'white' : category.color,
                  border: `2px solid ${activeCategory === category.id ? 'transparent' : category.color}`,
                  padding: '12px 25px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onClick={() => setActiveCategory(category.id)}
                onMouseOver={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.background = category.color;
                    e.target.style.color = 'white';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.background = 'white';
                    e.target.style.color = category.color;
                  }
                }}
              >
                <span>{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Products Section */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {activeCategory !== 'all' && (
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '15px',
                background: productCategories.find(c => c.id === activeCategory)?.gradient || '#1a5276',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '50px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '2rem' }}>
                  {productCategories.find(c => c.id === activeCategory)?.icon}
                </span>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {productCategories.find(c => c.id === activeCategory)?.title}
                </h2>
              </div>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {productCategories.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          )}

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.title}-${index}`}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Product Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                  padding: '25px',
                  textAlign: 'center',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '15px'
                  }}>
                    {product.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    margin: 0
                  }}>
                    {product.title}
                  </h4>
                </div>

                {/* Product List */}
                <div style={{ padding: '25px' }}>
                  {product.products.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 0',
                        fontSize: '0.95rem',
                        color: '#666',
                        borderBottom: idx < product.products.length - 1 ? '1px solid #f0f0f0' : 'none'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #27ae60, #1e8449)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>
                        ✓
                      </div>
                      {item}
                    </div>
                  ))}

                  <button style={{
                    background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    marginTop: '20px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(243, 156, 18, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}>
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              Quality Standards & Certifications
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              International standards ensuring product excellence and safety
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {qualityStandards.map((standard, index) => (
              <div
                key={standard.title}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
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
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${standard.color}, ${standard.color}dd)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2.5rem'
                }}>
                  {standard.icon}
                </div>

                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {standard.title}
                </h4>

                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  fontSize: '0.95rem'
                }}>
                  {standard.description}
                </p>

                <div style={{
                  background: `linear-gradient(135deg, ${standard.color}, ${standard.color}dd)`,
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {standard.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Inquiry CTA */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa, #e3f2fd)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            background: 'white',
            borderRadius: '30px',
            padding: '60px 40px',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
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
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.03'%3E%3Cpath d='M11.1 44a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0zm35.4 20a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0z' fill='%231a5276'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.1
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '20px'
              }}>
                🔍
              </div>

              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '15px'
              }}>
                Looking for Specific Products?
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                Can't find what you're looking for? Contact our product specialists for custom sourcing solutions and detailed product information.
              </p>

              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  color: 'white',
                  border: 'none',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(26, 82, 118, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(26, 82, 118, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.3)';
                }}>
                  <span>🔍</span>
                  Product Inquiry
                </button>

                <button style={{
                  background: 'transparent',
                  color: '#1a5276',
                  border: '2px solid #1a5276',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#1a5276';
                  e.target.style.color = 'white';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#1a5276';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <span>⚙️</span>
                  Our Services
                </button>
              </div>

              {/* Quick Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '20px',
                marginTop: '50px',
                maxWidth: '600px',
                margin: '50px auto 0'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #27ae60, #1e8449)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>1000+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Products</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>4</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Sectors</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #8e44ad, #5b2c6f)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>50+</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Countries</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>24/7</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Modal */}
      {selectedProduct && (
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
        onClick={() => setSelectedProduct(null)}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
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
                {selectedProduct.title}
              </h3>
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666',
                padding: '5px'
              }}
              onClick={() => setSelectedProduct(null)}>
                ✕
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {selectedProduct.products.map((product, index) => (
                <div key={index} style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef'
                }}>
                  {product}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="display: flex"][style*="flex-wrap: wrap"] {
            flex-direction: column !important;
            align-items: center !important;
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
          
          .product-modal {
            padding: 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 60px 40px"] {
            padding: 40px 20px !important;
          }
          
          div[style*="padding: 40px 30px"] {
            padding: 25px 20px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Products;