import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // If clicking demo, focus on the first input
      if (id === 'book-demo') {
        setTimeout(() => {
          const firstInput = document.getElementById('demo-fullName');
          if (firstInput) firstInput.focus();
        }, 500);
      }
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand Link: Sleek GENTRO Wordmark on the left */}
        <a
          href="#top"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label={`${BRAND_CONFIG.brandPrefix} - ${BRAND_CONFIG.productDescriptor}`}
        >
          {/* Brand Logo */}
          <div className="navbar-logo-badge" aria-hidden="true">
            <img
              src="/logo.png"
              alt={`${BRAND_CONFIG.brandPrefix} Logo`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 'inherit',
                display: 'block'
              }}
            />
          </div>

          <div className="navbar-product-lockup">
            <div className="navbar-product-name-row">
              <span className="navbar-product-name">{BRAND_CONFIG.brandPrefix}</span>
              <span className="navbar-product-erp">NEXUS</span>
            </div>
            <span className="navbar-product-pill">Manufacturing AI</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a
                href="#workflow"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('workflow');
                }}
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="#modules"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('modules');
                }}
              >
                Modules
              </a>
            </li>
            <li>
              <a
                href="#ai-capabilities"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('ai-capabilities');
                }}
              >
                AI
              </a>
            </li>
            <li>
              <a
                href="#roles"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('roles');
                }}
              >
                Role Views
              </a>
            </li>
            <li>
              <a
                href="#use-cases"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('use-cases');
                }}
              >
                Industries
              </a>
            </li>
            <li>
              <a
                href="#architecture"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('architecture');
                }}
              >
                Architecture
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('benefits');
                }}
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('faq');
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn btn-primary nav-btn-demo"
            onClick={() => scrollToSection('book-demo')}
          >
            <span>Request Demo</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <a
          href="#workflow"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('workflow');
          }}
        >
          Manufacturing Workflow (Order-to-Delivery)
        </a>
        <a
          href="#modules"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('modules');
          }}
        >
          ERP Modules (6 Core Areas)
        </a>
        <a
          href="#ai-capabilities"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('ai-capabilities');
          }}
        >
          Applied AI Capabilities
        </a>
        <a
          href="#roles"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('roles');
          }}
        >
          Role-Based User Experience
        </a>
        <a
          href="#use-cases"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('use-cases');
          }}
        >
          Industry Use Cases (Fans, Steel Furniture, etc.)
        </a>
        <a
          href="#architecture"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('architecture');
          }}
        >
          System Architecture &amp; Integrations
        </a>
        <a
          href="#benefits"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('benefits');
          }}
        >
          Operational Benefits
        </a>
        <a
          href="#faq"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('faq');
          }}
        >
          Frequently Asked Questions
        </a>
        <a
          href="#contact"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact Us
        </a>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '12px' }}
          onClick={() => scrollToSection('book-demo')}
        >
          Request Live Demo
        </button>
      </div>
    </header>
  );
}
