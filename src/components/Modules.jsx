import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Modules() {
  const [activeModule, setActiveModule] = useState('inventory');

  const modulesData = {
    inventory: {
      name: 'Inventory and Warehousing',
      tagline: 'Multi-Location Bin Precision & Lot Genealogy',
      purpose:
        'Maintain real-time visibility and physical control over raw materials, work-in-progress (WIP), finished goods, and maintenance tooling across plant locations, staging areas, and warehouses.',
      typicalUsers: 'Warehouse Managers, Inventory Controllers, Material Handlers, Forklift Operators, Plant Logistics Leads.',
      mfgExample:
        'Managing 4,000 meters of 16-gauge cold-rolled steel tubing for steel chair frames and 5 tons of copper wire reels for ceiling fan stators, allocated across Bin A2-04 and staging lines with FIFO rotation.',
      inputs: 'Goods Receipt Notes (GRN), production material issue requests, cycle count scans, warehouse transfers, RMA returns.',
      outputs: 'Stock valuation reports, warehouse pick lists, bin put-away instructions, reorder shortage alerts.',
      connections:
        'Feeds available stock data into Production & MES; generates replenishment alerts for Purchasing; updates inventory asset values in Financial Management.',
      capabilities: [
        {
          title: 'Granular Bin & Aisle Allocation',
          detail: 'Precise multi-tier location hierarchy with directed put-away and FIFO/FEFO picking rules.'
        },
        {
          title: 'Full Batch & Serial Genealogy',
          detail: 'Instant forward and reverse traceability from raw material supplier heat numbers to finished customer serials.'
        },
        {
          title: 'Dynamic Safety Stock & Reorder Triggers',
          detail: 'Automated min-max calculations that adapt to historical consumption variance and vendor lead times.'
        },
        {
          title: 'Cycle Count Automation',
          detail: 'Continuous ABC cycle counting with barcode/RFID verification without shutting down active operations.'
        }
      ],
      mockupTitle: 'LIVE INVENTORY MATRIX // BIN LEVEL',
      mockupData: [
        { col1: 'RAW-STL-16G', col2: '1" 16-Gauge Cold-Rolled Steel Tube', col3: 'BAY-A2-04', col4: '3,840 m', col5: 'Reserved (WO-8491)' },
        { col1: 'RAW-COP-35', col2: 'Enameled Copper Magnet Wire 0.35mm', col3: 'BAY-B1-12', col4: '1,250 kg', col5: 'Available' },
        { col1: 'WIP-FAN-MOT', col2: 'Wound Stator Core Assembly (56")', col3: 'LINE-01-STG', col4: '180 pcs', col5: 'In Winding' },
        { col1: 'PKG-BX-FAN', col2: 'Ceiling Fan Export Master Carton', col3: 'BAY-D4-01', col4: '620 units', col5: 'Reorder Triggered' }
      ],
      stats: [
        { label: 'Tracked Manufacturing SKUs', value: '4,850' },
        { label: 'Active Bin Locations', value: '312' },
        { label: 'Inventory Record Accuracy', value: '99.8%' }
      ]
    },
    production: {
      name: 'Production and Manufacturing Execution',
      tagline: 'Finite Capacity Scheduling & Shop-Floor Execution (MES)',
      purpose:
        'Bridge master production scheduling with real-time shop-floor execution, machine telemetry, operator dispatch, and bottleneck tracking.',
      typicalUsers: 'Plant Managers, Production Supervisors, Schedulers, Machine Operators, Maintenance Technicians.',
      mfgExample:
        'Sequencing 250 tubular steel chairs through CNC tube benders and robotic welding cells, followed by balancing 1,500 aerodynamic fan blades with automated cycle time tracking.',
      inputs: 'Approved Work Orders, Manufacturing BOMs (mBOM), operator shift schedules, machine capacity limits, tooling readiness.',
      outputs: 'Digital traveler cards, dispatch sequences, live OEE metrics, scrap and scrap-cause logs, completion receipts.',
      connections:
        'Consumes raw materials from Inventory; provides real-time progress to Sales ATP; triggers in-line inspection requests in Quality Assurance; feeds direct labor and machine hours into Job Costing.',
      capabilities: [
        {
          title: 'Finite Capacity Gantt Scheduling',
          detail: 'Visual drag-and-drop scheduling with automatic constraint propagation across work centers.'
        },
        {
          title: 'Paperless Shop-Floor Terminals',
          detail: 'Touchscreen operator terminals with attached CAD drawings, work instructions, and inspection checkpoints.'
        },
        {
          title: 'Live Machine Utilization & OEE Tracking',
          detail: 'Direct telemetry ingestion calculating real-time Availability, Performance, and Quality metrics.'
        },
        {
          title: 'Scrap & Downtime Root Cause Logging',
          detail: 'Categorized downtime logging enabling continuous improvement and bottleneck elimination.'
        }
      ],
      mockupTitle: 'PRODUCTION DISPATCH & WORK CENTER QUEUE',
      mockupData: [
        { col1: 'WO-8490', col2: '56" BLDC Fan Stator Winding', col3: 'CELL-01 (Winder)', col4: '180 / 200', col5: 'On Schedule' },
        { col1: 'WO-8491', col2: 'Steel Chair Frame Mandrel Bending', col3: 'CELL-02 (Bender)', col4: '235 / 250', col5: 'Tool Inspection' },
        { col1: 'WO-8492', col2: 'Aerodynamic Fan Blade Set', col3: 'CELL-04 (Balance)', col4: '450 / 500', col5: 'Optimal Speed' },
        { col1: 'WO-8493', col2: 'Perforated Steel Park Bench', col3: 'CELL-03 (MIG Weld)', col4: '28 / 60', col5: 'Queued Next' }
      ],
      stats: [
        { label: 'Active Work Orders', value: '28' },
        { label: 'Plant-Wide OEE', value: '88.4%' },
        { label: 'On-Time Work Completion', value: '96.2%' }
      ]
    },
    purchase: {
      name: 'Purchasing and Supplier Management',
      tagline: 'MRP-Driven Sourcing & Vendor Performance Governance',
      purpose:
        'Automate procurement of raw materials, fabricated parts, and factory consumables while monitoring supplier lead-time reliability and pricing consistency.',
      typicalUsers: 'Procurement Directors, Buyers, Sourcing Specialists, Receiving Clerks, Accounts Payable.',
      mfgExample:
        'Purchasing structural steel coils, fastener kits, and electrostatic powder coat powders from certified vendors with automated lead-time tracking and volume tier pricing.',
      inputs: 'MRP purchase requisitions, supplier quotes, vendor lead times, quality rejection rates, blanket purchase contracts.',
      outputs: 'Approved Purchase Orders, Requests for Quote (RFQs), vendor performance scorecards, 3-way match receipts.',
      connections:
        'Triggers replenishment based on Inventory stock triggers; receives order requirements from MRP in Production; routes inbound shipments to Quality; passes invoices to Finance for AP match.',
      capabilities: [
        {
          title: 'Automated MRP Requisition Match',
          detail: 'Consolidates shop-floor material requirements into optimal vendor purchase orders to leverage volume discounts.'
        },
        {
          title: 'Supplier Performance Scoring',
          detail: 'Tracks historical vendor on-time delivery rates, quality reject percentages, and price stability.'
        },
        {
          title: '3-Way Matching for Receiving',
          detail: 'Automated reconciliation between Purchase Order, Goods Receipt Note (GRN), and Supplier Invoice.'
        },
        {
          title: 'Blanket Purchase Orders & Call-Offs',
          detail: 'Manages long-term framework contracts with periodic releases based on scheduled production demand.'
        }
      ],
      mockupTitle: 'PURCHASE ORDER & REQUISITION MONITOR',
      mockupData: [
        { col1: 'PO-3091', col2: 'Cold-Rolled Steel Coils (12 tons)', col3: 'Apex Metalworks', col4: '$18,400', col5: 'In Transit (ETA Oct 29)' },
        { col1: 'PO-3092', col2: 'Copper Magnet Wire Reels (2 tons)', col3: 'ElectroWire Inc', col4: '$14,120', col5: 'Goods Received (QA Pass)' },
        { col1: 'PO-3093', col2: 'Stainless Assembly Bolts (5,000 pk)', col3: 'Precision Fastener', col4: '$2,850', col5: 'Vendor Confirmed' },
        { col1: 'PO-3094', col2: 'Matte Charcoal Powder Coat (400 kg)', col3: 'ChemCoat Industrial', col4: '$3,600', col5: 'PO Released' }
      ],
      stats: [
        { label: 'Open Purchase Orders', value: '34' },
        { label: 'Supplier On-Time Rate', value: '94.8%' },
        { label: 'Procurement Cycle Time', value: '1.8 Days' }
      ]
    },
    sales: {
      name: 'Sales, Orders, and Quotations',
      tagline: 'Configured Quoting (CPQ), Margin Bounds & Order Management',
      purpose:
        'Empower commercial sales teams with engineering-grade quotation tools, real-time Available-to-Promise (ATP) delivery commitments, and end-to-end customer order tracking.',
      typicalUsers: 'Sales Directors, Commercial Estimators, Customer Account Managers, Inside Sales Engineers.',
      mfgExample:
        'Configuring a custom order for 1,200 commercial ceiling fans with remote speed controllers and brushed nickel downrods, instantly computing margin bounds and lead-time feasibility.',
      inputs: 'Customer enquiries, RFQ tender documents, product catalogs, engineering configurator options, customer discount tiers.',
      outputs: 'Approved sales quotations, confirmed sales orders, pro forma invoices, customer delivery commitments.',
      connections:
        'Hands off confirmed orders to Engineering for BOM verification; triggers production scheduling in MES; updates revenue pipelines in Financial Management.',
      capabilities: [
        {
          title: 'CPQ & Dynamic Margin Validation',
          detail: 'Configure complex customized industrial products with automated BOM costing and margin safety boundaries.'
        },
        {
          title: 'Available-to-Promise (ATP) Calculations',
          detail: 'Instantly calculate realistic delivery dates based on current capacity and material arrival forecasts.'
        },
        {
          title: 'Customer Order Portal & Visibility',
          detail: 'Provide B2B clients with transparent visibility into order progress, quality certs, and shipping tracking.'
        },
        {
          title: 'Multi-Currency & Global Sales Contracts',
          detail: 'Support export compliance, landed cost estimations, and multi-entity commercial billing.'
        }
      ],
      mockupTitle: 'SALES ORDERS & QUOTATION PIPELINE',
      mockupData: [
        { col1: 'SO-1082', col2: '500x Perforated Steel Park Benches', col3: 'Metropolitan Parks', col4: '$124,000', col5: 'In Production (Cell 2/3)' },
        { col1: 'SO-1083', col2: '1,200x Commercial BLDC Ceiling Fans', col3: 'Apex Hospitality', col4: '$86,400', col5: 'Material Staged' },
        { col1: 'SO-1084', col2: '350x Tubular Steel Stacking Chairs', col3: 'Pacific University', col4: '$31,500', col5: 'Final QA Review' },
        { col1: 'SO-1085', col2: 'Custom Architectural Metal Grilles', col3: 'Summit Construction', col4: '$44,200', col5: 'Engineering Sign-off' }
      ],
      stats: [
        { label: 'Active Customer Orders', value: '52' },
        { label: 'Average Quote Cycle', value: '4.2 Hrs' },
        { label: 'Order Margin Accuracy', value: '98.5%' }
      ]
    },
    quality: {
      name: 'Quality Assurance and Traceability',
      tagline: 'In-Process Inspection, SPC & Bidirectional Genealogy',
      purpose:
        'Enforce engineering specifications across receiving, machining, and final packaging with digital inspection checkpoints, non-conformance quarantines, and complete lot traceability.',
      typicalUsers: 'Quality Managers, QC Inspectors, Metrology Engineers, Continuous Improvement / Six Sigma Leads.',
      mfgExample:
        'Running optical runout inspection on ceiling fan rotor hubs and measuring powder-coat paint thickness and weld penetration on steel park benches.',
      inputs: 'Engineering drawing tolerances, first-piece samples, in-line sensor scans, inspection plans, customer quality criteria.',
      outputs: 'Certificates of Conformance (CoC), Non-Conformance Reports (NCR), CAPA workflows, SPC trend charts, quarantine tags.',
      connections:
        'Inspects arriving materials from Purchasing; gates work-order progression in Production; releases cleared goods to Inventory and Shipping; feeds scrap costs to Job Costing.',
      capabilities: [
        {
          title: 'Inspection Plans & Tolerance Thresholds',
          detail: 'Enforce digital inspection checklists at receiving, first-piece, in-process, and final dispatch.'
        },
        {
          title: 'Non-Conformance Reports (NCR) & Quarantines',
          detail: 'Isolate defective parts instantly, preventing downstream assembly and routing items to MRB review.'
        },
        {
          title: 'Statistical Process Control (SPC)',
          detail: 'Continuous charting of critical dimensions with automatic trend alerts before tolerances are breached.'
        },
        {
          title: 'Corrective Action (CAPA) Workflow',
          detail: 'Standardized 8D problem-solving methodologies with root-cause analysis, owner assignments, and verification.'
        }
      ],
      mockupTitle: 'QUALITY CONTROL & CONFORMANCE LOG',
      mockupData: [
        { col1: 'QC-7841', col2: 'Fan Rotor Hub Dynamic Runout', col3: 'Cell-04 (Balance)', col4: '±0.02 mm (Nominal)', col5: 'Passed (Cpk 1.58)' },
        { col1: 'QC-7842', col2: 'Steel Chair Frame Weld Penetration', col3: 'Cell-03 (MIG Weld)', col4: '100% Visual & Magnaflux', col5: 'Passed (Batch Sign-off)' },
        { col1: 'QC-7843', col2: 'Powder Coat Thickness (RAL 7016)', col3: 'Paint Line Tunnel', col4: '85 - 95 microns', col5: 'Passed (CoC Released)' },
        { col1: 'QC-7844', col2: 'Incoming Copper Wire Conductivity', col3: 'Receiving Dock', col4: 'Resistance > 0.05 ohm/m', col5: 'Quarantined (NCR-108)' }
      ],
      stats: [
        { label: 'First-Pass Yield (FPY)', value: '98.4%' },
        { label: 'Open CAPA Cases', value: '2' },
        { label: 'Average Resolution Time', value: '3.1 Days' }
      ]
    },
    finance: {
      name: 'Financial Management and Job Costing',
      tagline: 'Standard vs. Actual Job Costing & General Ledger Integration',
      purpose:
        'Deliver continuous financial clarity by linking physical factory activities—material consumption, machine runtime, and direct labor—directly to the General Ledger and product margins.',
      typicalUsers: 'Chief Financial Officers, Cost Accountants, Plant Controllers, Financial Analysts.',
      mfgExample:
        'Decomposing the variance between estimated standard cost ($185/unit) and actual cost ($182.40/unit) on a 500-unit steel bench production run, identifying favorable labor efficiencies.',
      inputs: 'Work-order labor hours, machine hours, actual material issues, supplier invoices, freight bills, scrap records.',
      outputs: 'Standard vs. actual job costing variance reports, WIP asset valuation, margin analysis by product line, audited financial statements.',
      connections:
        'Receives order value from Sales; matches AP bills against Purchasing GRNs; calculates inventory valuations with Inventory; absorbs labor and machine costs from MES.',
      capabilities: [
        {
          title: 'Standard vs. Actual Job Costing',
          detail: 'Decompose exact expenditures on raw materials, machine hours, labor, and factory overhead per finished unit.'
        },
        {
          title: 'Automated 3-Way AP Reconciliation',
          detail: 'Cross-checks vendor bills with purchase orders and dock receiving notes to eliminate billing errors.'
        },
        {
          title: 'Real-Time Inventory Asset Valuation',
          detail: 'Supports standard cost, FIFO, and moving average methods with instant revaluation reporting.'
        },
        {
          title: 'Multi-Entity & Currency Consolidation',
          detail: 'Consolidates multi-plant books across global subsidiaries with automated intercompany eliminations.'
        }
      ],
      mockupTitle: 'PRODUCTION JOB COSTING & MARGIN LEDGER',
      mockupData: [
        { col1: 'JOB-8490', col2: '56" Ceiling Fan Run (500 units)', col3: 'Est: $28,400', col4: 'Actual: $27,920', col5: '+1.7% Favorable Margin' },
        { col1: 'JOB-8491', col2: 'Tubular Steel Chairs (250 units)', col3: 'Est: $22,500', col4: 'Actual: $22,410', col5: '+0.4% In Budget' },
        { col1: 'JOB-8493', col2: 'Park Benches Steel Lot (60 units)', col3: 'Est: $14,500', col4: 'Actual: $14,180', col5: '+2.2% Material Savings' },
        { col1: 'JOB-8488', col2: 'Custom Flange Machining (100 units)', col3: 'Est: $12,000', col4: 'Actual: $12,090', col5: '-0.7% Tooling Variance' }
      ],
      stats: [
        { label: 'Job Costing Variance', value: '< 1.0%' },
        { label: 'AP 3-Way Match Rate', value: '99.4%' },
        { label: 'Gross Operating Margin', value: 'Healthy' }
      ]
    }
  };

  const current = modulesData[activeModule];

  return (
    <section className="modules-section" id="modules">
      <div className="container">
        <div className="section-header">
          <div className="section-tag purple">
            <span className="section-tag-dot" style={{ background: '#b05bff', boxShadow: '0 0 8px #b05bff' }}></span>
            Integrated ERP Architecture
          </div>
          <h2 className="section-title">
            Six Specialized Modules. <br />
            <span className="gradient-text">One Unified Manufacturing Platform.</span>
          </h2>
          <p className="section-subtitle">
            Every core functional department in your manufacturing enterprise operates on the same real-time data
            model—eliminating disconnected silos, redundant data entry, and costly miscommunications.
          </p>
        </div>

        {/* Module Selector Pills */}
        <div className="modules-nav-pills" role="tablist">
          {Object.keys(modulesData).map((key) => {
            const mod = modulesData[key];
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeModule === key}
                className={`module-pill-btn ${activeModule === key ? 'active' : ''}`}
                onClick={() => setActiveModule(key)}
              >
                <span>{mod.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase */}
        <div className="module-showcase">
          {/* Left: Module Details */}
          <div className="module-left">
            <div>
              <span className="section-tag" style={{ marginBottom: '12px' }}>
                {current.tagline}
              </span>
              <h3 className="module-title">{current.name}</h3>
              <p className="module-description">{current.purpose}</p>

              {/* Roles & Manufacturing Context */}
              <div style={{ margin: '18px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#22d3ee' }}>Typical Users: </strong>
                  {current.typicalUsers}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#00ffaa' }}>Integrated Connections: </strong>
                  {current.connections}
                </div>
              </div>

              <div className="module-capabilities-list">
                {current.capabilities.map((cap, idx) => (
                  <div key={idx} className="module-capability-item">
                    <div className="cap-check">✓</div>
                    <div className="cap-text">
                      <h4>{cap.title}</h4>
                      <p>{cap.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Manufacturing Example Card */}
              <div
                style={{
                  marginTop: '20px',
                  padding: '12px 16px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  lineHeight: '1.5'
                }}
              >
                <span style={{ color: '#c084fc', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.74rem' }}>
                  Applied Manufacturing Case:
                </span>{' '}
                <span style={{ color: '#e2e8f0' }}>{current.mfgExample}</span>
              </div>
            </div>
          </div>

          {/* Right: Illustrative UI Mockup Panel */}
          <div className="module-right">
            <div className="module-mockup-frame">
              <div className="mockup-sub-header">
                <span className="mockup-sub-title">{current.mockupTitle}</span>
                <span className="mockup-label">Illustrative Module Interface</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="mockup-data-table">
                  <thead>
                    <tr>
                      <th>Identifier</th>
                      <th>Description</th>
                      <th>Location / Stage</th>
                      <th>Quantity / Cost</th>
                      <th>Operational State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.mockupData.map((row, idx) => (
                      <tr key={idx}>
                        <td style={{ color: '#22d3ee', fontWeight: '600' }}>{row.col1}</td>
                        <td>{row.col2}</td>
                        <td style={{ color: '#94a3b8' }}>{row.col3}</td>
                        <td style={{ color: '#f8fafc' }}>{row.col4}</td>
                        <td>
                          <span
                            style={{
                              background: 'rgba(34, 211, 238, 0.08)',
                              border: '1px solid rgba(34, 211, 238, 0.25)',
                              color: '#7dd3fc',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontSize: '0.72rem'
                            }}
                          >
                            {row.col5}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mini Stats Bar */}
              <div className="mockup-stat-row">
                {current.stats.map((stat, idx) => (
                  <div key={idx} className="mockup-mini-stat">
                    <span className="mini-stat-lbl">{stat.label}</span>
                    <span className="mini-stat-val">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
