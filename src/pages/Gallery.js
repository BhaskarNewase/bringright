import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('*');
  const [animatedItems, setAnimatedItems] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const galleryCategories = [
    { id: '*', label: 'All', icon: '🌟' },
    { id: 'office', label: 'Office & Facilities', icon: '🏢' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'logistics', label: 'Logistics', icon: '🚛' },
    { id: 'events', label: 'Events & Meetings', icon: '🤝' },
    { id: 'certifications', label: 'Certifications', icon: '📜' },
    { id: 'team', label: 'Team', icon: '👥' }
  ];

  const galleryItems = [
    // Office & Facilities
    {
      id: 1,
      category: 'office',
      title: 'Corporate Office',
      description: 'Our modern office facility in Pune',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      category: 'office',
      title: 'Conference Room',
      description: 'State-of-the-art meeting facilities',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      category: 'office',
      title: 'Reception Area',
      description: 'Welcoming entrance to our office',
      image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=300&fit=crop'
    },
    // Products
    {
      id: 4,
      category: 'products',
      title: 'Petroleum Products',
      description: 'High-quality refined petroleum products',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      category: 'products',
      title: 'Gems & Jewellery',
      description: 'Exquisite gems and handcrafted jewellery',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      category: 'products',
      title: 'Textiles & Apparel',
      description: 'Premium quality textiles and garments',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=300&fit=crop'
    },
    // Logistics
    {
      id: 7,
      category: 'logistics',
      title: 'Container Shipping',
      description: 'Efficient container logistics operations',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      category: 'logistics',
      title: 'Warehouse Operations',
      description: 'Modern warehouse and storage facilities',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      category: 'logistics',
      title: 'Port Operations',
      description: 'Strategic port handling and clearance',
      image: 'https://images.unsplash.com/photo-1605642642554-ab9b86e6adee?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1605642642554-ab9b86e6adee?w=400&h=300&fit=crop'
    },
    // Events & Meetings
    {
      id: 10,
      category: 'events',
      title: 'Business Meeting',
      description: 'Strategic planning and client discussions',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      category: 'events',
      title: 'Trade Exhibition',
      description: 'Participating in international trade shows',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      category: 'events',
      title: 'Award Ceremony',
      description: 'Recognition for excellence in export',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop'
    },
    // Certifications
    {
      id: 13,
      category: 'certifications',
      title: 'Star Export House',
      description: 'Government of India recognition',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop'
    },
    {
      id: 14,
      category: 'certifications',
      title: 'ISO Certification',
      description: 'International quality standards compliance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop'
    },
    {
      id: 15,
      category: 'certifications',
      title: 'FSSC 22000-2011',
      description: 'Food safety system certification',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    },
    // Team
    {
      id: 16,
      category: 'team',
      title: 'Executive Team',
      description: 'Leadership driving our global success',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop'
    },
    {
      id: 17,
      category: 'team',
      title: 'Operations Team',
      description: 'Dedicated professionals ensuring smooth operations',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop'
    },
    {
      id: 18,
      category: 'team',
      title: 'Customer Service Team',
      description: '24/7 support for our global clients',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop'
    }
  ];

  const galleryStats = [
    { icon: '📸', number: '500+', label: 'Photos in Gallery' },
    { icon: '🏢', number: '5', label: 'Office Locations' },
    { icon: '🏆', number: '15+', label: 'Awards & Certifications' },
    { icon: '🌍', number: '50+', label: 'Countries Served' }
  ];

  const filteredItems = activeFilter === '*' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items one by one
          filteredItems.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredItems]);

  // Reset animations when filter changes
  useEffect(() => {
    setAnimatedItems([]);
    setTimeout(() => {
      filteredItems.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => [...prev, index]);
        }, index * 50);
      });
    }, 300);
  }, [activeFilter]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
    }, 2000);
  };

  const openLightbox = (item, index) => {
    setCurrentImage(item);
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setCurrentImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredItems.length
      : (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentImageIndex(newIndex);
    setCurrentImage(filteredItems[newIndex]);
  };

  return (
    <div ref={sectionRef}>
      {/* Page Header */}
      <PageHeader
        title="Our Gallery"
        subtitle="Visual Journey of Our Operations - Explore our facilities, products, partnerships, and global reach through images"
        breadcrumbItems={[
          { label: 'Home', href: '#' },
          { label: 'Gallery' }
        ]}
      />

      {/* Gallery Filter Section */}
      <section style={{
        padding: '60px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '40px'
          }}>
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  background: activeFilter === category.id 
                    ? 'linear-gradient(135deg, #1a5276, #2980b9)' 
                    : 'white',
                  color: activeFilter === category.id ? 'white' : '#1a5276',
                  border: `2px solid ${activeFilter === category.id ? 'transparent' : '#1a5276'}`,
                  padding: '12px 25px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: activeFilter === category.id 
                    ? '0 8px 25px rgba(26, 82, 118, 0.3)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => setActiveFilter(category.id)}
                onMouseOver={(e) => {
                  if (activeFilter !== category.id) {
                    e.target.style.background = '#1a5276';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeFilter !== category.id) {
                    e.target.style.background = 'white';
                    e.target.style.color = '#1a5276';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section style={{
        padding: '80px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer',
                  opacity: animatedItems.includes(index) ? 1 : 0,
                  transform: animatedItems.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  height: '300px'
                }}
                onClick={() => openLightbox(item, index)}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(26, 82, 118, 0.9), rgba(41, 128, 185, 0.9))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="gallery-overlay">
                    <div style={{
                      textAlign: 'center',
                      color: 'white',
                      padding: '20px'
                    }}>
                      <h5 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        marginBottom: '10px',
                        transform: 'translateY(20px)',
                        transition: 'transform 0.3s ease'
                      }}>
                        {item.title}
                      </h5>
                      <p style={{
                        fontSize: '1rem',
                        marginBottom: '20px',
                        transform: 'translateY(20px)',
                        transition: 'transform 0.3s ease',
                        transitionDelay: '0.1s'
                      }}>
                        {item.description}
                      </p>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        backdropFilter: 'blur(10px)',
                        fontSize: '1.5rem',
                        transform: 'translateY(20px)',
                        transition: 'transform 0.3s ease',
                        transitionDelay: '0.2s'
                      }}>
                        🔍
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button 
              style={{
                background: loadingMore 
                  ? 'linear-gradient(135deg, #27ae60, #1e8449)' 
                  : 'linear-gradient(135deg, #1a5276, #2980b9)',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: loadingMore ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                margin: '0 auto'
              }}
              onClick={handleLoadMore}
              disabled={loadingMore}
              onMouseOver={(e) => {
                if (!loadingMore) {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 35px rgba(26, 82, 118, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                if (!loadingMore) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              <span>{loadingMore ? '⏳' : '➕'}</span>
              {loadingMore ? 'Loading...' : 'Load More Images'}
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f5e8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {galleryStats.map((stat, index) => (
              <div
                key={stat.label}
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
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2.5rem'
                }}>
                  {stat.icon}
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1a5276',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </h3>
                <p style={{
                  color: '#666',
                  fontWeight: '500',
                  margin: 0
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
                fontSize: '2.2rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '15px'
              }}>
                Want to See More?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Follow us on social media for the latest updates, behind-the-scenes content, and real-time glimpses of our operations.
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #E4405F, #C13584)',
                color: 'white',
                border: 'none',
                padding: '15px 25px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(228, 64, 95, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                📷 Instagram
              </button>
              <button style={{
                background: 'linear-gradient(135deg, #0077B5, #005885)',
                color: 'white',
                border: 'none',
                padding: '15px 25px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 119, 181, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                💼 LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showLightbox && currentImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={closeLightbox}>
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={closeLightbox}>
              ✕
            </button>

            {/* Navigation Buttons */}
            <button style={{
              position: 'absolute',
              left: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => navigateLightbox('prev')}>
              ‹
            </button>

            <button style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              cursor: 'pointer',
              fontSize: '1.5rem',
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => navigateLightbox('next')}>
              ›
            </button>

            {/* Image */}
            <img 
              src={currentImage.image} 
              alt={currentImage.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Image Info */}
            <div style={{
              padding: '20px',
              background: 'white'
            }}>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '10px'
              }}>
                {currentImage.title}
              </h4>
              <p style={{
                color: '#666',
                margin: 0,
                fontSize: '1rem'
              }}>
                {currentImage.description}
              </p>
              <div style={{
                marginTop: '15px',
                color: '#999',
                fontSize: '0.9rem'
              }}>
                Image {currentImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .gallery-overlay {
          opacity: 0 !important;
        }
        
        div:hover .gallery-overlay {
          opacity: 1 !important;
        }
        
        div:hover .gallery-overlay h5,
        div:hover .gallery-overlay p,
        div:hover .gallery-overlay div {
          transform: translateY(0) !important;
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="display: flex"][style*="flex-wrap: wrap"] {
            justify-content: center !important;
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
          
          .lightbox-content {
            margin: 10px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 40px 30px"] {
            padding: 25px 20px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gap: 15px"] {
            gap: 10px !important;
          }
          
          button[style*="padding: 12px 25px"] {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;