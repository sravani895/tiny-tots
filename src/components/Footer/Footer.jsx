import React from 'react';
import './Footer.css';
import { FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaEnvelopeOpen } from 'react-icons/fa';
import logo from '../../assets/tiny-tots-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <div className="envelope-icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Join The Tiny Tots Family</h3>
              <p>Get early access to new collections, offers and more!</p>
            </div>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-links-section">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src={logo} alt="Tiny Tots Logo" />
            </div>
            <p className="copyright">© 2026 Tiny Tots. All Rights Reserved.</p>
          </div>

          {/* About Us Column */}
          <div className="footer-col">
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Why Tiny Tots</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Customer Service Column */}
          <div className="footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          {/* Shop Column */}
          <div className="footer-col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">Boys</a></li>
              <li><a href="#">Girls</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Shop by Age</a></li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div className="footer-col connect-col">
            <h4>CONNECT WITH US</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaEnvelopeOpen /></a>
            </div>
            <div className="contact-details">
              <p>Email: hello@tinytots.com</p>
              <p>Phone: +1 888 422 10</p>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
