import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedPosts, setAnimatedPosts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const sectionRef = useRef(null);

  const blogCategories = [
    { id: 'all', label: 'All Posts', icon: '📰' },
    { id: 'trade-insights', label: 'Trade Insights', icon: '💡' },
    { id: 'market-trends', label: 'Market Trends', icon: '📈' },
    { id: 'industry-news', label: 'Industry News', icon: '🌍' },
    { id: 'logistics', label: 'Logistics', icon: '🚛' },
    { id: 'company-news', label: 'Company News', icon: '🏢' }
  ];

  const featuredPost = {
    title: "Global Trade Outlook 2025: Opportunities and Challenges",
    description: "Exploring the emerging trends, technological advancements, and geopolitical factors shaping international trade in 2025 and beyond.",
    author: "Trade Team",
    date: "January 15, 2025",
    category: "Trade Insights",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    readTime: "12 min read"
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Digital Supply Chains",
      description: "How technology is revolutionizing supply chain management and creating new opportunities for global trade efficiency.",
      category: "market-trends",
      categoryLabel: "Market Trends",
      date: "January 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop",
      author: "Tech Team"
    },
    {
      id: 2,
      title: "India's Export Growth in Agricultural Products",
      description: "Analyzing the significant growth in India's agricultural exports and the factors driving this expansion in global markets.",
      category: "industry-news",
      categoryLabel: "Industry News",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop",
      author: "Research Team"
    },
    {
      id: 3,
      title: "Sustainable Logistics: Green Solutions for Global Trade",
      description: "Exploring eco-friendly logistics practices and how companies are reducing their carbon footprint in international shipping.",
      category: "logistics",
      categoryLabel: "Logistics",
      date: "January 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      author: "Sustainability Team"
    },
    {
      id: 4,
      title: "Expanding Trade Relations with the Middle East",
      description: "Key strategies for successful business expansion into Middle Eastern markets, including UAE and Saudi Arabia.",
      category: "trade-insights",
      categoryLabel: "Trade Insights",
      date: "January 3, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&h=250&fit=crop",
      author: "Strategy Team"
    },
    {
      id: 5,
      title: "BRINGRIGHT Achieves New Export Milestone",
      description: "Celebrating our achievement of $50 million in exports this fiscal year and expansion into five new international markets.",
      category: "company-news",
      categoryLabel: "Company News",
      date: "December 28, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=250&fit=crop",
      author: "BRINGRIGHT Team"
    },
    {
      id: 6,
      title: "Pharmaceutical Export Trends in 2025",
      description: "Understanding the evolving pharmaceutical export landscape and emerging opportunities in global healthcare markets.",
      category: "market-trends",
      categoryLabel: "Market Trends",
      date: "December 25, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      author: "Healthcare Team"
    },
    {
      id: 7,
      title: "Navigating Customs Compliance in 2025",
      description: "Essential guide to understanding new customs regulations and ensuring smooth international shipping operations.",
      category: "logistics",
      categoryLabel: "Logistics",
      date: "December 22, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
      author: "Compliance Team"
    },
    {
      id: 8,
      title: "The Future of Textile Exports from India",
      description: "Analyzing growth opportunities in the global textile market and India's competitive advantages in fashion and fabrics.",
      category: "trade-insights",
      categoryLabel: "Trade Insights",
      date: "December 20, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=250&fit=crop",
      author: "Textile Team"
    },
    {
      id: 9,
      title: "New Trade Agreements Boost Export Opportunities",
      description: "How recent bilateral trade agreements are opening new doors for Indian exporters in international markets.",
      category: "industry-news",
      categoryLabel: "Industry News",
      date: "December 18, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      author: "Policy Team"
    }
  ];

  const relatedTopics = [
    {
      icon: "📊",
      title: "Market Analysis",
      description: "In-depth analysis of global market trends and opportunities",
      color: "#3498db"
    },
    {
      icon: "⚖️",
      title: "Trade Regulations",
      description: "Updates on international trade laws and compliance requirements",
      color: "#e74c3c"
    },
    {
      icon: "⚙️",
      title: "Technology in Trade",
      description: "How technology is transforming international commerce",
      color: "#2ecc71"
    },
    {
      icon: "🤝",
      title: "Success Stories",
      description: "Real stories of successful international trade partnerships",
      color: "#f39c12"
    }
  ];

  const blogStats = [
    { icon: '📝', number: '150+', label: 'Published Articles' },
    { icon: '👥', number: '10K+', label: 'Monthly Readers' },
    { icon: '🌍', number: '25+', label: 'Topics Covered' },
    { icon: '📈', number: '95%', label: 'Reader Satisfaction' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          filteredPosts.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedPosts(prev => [...prev, index]);
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
  }, [filteredPosts]);

  useEffect(() => {
    setAnimatedPosts([]);
    setTimeout(() => {
      filteredPosts.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedPosts(prev => [...prev, index]);
        }, index * 100);
      });
    }, 300);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadingMore(false);
    }, 2000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribing(true);
      setTimeout(() => {
        setSubscribing(false);
        setEmail('');
        alert('Thank you for subscribing! You will receive our latest updates.');
      }, 1500);
    }
  };

  return (
    <div ref={sectionRef}>
      {/* Page Header */}
      <PageHeader
        title="Trade Insights & News"
        subtitle="Stay updated with the latest trends, insights, and news from the world of international trade"
        breadcrumbItems={[
          { label: 'Home', href: '#' },
          { label: 'Blog' }
        ]}
      />

      {/* Blog Categories */}
      <section style={{
        padding: '40px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            {blogCategories.map((category) => (
              <button
                key={category.id}
                style={{
                  background: activeCategory === category.id 
                    ? 'linear-gradient(135deg, #1a5276, #2980b9)' 
                    : 'white',
                  color: activeCategory === category.id ? 'white' : '#1a5276',
                  border: `2px solid ${activeCategory === category.id ? 'transparent' : '#1a5276'}`,
                  padding: '12px 25px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: activeCategory === category.id 
                    ? '0 8px 25px rgba(26, 82, 118, 0.3)' 
                    : '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => setActiveCategory(category.id)}
                onMouseOver={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.background = '#1a5276';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCategory !== category.id) {
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

      {/* Featured Post */}
      <section style={{
        padding: '60px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            background: 'white',
            borderRadius: '25px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #f39c12, #e67e22)'
            }} />
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
              padding: '40px'
            }}>
              <div>
                <div style={{
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '20px'
                }}>
                  Featured Article
                </div>
                
                <h2 style={{
                  fontSize: '2.2rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '20px',
                  lineHeight: '1.3'
                }}>
                  {featuredPost.title}
                </h2>
                
                <p style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  lineHeight: '1.7',
                  marginBottom: '25px'
                }}>
                  {featuredPost.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '25px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ color: '#888', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    👤 {featuredPost.author}
                  </span>
                  <span style={{ color: '#888', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    📅 {featuredPost.date}
                  </span>
                  <span style={{ color: '#888', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    🏷️ {featuredPost.category}
                  </span>
                  <span style={{ color: '#888', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    ⏱️ {featuredPost.readTime}
                  </span>
                </div>
                
                <button style={{
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(26, 82, 118, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}>
                  Read Full Article
                </button>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.5s ease',
                  cursor: 'pointer',
                  opacity: animatedPosts.includes(index) ? 1 : 0,
                  transform: animatedPosts.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  height: 'fit-content'
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
                  position: 'relative',
                  height: '200px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                    color: 'white',
                    padding: '6px 15px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {post.categoryLabel}
                  </div>
                </div>

                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1a5276',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>
                    {post.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    marginBottom: '20px',
                    fontSize: '0.85rem',
                    color: '#888',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      📅 {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      ⏱️ {post.readTime}
                    </span>
                  </div>
                  
                  <a href="#" style={{
                    color: '#f39c12',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#e67e22';
                    e.target.style.gap = '8px';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#f39c12';
                    e.target.style.gap = '5px';
                  }}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>

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
              {loadingMore ? 'Loading...' : 'Load More Articles'}
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f0f8ff, #e3f2fd)'
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
                Stay Updated with Trade Insights
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Subscribe to our newsletter and receive the latest trade insights, market trends, and industry news directly in your inbox.
              </p>
            </div>
            
            <form 
              onSubmit={handleNewsletterSubmit}
              style={{
                display: 'flex',
                gap: '0',
                background: 'white',
                borderRadius: '50px',
                padding: '5px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '2px solid #e9ecef'
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  padding: '15px 20px',
                  borderRadius: '45px 0 0 45px',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                disabled={subscribing}
                style={{
                  background: 'linear-gradient(135deg, #1a5276, #2980b9)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 25px',
                  borderRadius: '0 45px 45px 0',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: subscribing ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {subscribing ? '⏳' : '✈️'} {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Related Topics */}
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
              Explore More Topics
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover more insights across different areas of international trade
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {relatedTopics.map((topic, index) => (
              <div
                key={topic.title}
                style={{
                  background: 'white',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer',
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
                  background: `linear-gradient(135deg, ${topic.color}, ${topic.color}dd)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '2.5rem'
                }}>
                  {topic.icon}
                </div>

                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1a5276',
                  marginBottom: '15px'
                }}>
                  {topic.title}
                </h4>

                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {topic.description}
                </p>

                <a href="#" style={{
                  color: topic.color,
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
                onMouseOver={(e) => {
                  e.target.style.gap = '8px';
                  e.target.style.transform = 'translateX(3px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.gap = '5px';
                  e.target.style.transform = 'translateX(0)';
                }}>
                  Explore Articles →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Statistics */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px'
          }}>
            {blogStats.map((stat, index) => (
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
        background: 'linear-gradient(135deg, #f0f8ff, #e3f2fd)'
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
                📚
              </div>

              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#1a5276',
                marginBottom: '15px'
              }}>
                Have a Trade Story to Share?
              </h3>

              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                We'd love to hear about your international trade experiences, insights, or questions. Get in touch with our editorial team to contribute to our blog.
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
                  <span>✍️</span>
                  Submit Your Story
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
                  <span>📧</span>
                  Contact Editorial Team
                </button>
              </div>

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
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>Weekly</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>New Articles</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>Expert</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Contributors</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #8e44ad, #5b2c6f)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>Global</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Perspectives</div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '5px' }}>Real-time</div>
                  <div style={{ fontSize: '0.9rem', opacity: '0.9' }}>Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            text-align: center !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
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
          
          form[style*="display: flex"] {
            flex-direction: column !important;
            border-radius: 20px !important;
          }
          
          form input {
            border-radius: 15px !important;
            margin-bottom: 10px !important;
          }
          
          form button {
            border-radius: 15px !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 60px 40px"] {
            padding: 40px 20px !important;
          }
          
          div[style*="padding: 40px 30px"] {
            padding: 25px 20px !important;
          }
          
          div[style*="padding: 40px"] {
            padding: 25px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="gap: 20px"] {
            gap: 15px !important;
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

export default Blog;