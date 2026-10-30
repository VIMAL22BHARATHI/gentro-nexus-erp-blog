import React from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Architecture() {
  const layers = [
    {
      num: '01',
      title: 'Presentation & Persona Dashboards',
      desc: 'Role-optimized user interfaces for executive web dashboards, planner desktops, and ruggedized shop-floor touch terminals.',
      components: ['Plant Executive Console', 'Finite Capacity Gantt UI', 'Paperless Job Traveler', 'Mobile Barcode Scanner']
    },
    {
      num: '02',
      title: 'Core Manufacturing ERP Modules',
      desc: 'Six interconnected business modules operating on a single real-time data model to eliminate departmental latency.',
      components: ['Inventory & Warehousing', 'Production & MES', 'Purchasing & Sourcing', 'Sales & CPQ', 'Quality & CAPA', 'Job Costing']
    },
    {
      num: '03',
      title: 'Workflow Engine & Business Rules',
      desc: 'The orchestration fabric enforcing engineering revision gates, automated BOM explosion, approval thresholds, and handoffs.',
      components: ['Order-to-Delivery Orchestrator', 'BOM Multi-Tier Decomposition', 'ATP Delivery Engine', 'Quarantine Gates']
    },
    {
      num: '04',
      title: 'Industrial AI & Optimization Services',
      desc: 'Operations research mathematical solvers, constraint-satisfaction algorithms, and statistical telemetry analytics.',
      components: ['MILP Scheduling Solver', 'Predictive Wear Regressors', 'Computer Vision Pipeline', 'Plant NLP Copilot']
    },
    {
      num: '05',
      title: 'Unified Time-Series & Relational Store',
      desc: 'High-integrity transactional database combined with time-series telemetry storage for full bidirectional lot and sensor genealogy.',
      components: ['Relational ERP Core', 'Time-Series Telemetry Store', 'Immutable Serial Genealogy', 'Ledger Audit Journal']
    }
  ];

  const integrations = [
    {
      category: 'Engineering & CAD / PLM',
      status: 'Planned Integration Interface',
      tools: 'SolidWorks, Autodesk Inventor, PTC Creo, STEP / DXF flat-pattern parsers.',
      purpose: 'Bi-directional synchronization of 2D/3D drawing revisions, CAD models, and automated engineering BOM creation.'
    },
    {
      category: 'Shop-Floor PLCs, CNCs & SCADA',
      status: 'Planned Industrial Protocol Gateway',
      tools: 'OPC-UA, MQTT, Modbus TCP, Siemens S7, Fanuc Focas, Haas Ethernet.',
      purpose: 'Live streaming of spindle speeds, cycle counts, thermal states, and automated unit completion timestamps.'
    },
    {
      category: 'External Supplier & Logistics EDI',
      status: 'Planned B2B Gateway',
      tools: 'EDI 850 (PO), EDI 855 (PO Ack), EDI 856 (ASN shipping notice), carrier API tracking.',
      purpose: 'Automated electronic transmission of material requisitions and inbound shipping tracking from suppliers.'
    },
    {
      category: 'Enterprise Accounting & Financial Systems',
      status: 'Planned API Bridge',
      tools: 'General Ledger bridges, ERP legacy migration connectors, standard REST / GraphQL webhooks.',
      purpose: 'Periodic or live journal entry synchronization for corporate balance sheet consolidation and tax filings.'
    }
  ];

  return (
    <section className="architecture-section" id="architecture">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            System Architecture &amp; Connectivity
          </div>
          <h2 className="section-title">
            Engineered for Stability, <br />
            <span className="gradient-text">Scalability &amp; Extensibility</span>
          </h2>
          <p className="section-subtitle">
            {BRAND_CONFIG.productName} is built around a multi-tier manufacturing architecture that connects transactional ERP modules with real-time industrial telemetry and planned external integrations.
          </p>
          <div style={{ marginTop: '10px' }}>
            <span className="mockup-label" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              Conceptual Architecture &amp; Planned Integration Specifications
            </span>
          </div>
        </div>

        {/* Architecture Stack */}
        <div className="arch-stack">
          {layers.map((layer) => (
            <div key={layer.num} className="arch-layer-card">
              <div className="arch-layer-meta">
                <span className="arch-layer-num">LAYER {layer.num}</span>
                <h3 className="arch-layer-title">{layer.title}</h3>
                <p className="arch-layer-desc">{layer.desc}</p>
              </div>

              <div className="arch-chips-grid">
                {layer.components.map((comp, idx) => (
                  <span key={idx} className="arch-chip">
                    <span className="chip-dot"></span>
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Planned Integrations Grid */}
        <div className="integrations-container">
          <div className="integrations-header">
            <h3>Planned Integration Ecosystem</h3>
            <p>
              Designed to connect with existing engineering CAD tools, machine control networks (OT), and corporate finance systems.
            </p>
          </div>

          <div className="integrations-grid">
            {integrations.map((item, idx) => (
              <div key={idx} className="integration-card">
                <div className="integration-top">
                  <span className="integration-cat">{item.category}</span>
                  <span className="integration-status">{item.status}</span>
                </div>
                <div className="integration-tools">
                  <strong>Target Protocols &amp; Systems: </strong>
                  <span>{item.tools}</span>
                </div>
                <p className="integration-purpose">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
