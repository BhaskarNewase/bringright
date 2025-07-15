import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbItems, showStats = false, stats = [] }) => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a5276 0%, #2980b9 100%)',
      color: 'white',
      padding: '100px 0 60px',
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.1'%3E%3Cpath d='M11.1 44a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0zm35.4 20a9 9 0 1 0 17.8 0a9 9 0 0 0-17.8 0z' fill='%23ffffff'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.1
      }} />
      
      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: showStats ? '40px' : '0' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            animation: 'slideUp 0.8s ease-out'
          }}>
            {title}
          </h1>
          
          {subtitle && (
            <p style={{
              fontSize: '1.3rem',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: '0.9',
              lineHeight: '1.6',
              animation: 'slideUp 0.8s ease-out 0.2s both'
            }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Stats Section */}
        {showStats && stats.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '25px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  animation: `slideUp 0.8s ease-out ${0.3 + index * 0.1}s both`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  fontSize: '2.2rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  color: '#ffd54f'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '1rem',
                  opacity: '0.9',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          
          p {
            font-size: 1.1rem !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="padding: 100px 0 60px"] {
            padding: 80px 0 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PageHeader;