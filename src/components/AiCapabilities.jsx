import React from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function AiCapabilities() {
  const capabilities = [
    {
      id: 'predictive-maint',
      title: 'Predictive Equipment Health & Maintenance Advisory',
      status: 'Proposed Capability (Planned Architecture)',
      problem:
        'Unplanned machine breakdowns cause catastrophic line stoppages, delayed orders, and expensive overtime repairs.',
      inputs:
        'Historical maintenance logs, equipment operating hours, cycle counts, and planned IoT telemetry (vibration, bearing temperature, spindle load).',
      approach:
        'Time-series anomaly detection algorithms and degradation curve regression models identifying deviations from baseline signatures.',
      output:
        'Advisory alerts predicting component degradation windows and automated drafting of preventive maintenance work orders.',
      oversight:
        'Maintenance supervisors review telemetry graphs, approve generated work orders, and verify replacement part availability before scheduling.',
      benefit:
        'Reduces unplanned machine downtime and extends tooling longevity by addressing micro-wear before mechanical failure.',
      pipeline: ['Sensor Stream', 'Signal Decomposition', 'Anomaly Inference', 'Supervisor Review', 'Auto Work Order'],
      isFeatured: false,
      color: 'cyan',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      id: 'dynamic-scheduling',
      title: 'Intelligent Production Scheduling & Rescheduling',
      status: 'Illustrative Demonstration / Concept',
      problem:
        'Manual shift rescheduling during rush order arrivals or machine maintenance takes hours, causing line starvation or bottlenecks.',
      inputs:
        'Work order priorities, routing steps, standard cycle times, machine capacity, tooling availability, and operator skill matrix.',
      approach:
        'Operations research constraint programming and mixed-integer linear programming (MILP) solvers calculating optimal sequences.',
      output:
        'Optimized finite-capacity Gantt schedules that minimize sequence-dependent setups and re-route batches around bottlenecks.',
      oversight:
        'Production planners retain full manual override capability to accept, adjust, or reject proposed schedule alterations.',
      benefit:
        'Balances machine load, shortens customer lead times, and eliminates idle queue time across parallel work cells.',
      pipeline: ['Disruption Signal', 'Constraint Formulation', 'Optimization Solver', 'Planner Sign-Off', 'Terminal Dispatch'],
      isFeatured: true,
      color: 'purple',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'demand-forecast',
      title: 'Demand and Material Reorder Forecasting',
      status: 'Proposed Capability (Planned Architecture)',
      problem:
        'Fluctuating customer demand and supplier delivery delays lead to either costly stockouts or bloated working capital in safety stock.',
      inputs:
        'Historical sales orders, seasonal consumption patterns, supplier transit variance, and open quotation pipelines.',
      approach:
        'Probabilistic demand modeling and dynamic safety-stock formulas evaluating lead-time volatility and service-level targets.',
      output:
        'Recommended dynamic reorder points, suggested batch purchase quantities, and early warnings for extended vendor lead times.',
      oversight:
        'Procurement officers review suggested purchase quantities against current vendor contracts and budget thresholds.',
      benefit:
        'Prevents expensive stockouts on critical fasteners, coils, and electronic components while trimming unnecessary inventory carrying costs.',
      pipeline: ['Historical Sales', 'Vendor Lead Variance', 'Probabilistic Forecast', 'Buyer Authorization', 'PO Issuance'],
      isFeatured: false,
      color: 'cyan',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 'vision-quality',
      title: 'Computer-Vision-Assisted Quality Inspection',
      status: 'Proposed Capability (Planned Architecture)',
      problem:
        'Manual visual inspection is fatigue-prone, leading to occasional defect escapes that reach downstream assembly or customer delivery.',
      inputs:
        'High-resolution camera captures at inspection gates, optical sensor feeds, and engineering tolerance references.',
      approach:
        'Convolutional neural network (CNN) image classification and surface anomaly detection detecting scratches, fissures, weld voids, and solder bridging.',
      output:
        'Immediate pass/fail classification, automated non-conformance flag, and bounding-box highlighting of defect locations.',
      oversight:
        'Quality inspectors verify flagged anomalies on questionable parts before triggering formal quarantine or scrap disposition.',
      benefit:
        'Stops defective components before value-add downstream operations, reducing scrap costs and protecting brand reputation.',
      pipeline: ['Optical Capture', 'Feature Extraction', 'Defect Classification', 'Inspector Review', 'Auto Quarantine'],
      isFeatured: false,
      color: 'cyan',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      id: 'plant-copilot',
      title: 'Manufacturing Operations Copilot',
      status: 'Proposed Capability (Planned Architecture)',
      problem:
        'Extracting cross-departmental manufacturing metrics requires complex SQL queries, static spreadsheet exports, or manual reports.',
      inputs:
        'Unified ERP relational data, shop-floor dispatch logs, work order statuses, lot genealogy tables, and inventory ledgers.',
      approach:
        'Domain-specific Natural Language to SQL/API querying with constrained schema prompts and manufacturing term taxonomy.',
      output:
        'Instant factual answers, tabular summaries, and charts in response to plain-English plant inquiries (e.g., "Which work orders are at risk of missing delivery this week?").',
      oversight:
        'Query logic and underlying data tables are transparently cited alongside every generated summary for auditability.',
      benefit:
        'Empowers plant managers and executives to make informed decisions rapidly without relying on IT analysts for custom reports.',
      pipeline: ['Natural Language Prompt', 'Manufacturing Schema Mapping', 'Validated Read-Only Query', 'Synthesized Answer & Chart'],
      isFeatured: false,
      color: 'purple',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      id: 'process-optimization',
      title: 'Process Optimization & Anomaly Detection',
      status: 'Proposed Capability (Planned Architecture)',
      problem:
        'Gradual cycle time drift, energy consumption surges, and micro-stoppages often go unnoticed until overall shift throughput drops.',
      inputs:
        'Continuous machine cycle times, power consumption meters, operator station timestamps, and scrap count telemetry.',
      approach:
        'Statistical Process Control (SPC) algorithms coupled with unsupervised clustering to identify hidden bottleneck patterns.',
      output:
        'Root-cause correlation reports highlighting parameter drifts (e.g., excessive dwell time on tube bender, thermal fluctuation in paint oven).',
      oversight:
        'Industrial and manufacturing process engineers review correlation trends before revising standard work instructions.',
      benefit:
        'Enables continuous Kaizen improvements, stabilizes operational cycle times, and lowers energy consumption per manufactured unit.',
      pipeline: ['Cycle Time Telemetry', 'Multivariate Clustering', 'Drift Pattern Flag', 'Engineering Root-Cause Review'],
      isFeatured: false,
      color: 'cyan',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="ai-section" id="ai-capabilities">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            Applied Manufacturing Intelligence
          </div>
          <h2 className="section-title">
            Targeted AI Capabilities, <br />
            <span className="gradient-text">Grounded in Factory Realities</span>
          </h2>
          <p className="section-subtitle">
            {BRAND_CONFIG.productName} approaches AI as practical, specialized decision support—combining operations research, constraint solvers, and statistical telemetry models. Capabilities below represent architectural demonstrations and planned product modules.
          </p>
        </div>

        <div className="ai-grid">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className={`ai-card ${cap.isFeatured ? 'featured' : ''} ${cap.color === 'purple' ? 'purple' : ''}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div className="ai-card-icon">{cap.icon}</div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: 'uppercase',
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {cap.status}
                </span>
              </div>

              <h3 className="ai-card-title">{cap.title}</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ff4d6d' }}>Problem: </strong>
                  {cap.problem}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  <strong style={{ color: '#22d3ee' }}>Approach: </strong>
                  {cap.approach}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  <strong style={{ color: '#00ffaa' }}>Output &amp; Recommendation: </strong>
                  {cap.output}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  <strong style={{ color: '#c084fc' }}>Human Oversight: </strong>
                  {cap.oversight}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.5' }}>
                  <strong style={{ color: '#f8fafc' }}>Operational Benefit: </strong>
                  {cap.benefit}
                </div>
              </div>

              <div className="ai-flow-box">
                <div className="ai-flow-title">
                  <span className="section-tag-dot"></span>
                  Execution Pipeline Architecture
                </div>
                <div className="ai-flow-steps">
                  {cap.pipeline.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className={`flow-step ${idx === cap.pipeline.length - 1 ? 'active' : ''}`}>
                        {step}
                      </span>
                      {idx < cap.pipeline.length - 1 && <span className="flow-arrow">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
