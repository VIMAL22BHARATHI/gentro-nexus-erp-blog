import React from 'react';
import GentroBranding from './GentroBranding';
import { BRAND_CONFIG } from '../constants/branding';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top-glow"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ textDecoration: 'none' }}
              aria-label="Back to Top"
            >
              <GentroBranding size="footer" showTagline={true} align="left" />
            </a>

            <p className="footer-desc">
              {BRAND_CONFIG.productName} connects customer orders, engineering drawings, multi-tier BOMs, shop-floor dispatch, in-line quality gates, and financial job costing into one integrated manufacturing workflow.
            </p>

            <div className="footer-meta-pill">
              <span className="footer-meta-dot"></span>
              <span>Platform Core: Enterprise v2.4 (Active Release)</span>
            </div>
          </div>

          {/* Column 2: Platform Modules */}
          <div className="footer-col">
            <h5>ERP Modules</h5>
            <ul className="footer-links">
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Inventory &amp; Warehousing
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Production &amp; MES Execution
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Purchasing &amp; Sourcing
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Sales &amp; CPQ Quoting
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Quality Assurance &amp; CAPA
                </a>
              </li>
              <li>
                <a
                  href="#modules"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('modules');
                  }}
                >
                  Financial Job Costing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industrial Segments */}
          <div className="footer-col">
            <h5>Manufacturing Sectors</h5>
            <ul className="footer-links">
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Ceiling Fans &amp; Components
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Steel Chairs, Benches &amp; Furniture
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Fabricated Metal &amp; Enclosures
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Precision CNC Machining &amp; Tooling
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Electronics &amp; PCB Assembly
                </a>
              </li>
              <li>
                <a
                  href="#use-cases"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('use-cases');
                  }}
                >
                  Industrial Machinery &amp; Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Architecture & Resources */}
          <div className="footer-col">
            <h5>Platform &amp; Navigation</h5>
            <ul className="footer-links">
              <li>
                <a
                  href="#workflow"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('workflow');
                  }}
                >
                  Order-to-Delivery Process
                </a>
              </li>
              <li>
                <a
                  href="#ai-capabilities"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('ai-capabilities');
                  }}
                >
                  Applied AI Architecture
                </a>
              </li>
              <li>
                <a
                  href="#roles"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('roles');
                  }}
                >
                  Role-Based User Views
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('architecture');
                  }}
                >
                  System Architecture &amp; APIs
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('benefits');
                  }}
                >
                  Operational Value Drivers
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('faq');
                  }}
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#book-demo"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('book-demo');
                  }}
                >
                  Request Technical Briefing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} {BRAND_CONFIG.productName}. All rights reserved. {BRAND_CONFIG.productDescriptor}.
          </div>

          <div className="footer-disclaimer">
            Architecture modeled for Industry 4.0 data topologies &amp; ISO 9001 digital traceability.
          </div>

          <div className="footer-legal-links">
            <a
              href="#top"
              className="footer-legal-link"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Back to Top
            </a>
            <span className="footer-legal-link">Privacy Architecture</span>
            <span className="footer-legal-link">Security Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
