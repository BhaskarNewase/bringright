// Footer Component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Bringright International Pvt Ltd</h5>
            <p>Your trusted partner in global trade since 1994. Star Export House with international certifications.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/bring-right-international-pvt-ltd" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/bringright_international" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/BringrightI" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576672798002" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/@bringright-international" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li><a href="#services">Import Services</a></li>
              <li><a href="#services">Export Solutions</a></li>
              <li><a href="#services">Logistics Support</a></li>
              <li><a href="#services">Trade Consultation</a></li>
            </ul>
          </div>

          <div className="col-lg-5 col-md-6">
            <h5 className="footer-title">Contact Information</h5>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt me-2"></i>YASHLAXMI S.NO. 54, NEAR PRANIT COMPUTER<br />Karvenagar, Pune, Maharashtra, India, 411052</p>
              <p><i className="fas fa-envelope me-2"></i>contact@bringrightinternational.com</p>
              <p><i className="fas fa-phone me-2"></i>+91 9975349144/8888653131/9579670950</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-4 pt-4 border-top">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; {currentYear} Bringright International Pvt Ltd All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">Star Export House | CRISIL & ICRA Rated</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;