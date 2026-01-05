import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const email = "ashmitkumar1020@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav-wrapper" data-state={menuOpen ? 'active' : ''}>
        <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-logo-section">
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="logo-link">
                <div className="logo">
                  <div className="logo-circle">AK</div>
                </div>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className="mobile-menu-toggle"
              >
                <FiMenu className={`menu-icon ${menuOpen ? 'hidden' : 'visible'}`} />
                <FiX className={`menu-icon close ${menuOpen ? 'visible' : 'hidden'}`} />
              </button>
            </div>

            {/* Navigation Menu */}
            <div className={`nav-menu ${menuOpen ? 'active' : ''}`} data-state={menuOpen ? 'active' : ''}>
              <div className="nav-menu-content">
                {/* Social Links */}
                <div className="header-socials">
                  <a
                    href="https://github.com/Ashmit-Kumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/ashmitkumar1020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                  
                  {/* Contact Button - Only show when scrolled */}
                  {scrolled && (
                    <button
                      onClick={() => window.location.href = `mailto:${email}`}
                      className="contact-button"
                    >
                      Contact Me
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
