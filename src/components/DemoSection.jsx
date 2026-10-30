import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function DemoSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    sector: '',
    plantSize: '',
    challenge: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Business email is required.';
    } else if (!emailRegex.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please provide a valid work email address.';
    }

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company / plant name is required.';
    }

    if (!formData.sector) {
      newErrors.sector = 'Please select your manufacturing industry.';
    }

    if (!formData.plantSize) {
      newErrors.plantSize = 'Please select your plant scale / workforce size.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Realistic UI submission interaction with transparent client-side feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      workEmail: '',
      companyName: '',
      sector: '',
      plantSize: '',
      challenge: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section className="demo-section" id="book-demo">
      <div className="container">
        <div className="demo-container">
          {/* Left Column: Briefing & Agenda */}
          <div className="demo-info">
            <div>
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                Tailored Product Walkthrough
              </div>
              <h3>
                Schedule a Tailored <br />
                <span className="gradient-text">{BRAND_CONFIG.productName} Demonstration</span>
              </h3>
              <p>
                Discover how {BRAND_CONFIG.productName} unifies order-to-delivery operations, BOM management, shop-floor dispatch, and quality traceability across your plants. Our solutions engineers will walk through a scenario modeled directly on your manufacturing processes.
              </p>

              <div className="agenda-list">
                <div className="agenda-item">
                  <div className="agenda-num">01</div>
                  <div className="agenda-text">
                    <h4>Shop Floor Routing &amp; BOM Review</h4>
                    <p>Analysis of your discrete or fabricated manufacturing routings, scrap factors, and staging locations.</p>
                  </div>
                </div>

                <div className="agenda-item">
                  <div className="agenda-num">02</div>
                  <div className="agenda-text">
                    <h4>Specialized Module Walkthrough</h4>
                    <p>Focused exploration of Production Scheduling, MES telemetry, or Quality Traceability tailored to your product lines.</p>
                  </div>
                </div>

                <div className="agenda-item">
                  <div className="agenda-num">03</div>
                  <div className="agenda-text">
                    <h4>Architecture &amp; Integration Roadmap</h4>
                    <p>Technical evaluation of CAD drawing links, machine sensor connectivity (OT), and legacy data migration milestones.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-assurance">
              <span className="section-tag-dot" style={{ background: '#00ffaa' }}></span>
              <span>Enterprise-grade privacy · Zero spam · Direct manufacturing specialist consultation</span>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success Card */}
          <div className="demo-form-wrapper">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate aria-label="Request ERP Demonstration Form">
                <div className="form-header">
                  <h4>Request Product Walkthrough</h4>
                  <p>Complete this form to stage your personalized platform walkthrough.</p>
                </div>

                <div className="form-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="demo-fullName">
                      Full Name *
                    </label>
                    <input
                      id="demo-fullName"
                      name="fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>

                  {/* Work Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="demo-workEmail">
                      Business Email *
                    </label>
                    <input
                      id="demo-workEmail"
                      name="workEmail"
                      type="email"
                      className={`form-input ${errors.workEmail ? 'error' : ''}`}
                      placeholder="s.jenkins@company.com"
                      value={formData.workEmail}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                    {errors.workEmail && <span className="field-error">{errors.workEmail}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="demo-companyName">
                      Company / Plant Name *
                    </label>
                    <input
                      id="demo-companyName"
                      name="companyName"
                      type="text"
                      className={`form-input ${errors.companyName ? 'error' : ''}`}
                      placeholder="e.g. Precision Dynamics Corp."
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                    {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                  </div>

                  {/* Sector */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="demo-sector">
                      Manufacturing Industry *
                    </label>
                    <select
                      id="demo-sector"
                      name="sector"
                      className={`form-select ${errors.sector ? 'error' : ''}`}
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    >
                      <option value="">Select industry segment...</option>
                      <option value="fans">Ceiling Fans &amp; Component Manufacturing</option>
                      <option value="furniture">Steel Chairs, Benches &amp; Furniture</option>
                      <option value="metal">Fabricated Metal Products &amp; Enclosures</option>
                      <option value="machining">Precision CNC Machining &amp; Tooling</option>
                      <option value="electronics">Electronics &amp; PCB Assembly</option>
                      <option value="machinery">Industrial Machinery &amp; Automation</option>
                      <option value="other">Other Discrete / Batch Manufacturing</option>
                    </select>
                    {errors.sector && <span className="field-error">{errors.sector}</span>}
                  </div>

                  {/* Plant Size */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="demo-plantSize">
                      Plant Workforce / Operational Scale *
                    </label>
                    <select
                      id="demo-plantSize"
                      name="plantSize"
                      className={`form-select ${errors.plantSize ? 'error' : ''}`}
                      value={formData.plantSize}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    >
                      <option value="">Select facility scale...</option>
                      <option value="1-50">1 - 50 Plant Employees (Single Facility)</option>
                      <option value="51-200">51 - 200 Plant Employees (Mid-Scale Facility)</option>
                      <option value="201-1000">201 - 1,000 Employees (Large Manufacturing Site)</option>
                      <option value="1000+">1,000+ Employees (Multi-Plant Enterprise Network)</option>
                    </select>
                    {errors.plantSize && <span className="field-error">{errors.plantSize}</span>}
                  </div>

                  {/* Primary Challenge */}
                  <div className="form-group full-width">
                    <label className="form-label" htmlFor="demo-challenge">
                      Primary Operational Challenge (Optional)
                    </label>
                    <textarea
                      id="demo-challenge"
                      name="challenge"
                      className="form-textarea"
                      placeholder="e.g. Currently tracking BOMs and work orders in spreadsheets; seeking real-time shop floor scheduling, lot traceability, and job costing."
                      value={formData.challenge}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Validating Request...' : 'Submit Demo Request'}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="demo-success-card">
                <div className="success-icon-badge">✓</div>
                <h4>Demo Request Recorded</h4>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your request for{' '}
                  <strong>{formData.companyName}</strong> has been successfully validated.
                </p>
                <div className="success-notice">
                  [Client-Side Preview Mode: Validated locally; no external server transmission occurred]
                </div>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', marginTop: '6px' }}>
                  In a production environment, our manufacturing solutions team would contact{' '}
                  <span style={{ color: '#22d3ee' }}>{formData.workEmail}</span> within one business day to stage a demonstration tailored to your facility.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginTop: '16px' }}
                  onClick={handleReset}
                >
                  Submit Another Demonstration Request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
