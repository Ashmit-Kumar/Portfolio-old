import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Name and Tagline */}
          <div className="footer-brand">
            <h2 className="footer-name">Ashmit Kumar</h2>
            <div className="tagline-wrapper">
              <div className="arrow-decoration">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="tagline">I write clean code.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-title">Get In Touch</h3>
            <div className="contact-items">
              <a href="mailto:ashmitkumar1020@gmail.com" className="contact-item">
                <FiMail className="contact-icon" />
                <span>ashmitkumar1020@gmail.com</span>
              </a>
              <a href="tel:+918957677954" className="contact-item">
                <FiPhone className="contact-icon" />
                <span>+91 8957677954</span>
              </a>
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <span>Kanpur, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
            <h3 className="socials-title">Connect</h3>
            <div className="social-links">
              <a
                href="https://github.com/Ashmit-Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
                title="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/ashmitkumar1020"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>
      </div>
    </footer>
  );
};

export default Footer;
