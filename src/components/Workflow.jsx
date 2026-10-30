import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Customer Orders',
      fullTitle: 'Stage 1 — Customer Orders and Requirements',
      summary:
        'The lifecycle begins when customer enquiries, custom requests, and quotations are captured. The system validates technical requirements, product specifications, quantities, and delivery commitments before creating confirmed sales orders.',
      highlights: [
        'Enquiry-to-Quotation: Rapid Configure-Price-Quote (CPQ) margin calculation based on current component costs.',
        'Specification Validation: Automated verification of custom engineering parameters against plant capabilities.',
        'Committed Delivery Dates: Available-to-Promise (ATP) calculations evaluating material pipelines and capacity.',
        'Formal Confirmation: Customer acceptance transforms quotes directly into firm sales orders without re-keying.'
      ],
      inputs: 'Customer RFQ, EDI transmission, technical specifications, CAD brief, and volume expectations.',
      erpActivities:
        'Quotation generation, pricing authorization, customer credit verification, order validation, and sales contract confirmation.',
      aiRole:
        'Semantic parsing of customer requirements, intelligent price-optimization suggestions, and lead-time feasibility estimation.',
      outputs: 'Confirmed Sales Order (SO) with validated delivery schedule and locked technical specifications.',
      handoff:
        'Triggers Stage 2 (Engineering) for BOM validation, custom drawing approvals, or standard routing verification.',
      mfgExample:
        'A municipal contract for 500 perforated steel park benches: customer selects custom powder-coat color (RAL 7016) and ground-anchor mountings; system verifies margin bounds and commits a 4-week delivery window.'
    },
    {
      id: 2,
      title: 'Engineering & BOM',
      fullTitle: 'Stage 2 — Engineering and Product Design',
      summary:
        'Engineering teams establish the technical foundation for production. CAD drawings and technical specifications are linked directly to multi-tier Bills of Materials (BOM), revision controls, and manufacturing routings.',
      highlights: [
        'Drawing & Spec Management: CAD integration linking 2D/3D models and tolerances directly to part numbers.',
        'Multi-Tier BOM Explosion: Decomposes finished assemblies into sub-assemblies, fabricated parts, and hardware fasteners.',
        'Revision Control & ECOs: Engineering Change Orders (ECO) with automated version tracking and obsolescence warnings.',
        'Routing & Work Centers: Defines standard cycle times, setup guidelines, machine parameters, and tooling requirements.'
      ],
      inputs: 'Confirmed Sales Order specifications, engineering CAD models, drawing revisions, and regulatory standards.',
      erpActivities:
        'Multi-level BOM composition, routing definition, tooling assignment, engineering change sign-off, and design hand-off.',
      aiRole:
        'Drawing metadata extraction, automated BOM variance analysis between revisions, and tolerance verification suggestions.',
      outputs: 'Approved Engineering BOM (eBOM) and Manufacturing BOM (mBOM) with active routing operations.',
      handoff:
        'Hands off approved mBOM and operational routing to Stage 3 (Material Planning & Procurement) for inventory calculations.',
      mfgExample:
        'Ceiling fan motor assembly: engineering updates BOM from Revision C to D to introduce energy-efficient copper winding gauge; system flags affected stator laminations and updates winding machine program routing.'
    },
    {
      id: 3,
      title: 'Material Planning',
      fullTitle: 'Stage 3 — Material Planning and Procurement',
      summary:
        'The Material Requirements Planning (MRP) engine cross-references required raw materials, components, and hardware against on-hand warehouse inventory and open supplier purchase orders to trigger replenishment.',
      highlights: [
        'Inventory Availability Checks: Real-time stock reservation preventing double-commitment across production lines.',
        'BOM-Driven Net Requirements: Calculates exact raw material shortages based on scrap factors and lot sizing.',
        'Automated Purchase Requisitions: Generates supplier RFQs and POs for items falling below safety-stock thresholds.',
        'Supplier Lead-Time Tracking: Factors historical vendor delivery volatility into procurement scheduling.'
      ],
      inputs: 'Approved mBOM, open sales demand, warehouse stock levels, minimum batch sizes, and supplier lead times.',
      erpActivities:
        'MRP net-requirements run, material reservations, purchase requisition (PR) approvals, purchase order (PO) release, and vendor acknowledgment.',
      aiRole:
        'Probabilistic supplier lead-time forecasting, dynamic safety stock optimization, and price-trend replenishment timing.',
      outputs: 'Approved Purchase Orders to qualified suppliers and warehouse material reservation pick tickets.',
      handoff:
        'Staged raw materials and arriving components hand off to Stage 4 (Production Planning & Execution) upon receiving inspection.',
      mfgExample:
        'Tubular steel chair production: MRP checks stock for 1-inch 16-gauge cold-rolled steel tubing and rivet hardware; reserves 2,400 meters in warehouse Bay A-3 and automatically issues a replenishment PO for 5,000 meters.'
    },
    {
      id: 4,
      title: 'Production Execution',
      fullTitle: 'Stage 4 — Production Planning and Execution',
      summary:
        'Approved work orders are scheduled against finite machine and labor capacity. Operators execute jobs using digital traveler screens while machines stream real-time cycle times, scrap counts, and bottleneck alerts.',
      highlights: [
        'Finite Capacity Scheduling: Dynamic Gantt scheduling considering machine availability, tooling life, and operator skills.',
        'Digital Shop-Floor Travelers: Paperless operator terminals displaying CAD drawings, setup checklists, and step sign-offs.',
        'Real-Time Telemetry: Ingests machine line speeds, temperature, and cycle counts directly from PLCs and sensors.',
        'Bottleneck Identification: Real-time tracking of work-in-progress (WIP) queues, flagging delayed cells before shift end.'
      ],
      inputs: 'Reserved raw materials, approved manufacturing routings, machine tooling readiness, and operator shift rosters.',
      erpActivities:
        'Work order (WO) dispatch, machine queue balancing, operator time tracking, scrap logging, and WIP movement recording.',
      aiRole:
        'Constraint-based optimization solver for sequence-dependent setup reduction and autonomous dynamic re-routing around bottlenecks.',
      outputs: 'Manufactured sub-assemblies and finished units with live digital traveler production history.',
      handoff:
        'Completed components and assembled goods route to Stage 5 (Quality Assurance & Traceability) for in-line and final inspection.',
      mfgExample:
        'Ceiling fan blade stamping: 1,500 aluminum blades stamped on 200-ton press; operator logs 4 scrap pieces due to coil tail defect; system advances WO to blade balancing and powder coating without delay.'
    },
    {
      id: 5,
      title: 'Quality & Traceability',
      fullTitle: 'Stage 5 — Quality Assurance and Traceability',
      summary:
        'Quality gates throughout receiving, machining, and final assembly enforce conformance to engineering tolerances. Non-conforming items are quarantined immediately, while complete serial and lot genealogy is recorded.',
      highlights: [
        'Digital Inspection Checkpoints: First-piece, in-process, and final inspection checklists with tolerance thresholds.',
        'Defect & NCR Recording: Automated Non-Conformance Reports (NCR) triggering quarantine and Material Review Board (MRB) review.',
        'Full Lot & Serial Genealogy: Bidirectional traceability linking raw material heat lots to finished product serial numbers.',
        'CAPA & Root-Cause Analysis: Standardized corrective action workflows (8D/5-Why) to eliminate recurring quality drifts.'
      ],
      inputs: 'Manufactured assemblies, engineering tolerance drawings, inspection sampling plans, and measurement data.',
      erpActivities:
        'Dimensional verification, defect logging, rework order creation, quarantine routing, calibration logs, and certificate of conformance generation.',
      aiRole:
        'Computer vision optical defect classification, Statistical Process Control (SPC) tolerance drift alerts, and root-cause correlation.',
      outputs: 'Signed Certificate of Conformance (CoC), passed inspection stamps, and complete digital pedigree.',
      handoff:
        'Cleared finished units are released to Stage 6 (Finished Goods, Dispatch, Delivery & Returns) for packaging and freight.',
      mfgExample:
        'Steel park bench weld inspection: quality inspector performs dye-penetrant check on structural joints; records torque values for anchor bolts; attaches digital photo to serial lot record and signs off release.'
    },
    {
      id: 6,
      title: 'Dispatch & Delivery',
      fullTitle: 'Stage 6 — Finished Goods, Dispatch, Delivery, and Returns',
      summary:
        'Cleared products are packaged, serialized, and added to finished-goods inventory. Logistics teams dispatch shipments with carrier tracking, electronic bills of lading, and support structured return management (RMA).',
      highlights: [
        'Finished-Goods Inventory: Real-time bin location tracking of packed goods awaiting shipment.',
        'Packaging & Freight Manifests: Automated generation of barcode pallet labels, packing lists, and Bills of Lading (BOL).',
        'Shipment & Carrier Status: Tracking carrier pickups, transit milestones, and electronic Proof of Delivery (ePOD).',
        'Customer Returns & RMA: Structured return merchandise authorization (RMA), return inspection, warranty verification, and rework/credit workflows.'
      ],
      inputs: 'Quality-approved finished goods, customer shipping instructions, carrier rate cards, and delivery address.',
      erpActivities:
        'Pick-pack-ship staging, bill of lading generation, freight dispatch, customer invoice creation, RMA authorization, and return triage.',
      aiRole:
        'Freight carrier cost optimization, delivery arrival estimation, and return root-cause categorization.',
      outputs: 'Dispatched shipment with tracking manifest, customer invoice, updated ledger, and closed sales order.',
      handoff:
        'Lifecycle complete: updates financial ledger (COGS and revenue recognition) and closes order loop back to customer service.',
      mfgExample:
        'Ceiling fan export batch: 200 cartons barcoded, strapped on 4 heat-treated pallets; commercial invoice and packing list automatically generated; customs documentation verified; freight carrier tracking active.'
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="workflow-section" id="workflow">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            End-to-End Manufacturing Lifecycle
          </div>
          <h2 className="section-title">
            From Customer Order to <span className="gradient-text">Finished Product</span>
          </h2>
          <p className="section-subtitle">
            Explore how {BRAND_CONFIG.productName} connects every manufacturing phase—from sales quotes and engineering drawings through procurement, production, quality inspection, delivery, and return management.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div className="workflow-stepper" role="tablist">
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              role="tab"
              aria-selected={activeStep === index}
              className={`step-btn ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-indicator">0{step.id}</div>
              <span className="step-title-preview">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Detail Showcase Card */}
        <div className="workflow-detail-card">
          <div className="workflow-card-top">
            <div>
              <span className="step-meta-badge">Lifecycle Stage 0{current.id} of 06</span>
              <h3 className="step-full-title">{current.fullTitle}</h3>
            </div>
            <span className="mockup-label">Connected Digital Manufacturing Thread</span>
          </div>

          <div className="workflow-grid-spec">
            <div className="workflow-narrative">
              <p>{current.summary}</p>
              
              <div className="workflow-highlights">
                {current.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <svg className="highlight-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Manufacturing Example Spotlight */}
              <div
                style={{
                  marginTop: '22px',
                  padding: '14px 18px',
                  background: 'rgba(34, 211, 238, 0.05)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: '8px'
                }}
              >
                <div style={{ fontSize: '0.78rem', fontFamily: "'JetBrains Mono', monospace", color: '#22d3ee', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Manufacturing Example in Action:
                </div>
                <div style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                  {current.mfgExample}
                </div>
              </div>
            </div>

            <div className="workflow-spec-box">
              <div className="spec-row">
                <span className="spec-label">Stage Inputs</span>
                <span className="spec-val">{current.inputs}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Core ERP Activities</span>
                <span className="spec-val" style={{ color: '#e2e8f0' }}>{current.erpActivities}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Relevant AI Assistance</span>
                <span className="spec-val" style={{ color: '#7dd3fc' }}>
                  {current.aiRole}
                </span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Stage Outputs</span>
                <span className="spec-val" style={{ color: '#00ffaa' }}>
                  {current.outputs}
                </span>
              </div>

              <div className="spec-row">
                <span className="spec-label">Handoff to Next Stage</span>
                <span className="spec-val" style={{ color: '#c084fc' }}>
                  {current.handoff}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
