import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('telemetry');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="top">
      {/* Ambient background glows */}
      <div className="ambient-glow-top"></div>

      <div className="container">
        {/* Hero: left narrative + right lifecycle overview panel (Ready to Scale layout) */}
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
              </svg>
              <span>{BRAND_CONFIG.productDescriptor}</span>
            </div>

            <h1 className="hero-headline">
              {BRAND_CONFIG.heroHeadline}
            </h1>

            <p className="hero-subhead">
              {BRAND_CONFIG.heroSubhead}
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollTo('book-demo')}
              >
                <span>Request a Demo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => scrollTo('workflow')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Explore Workflow</span>
              </button>
            </div>

            <ul className="hero-trust-row">
              {['Order to delivery', 'BOM & routing', 'Quality traceability'].map((item) => (
                <li key={item}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lifecycle overview panel (descriptive; not live data) */}
          <aside className="hero-lifecycle-panel" aria-label={`${BRAND_CONFIG.productName} lifecycle overview`}>
            <div className="hlp-header">
              <img src="/logo.png" alt="" className="hlp-logo" />
              <div className="hlp-title">
                <span className="hlp-kicker">{BRAND_CONFIG.productName}</span>
                <strong>One platform from customer order to delivery</strong>
              </div>
              <span className="hlp-tag">Lifecycle</span>
            </div>

            <ol className="hlp-steps">
              {[
                'Customer orders & quotations',
                'Drawings, BOM & routing',
                'Material planning & procurement',
                'Production planning & execution',
                'Quality control & traceability',
                'Dispatch, delivery & returns'
              ].map((label, i) => (
                <li key={label}>
                  <span className="hlp-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>

            <div className="hlp-chips">
              {['Inventory', 'AI analytics', 'Role dashboards'].map((chip) => (
                <span key={chip} className="hlp-chip">{chip}</span>
              ))}
            </div>
          </aside>
        </div>

        {/* Scope at a glance: counts of what this page documents */}
        <div className="hero-stats" role="list">
          {[
            { value: '6', label: 'Lifecycle stages' },
            { value: '6', label: 'Core ERP modules' },
            { value: '6', label: 'Applied AI capabilities' },
            { value: '9', label: 'Role-based views' }
          ].map((stat) => (
            <div key={stat.label} className="hero-stat" role="listitem">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Command Center Mockup */}
        <div className="hero-mockup-wrapper">
          <div className="hero-mockup-glow"></div>
          <div className="hero-mockup">
            {/* Topbar of the command center window */}
            <div className="mockup-topbar">
              <div className="mockup-title-bar">
                <div className="window-dots">
                  <div className="window-dot dot-red"></div>
                  <div className="window-dot dot-yellow"></div>
                  <div className="window-dot dot-green"></div>
                </div>
                <span>{BRAND_CONFIG.productName} // MANUFACTURING COMMAND CENTER</span>
                <span className="mockup-label">Illustrative Operational Preview</span>
              </div>

              {/* View Switcher Tabs */}
              <div className="mockup-tabs">
                <button
                  type="button"
                  className={`mockup-tab-btn ${activeTab === 'telemetry' ? 'active' : ''}`}
                  onClick={() => setActiveTab('telemetry')}
                >
                  Shop Floor Status
                </button>
                <button
                  type="button"
                  className={`mockup-tab-btn ${activeTab === 'dispatch' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dispatch')}
                >
                  Dynamic Dispatch
                </button>
                <button
                  type="button"
                  className={`mockup-tab-btn ${activeTab === 'diagnostics' ? 'active' : ''}`}
                  onClick={() => setActiveTab('diagnostics')}
                >
                  Machine Diagnostics
                </button>
              </div>
            </div>

            {/* Mockup Body Content */}
            <div className="mockup-body">
              {activeTab === 'telemetry' && (
                <div>
                  {/* Six Key Illustrative Indicators */}
                  <div className="telemetry-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
                    <div className="telemetry-card">
                      <span className="telemetry-label">Active Work Orders</span>
                      <div className="telemetry-val">
                        14 / 14 <span className="telemetry-tag tag-active">Running</span>
                      </div>
                    </div>
                    <div className="telemetry-card">
                      <span className="telemetry-label">Production Completion</span>
                      <div className="telemetry-val">
                        94.2% <span className="telemetry-tag tag-active">On Track</span>
                      </div>
                    </div>
                    <div className="telemetry-card">
                      <span className="telemetry-label">Material Availability</span>
                      <div className="telemetry-val">
                        98.6% <span className="telemetry-tag tag-active">Staged</span>
                      </div>
                    </div>
                    <div className="telemetry-card">
                      <span className="telemetry-label">Work-Center Utilization</span>
                      <div className="telemetry-val">
                        91.4% <span className="telemetry-tag tag-active">Optimal</span>
                      </div>
                    </div>
                    <div className="telemetry-card">
                      <span className="telemetry-label">Quality Pass Rate</span>
                      <div className="telemetry-val">
                        99.1% <span className="telemetry-tag tag-active">First-Pass</span>
                      </div>
                    </div>
                    <div className="telemetry-card">
                      <span className="telemetry-label">On-Time Delivery</span>
                      <div className="telemetry-val">
                        97.8% <span className="telemetry-tag tag-active">Committed</span>
                      </div>
                    </div>
                  </div>

                  <div className="workcenters-table-container">
                    <div className="table-title">
                      <span>Simulated Shop-Floor Work Center Telemetry</span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        Illustrative discrete manufacturing telemetry stream
                      </span>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                      <table className="sim-table">
                        <thead>
                          <tr>
                            <th>Cell ID</th>
                            <th>Manufacturing Operation</th>
                            <th>Active Batch / Product</th>
                            <th>Cycle Speed</th>
                            <th>Progress</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ color: '#22d3ee', fontWeight: 600 }}>CELL-01</td>
                            <td>Fan Stator Automated Winding</td>
                            <td>WO-8490 (56" BLDC Fan Stator)</td>
                            <td>420 rpm</td>
                            <td style={{ minWidth: '130px' }}>
                              <span>88%</span>
                              <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '88%' }}></div>
                              </div>
                            </td>
                            <td><span className="telemetry-tag tag-active">Running</span></td>
                          </tr>
                          <tr>
                            <td style={{ color: '#22d3ee', fontWeight: 600 }}>CELL-02</td>
                            <td>CNC Tube Mandrel Bending</td>
                            <td>WO-8491 (Tubular Steel Chair Frame)</td>
                            <td>14 bends/min</td>
                            <td>
                              <span>94%</span>
                              <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '94%' }}></div>
                              </div>
                            </td>
                            <td><span className="telemetry-tag tag-active">Running</span></td>
                          </tr>
                          <tr>
                            <td style={{ color: '#22d3ee', fontWeight: 600 }}>CELL-03</td>
                            <td>Robotic MIG Fixture Welding</td>
                            <td>WO-8493 (Steel Park Bench Leg Frame)</td>
                            <td>24 cm/min</td>
                            <td>
                              <span>76%</span>
                              <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '76%' }}></div>
                              </div>
                            </td>
                            <td><span className="telemetry-tag tag-active">Running</span></td>
                          </tr>
                          <tr>
                            <td style={{ color: '#22d3ee', fontWeight: 600 }}>CELL-04</td>
                            <td>Dynamic Fan Blade Balancing</td>
                            <td>WO-8492 (Aerodynamic Aluminum Blades)</td>
                            <td>1,800 rpm</td>
                            <td>
                              <span>98%</span>
                              <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '98%' }}></div>
                              </div>
                            </td>
                            <td><span className="telemetry-tag tag-active">Inspection Pass</span></td>
                          </tr>
                          <tr>
                            <td style={{ color: '#22d3ee', fontWeight: 600 }}>CELL-05</td>
                            <td>Automated Powder Coating Line</td>
                            <td>WO-8491 (Ergonomic Chair - Matte Charcoal)</td>
                            <td>2.2 m/min</td>
                            <td>
                              <span>62%</span>
                              <div className="progress-bar-bg">
                                <div className="progress-bar-fill" style={{ width: '62%' }}></div>
                              </div>
                            </td>
                            <td><span className="telemetry-tag tag-active">Curing @ 190°C</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'dispatch' && (
                <div className="dispatch-view">
                  <div className="dispatch-panel">
                    <h4>
                      <span className="section-tag-dot"></span>
                      Work Order Queue &amp; Cell Allocation
                    </h4>
                    <div className="dispatch-list">
                      <div className="dispatch-item">
                        <div>
                          <strong>WO-8490: BLDC Fan Motor Stator Winding</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>
                            BOM Rev D | Copper wire 0.35mm reserved | Cell-01
                          </div>
                        </div>
                        <span className="telemetry-tag tag-active">In Production</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>WO-8491: Tubular Steel Stacking Chair (Batch 250)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>
                            Mandrel tooling loaded | Operator shift certified | Cell-02
                          </div>
                        </div>
                        <span className="telemetry-tag tag-active">Staged</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>WO-8492: 3-Blade Aerodynamic Set (Stamping &amp; Balance)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>
                            High-precision pitch angle inspection | Cell-04
                          </div>
                        </div>
                        <span className="telemetry-tag tag-active">Final Stage</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>WO-8493: Perforated Steel Public Bench Frame</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>
                            Awaiting sheet laser-cutting completion (ETA 35m)
                          </div>
                        </div>
                        <span className="telemetry-tag tag-warning">Queued Next</span>
                      </div>
                    </div>
                  </div>

                  <div className="dispatch-panel">
                    <h4>
                      <span className="section-tag-dot" style={{ background: '#b05bff', boxShadow: '0 0 8px #b05bff' }}></span>
                      Intelligent Bottleneck Mitigation
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '14px' }}>
                      {BRAND_CONFIG.productName} evaluates real-time cycle times against committed delivery schedules. When a work-center experiences a micro-stoppage or tooling changeover, the system highlights alternate routing sequences to preserve dispatch commitments.
                    </p>
                    <div style={{ background: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', padding: '12px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.78rem', color: '#22d3ee', fontWeight: '600', marginBottom: '4px' }}>
                        Simulated Scheduling Event:
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                        Preventive wear alert on Cell-02 tube bender hydraulic seal. System schedules 15-minute maintenance window between chair batches, reallocating pre-bent stock to welding Cell-03 without starving the downstream line.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'diagnostics' && (
                <div className="dispatch-view">
                  <div className="dispatch-panel">
                    <h4>
                      <span className="section-tag-dot" style={{ background: '#22d3ee' }}></span>
                      Machine Telemetry &amp; Signal Monitoring
                    </h4>
                    <div className="dispatch-list">
                      <div className="dispatch-item">
                        <div>
                          <strong>Stator Winding Spindle (Cell-01)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Vibration: 1.2 mm/s RMS (Nominal threshold &lt; 2.5 mm/s)</div>
                        </div>
                        <span className="telemetry-tag tag-active">Healthy</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>Hydraulic Mandrel Bender Pressure (Cell-02)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Clamping Force: 145 bar | Oil Temp: 44°C</div>
                        </div>
                        <span className="telemetry-tag tag-active">Healthy</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>Powder Coat Curing Oven Thermal Zone (Cell-05)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Zone A: 191°C | Zone B: 189°C (Tolerance: ±3°C)</div>
                        </div>
                        <span className="telemetry-tag tag-active">In Tolerance</span>
                      </div>
                      <div className="dispatch-item">
                        <div>
                          <strong>Blade Stamping Die Wear Sensor (Cell-04)</strong>
                          <div style={{ color: '#94a3b8', fontSize: '0.74rem' }}>Stroke count: 48,200 / 50,000 before regrind</div>
                        </div>
                        <span className="telemetry-tag tag-warning">Regrind at 50k</span>
                      </div>
                    </div>
                  </div>

                  <div className="dispatch-panel">
                    <h4>
                      <span className="section-tag-dot" style={{ background: '#00ffaa' }}></span>
                      Condition-Based Maintenance Planning
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '14px' }}>
                      Rather than relying solely on static calendar intervals, {BRAND_CONFIG.productName} monitors machine hours, tool stroke counts, and telemetry to recommend maintenance during scheduled shift changeovers before line-down failures occur.
                    </p>
                    <div style={{ background: 'rgba(99, 102, 241, 0.12)', border: '1px solid rgba(99, 102, 241, 0.35)', padding: '12px', borderRadius: '6px' }}>
                      <div style={{ fontSize: '0.78rem', color: '#c084fc', fontWeight: '600', marginBottom: '4px' }}>
                        Automated Work Order Preview:
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                        Stamping die regrind maintenance work order (PM-402) generated for Cell-04. Recommended window: Friday shift handover (18:00 UTC). Backup die set verified in Tool Crib Bay B-3.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Industrial Compatibility Bar */}
        <div className="hero-sectors">
          <div className="hero-sectors-label">
            Engineered for Modern Discrete &amp; Fabricated Manufacturing
          </div>
          <div className="sectors-pills">
            <span className="sector-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Ceiling Fans &amp; Component Manufacturing
            </span>
            <span className="sector-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Steel Chairs, Benches &amp; Furniture
            </span>
            <span className="sector-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              Fabricated Metal &amp; Enclosures
            </span>
            <span className="sector-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              Precision CNC Machining &amp; Tooling
            </span>
            <span className="sector-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>
              Industrial Equipment &amp; Assembly
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
