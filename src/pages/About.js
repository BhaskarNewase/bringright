import PageHeader from "../components/PageHeader";
import RedesignedAboutSection from "../components/RedesignedAboutSection";

// About Page Component
const About = () => {
  return (
    <div>

    <PageHeader
        title="About Bringright International Pvt Ltd"
        subtitle="Your trusted partner in global trade since 2022, connecting markets across continents"
        breadcrumbItems={[
        { label: 'Home', href: '#' },
        { label: 'About Us' }
        ]}
    />

    <RedesignedAboutSection />
    
    <section class="vision-mission py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Our Vision & Mission</h2>
                <p class="section-subtitle">Driving global trade with integrity, innovation, and excellence</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-6">
                    <div class="vision-card">
                        <div class="card-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3>Our Vision</h3>
                        <p>To be the most trusted and innovative global trade partner, enabling businesses worldwide to achieve sustainable growth through seamless international commerce while maintaining the highest standards of quality, compliance, and customer satisfaction.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="mission-card">
                        <div class="card-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <h3>Our Mission</h3>
                        <p>We are committed to delivering comprehensive import-export solutions that bridge global markets, facilitate international trade, and create value for our clients through expertise, innovation, and unwavering dedication to excellence in every transaction.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="why-choose-us py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Why Choose Bringright International?</h2>
                <p class="section-subtitle">Your success in global trade is our commitment</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-globe-americas"></i>
                        </div>
                        <h4>Global Network</h4>
                        <p>Extensive network across 50+ countries with established partnerships and local expertise</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h4>Compliance Expertise</h4>
                        <p>Deep understanding of international trade regulations and compliance requirements</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h4>30+ Years Experience</h4>
                        <p>Three decades of proven expertise in facilitating successful international trade</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <h4>24/7 Support</h4>
                        <p>Round-the-clock customer support to ensure your trade operations never stop</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-truck-fast"></i>
                        </div>
                        <h4>End-to-End Solutions</h4>
                        <p>Comprehensive logistics and supply chain management from origin to destination</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h4>Market Intelligence</h4>
                        <p>Real-time market insights and trend analysis to optimize your trade strategies</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <h4>Trusted Partnerships</h4>
                        <p>Strong relationships with leading shipping lines, freight forwarders, and customs authorities</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="why-card text-center">
                        <div class="why-icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <h4>Cost Effective</h4>
                        <p>Competitive pricing and value-added services that maximize your return on investment</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="partners py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Our Valued Partners</h2>
                <p class="section-subtitle">Strategic alliances that strengthen our global capabilities</p>
            </div>
            
            <div class="partner-category mb-5">
                <h3 class="category-title text-center mb-4">Shipping & Logistics Partners</h3>
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/assets/images/maersk-line.png" alt="Maersk Line" />
                            <h5>Maersk Line</h5>
                            <p>Global Container Shipping</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="MSC" />
                            <h5>MSC</h5>
                            <p>Mediterranean Shipping</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="COSCO" />
                            <h5>COSCO Shipping</h5>
                            <p>Container Transportation</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="CMA CGM" />
                            <h5>CMA CGM</h5>
                            <p>Global Shipping Solutions</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="Hapag-Lloyd" />
                            <h5>Hapag-Lloyd</h5>
                            <p>Container Shipping</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="partner-category mb-5">
                <h3 class="category-title text-center mb-4">Express & Courier Partners</h3>
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="FedEx" />
                            <h5>FedEx</h5>
                            <p>Express Delivery</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="DHL" />
                            <h5>DHL Express</h5>
                            <p>International Express</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="UPS" />
                            <h5>UPS</h5>
                            <p>Logistics Solutions</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="TNT" />
                            <h5>TNT Express</h5>
                            <p>Door-to-Door Delivery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="partner-category">
                <h3 class="category-title text-center mb-4">Financial & Trade Partners</h3>
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="ICICI Bank" />
                            <h5>ICICI Bank</h5>
                            <p>Trade Finance</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="HDFC Bank" />
                            <h5>HDFC Bank</h5>
                            <p>Letter of Credit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="SBI" />
                            <h5>State Bank of India</h5>
                            <p>Export Credit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                        <div class="partner-logo">
                            <img src="/api/placeholder/120/80" alt="EXIM Bank" />
                            <h5>EXIM Bank</h5>
                            <p>Export-Import Finance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="certifications py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Our Certifications & Accreditations</h2>
                <p class="section-subtitle">Recognized standards that validate our commitment to excellence</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="certification-card text-center">
                        <div class="cert-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <h4>Star Export House</h4>
                        <p>Recognized by Government of India for outstanding export performance and contribution to India's foreign trade</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="certification-card text-center">
                        <div class="cert-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <h4>CRISIL & ICRA Rated</h4>
                        <p>Credit rating agencies validation for financial stability, business reliability, and operational excellence</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="certification-card text-center">
                        <div class="cert-icon">
                            <i class="fas fa-shield-check"></i>
                        </div>
                        <h4>FSSC 22000-2011</h4>
                        <p>Food Safety System Certification ensuring comprehensive food safety management systems</p>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-6">
                    <div class="certification-card text-center">
                        <div class="cert-icon">
                            <i class="fas fa-check-double"></i>
                        </div>
                        <h4>GMP/Kosher & Halal</h4>
                        <p>Good Manufacturing Practices with religious dietary compliance certifications for global markets</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="trade-sectors py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title">Import & Export Sectors We Serve</h2>
                <p class="section-subtitle">Comprehensive expertise across diverse industry verticals</p>
            </div>
            
            <div class="row g-4">
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-oil-can"></i>
                        </div>
                        <h5>Petroleum Products</h5>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-gem"></i>
                        </div>
                        <h5>Gems & Jewellery</h5>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h5>Textiles & Apparel</h5>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-pills"></i>
                        </div>
                        <h5>Pharmaceuticals</h5>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <h5>Agriculture</h5>
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="sector-item text-center">
                        <div class="sector-icon">
                            <i class="fas fa-cogs"></i>
                        </div>
                        <h5>Engineering</h5>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-4">
                <a href="products.html" class="btn btn-primary">
                    <i class="fas fa-arrow-right me-2"></i>View All Products
                </a>
            </div>
        </div>
    </section>
    </div>
  );
};

export default About;