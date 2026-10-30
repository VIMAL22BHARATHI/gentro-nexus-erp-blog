import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function RoleViews() {
  const [activeRole, setActiveRole] = useState('plant-manager');

  const roles = [
    {
      id: 'plant-manager',
      name: 'Plant Managers',
      tagline: 'Operational Oversight & Throughput Optimization',
      focus: 'Total plant output, Overall Equipment Effectiveness (OEE), and bottleneck resolution.',
      dashboardPreview: 'Plant Operations Command Center',
      metrics: [
        { label: 'Plant-Wide OEE', value: '88.4%' },
        { label: 'Active Work Cells', value: '14 / 14' },
        { label: 'Shift Yield Rate', value: '98.8%' },
        { label: 'Unplanned Idle Time', value: '18 min' }
      ],
      primaryDuties: [
        'Monitor live telemetry across all active work cells and machining lines.',
        'Evaluate shift-by-shift throughput against committed monthly manufacturing targets.',
        'Intervene when bottleneck alerts indicate that downstream assembly is starved for sub-assemblies.',
        'Review condition-based maintenance recommendations to schedule PM without stopping production.'
      ],
      dailyWorkflow:
        'Starts shift with automated morning briefing summary; reviews cell capacity heatmaps; authorizes temporary overtime or alternate routing when urgent orders arrive; conducts end-of-shift scrap reconciliation.'
    },
    {
      id: 'business-owner',
      name: 'Business Owners & Executives',
      tagline: 'Strategic Margin Visibility & Customer Fulfillment',
      focus: 'Revenue recognition, profitability per product line, and delivery reliability.',
      dashboardPreview: 'Executive Enterprise Health Dashboard',
      metrics: [
        { label: 'On-Time In-Full (OTIF)', value: '97.8%' },
        { label: 'Operating Margin', value: '+18.2%' },
        { label: 'Working Capital Tied in WIP', value: '$284,000' },
        { label: 'Committed Backlog', value: '6.2 Weeks' }
      ],
      primaryDuties: [
        'Track high-level company profitability and actual vs. budgeted job cost margins.',
        'Ensure customer fulfillment commitments are met to safeguard commercial reputation.',
        'Evaluate capital expenditure needs based on historical work-center utilization trends.',
        'Review cash-to-cash cycle time from raw material purchase to customer cash collection.'
      ],
      dailyWorkflow:
        'Monitors weekly revenue delivery milestones; reviews margin variance across customer segments; inspects high-value sales quotes with special commercial terms; evaluates supplier contract renegotiations.'
    },
    {
      id: 'sales-team',
      name: 'Sales & Commercial Teams',
      tagline: 'Precision Quoting (CPQ) & Feasible Lead Times',
      focus: 'Closing orders with accurate cost boundaries and reliable Available-to-Promise (ATP) dates.',
      dashboardPreview: 'Commercial Pipeline & ATP Calculator',
      metrics: [
        { label: 'Quote Turnaround Time', value: '4.2 Hrs' },
        { label: 'Margin Quote Accuracy', value: '98.5%' },
        { label: 'Active Quotations', value: '$840,000' },
        { label: 'Win Rate on Custom RFQs', value: '41%' }
      ],
      primaryDuties: [
        'Configure custom product specifications using engineering-validated rule constraints.',
        'Calculate real-time Available-to-Promise (ATP) delivery dates based on factory capacity and material ETA.',
        'Enforce minimum margin thresholds so commercial reps do not underquote custom fabrications.',
        'Provide clients with instant self-service order tracking without interrupting shop-floor supervisors.'
      ],
      dailyWorkflow:
        'Receives customer RFQs; uses CPQ rules to configure specs (e.g. fan blade lengths, powder coat colors, steel thicknesses); generates formal quotation; converts accepted quote into firm sales order.'
    },
    {
      id: 'engineering',
      name: 'Engineering Teams',
      tagline: 'BOM Governance & Manufacturing Routing Integrity',
      focus: 'Managing CAD models, revisions, multi-tier BOMs, and manufacturing process routing.',
      dashboardPreview: 'BOM Management & ECO Release Console',
      metrics: [
        { label: 'Active Product BOMs', value: '412' },
        { label: 'Average ECO Cycle Time', value: '1.4 Days' },
        { label: 'Revision Discrepancies', value: 'Zero' },
        { label: 'Standard Routing Accuracy', value: '99.1%' }
      ],
      primaryDuties: [
        'Maintain multi-level Bills of Materials (BOM) linking raw materials to sub-assemblies and finished units.',
        'Manage Engineering Change Orders (ECO) with clear effective dates and inventory obsolescence rules.',
        'Attach 2D/3D CAD drawings and inspection tolerance sheets directly to part numbers.',
        'Define standard setup times, run rates, tooling specifications, and alternate machine routings.'
      ],
      dailyWorkflow:
        'Releases new product revisions; verifies BOM component part numbers and scrap allowances; validates customer custom drawing changes; approves tool design handoffs for shop-floor staging.'
    },
    {
      id: 'production-planner',
      name: 'Production Planners',
      tagline: 'Finite Capacity Scheduling & Resource Optimization',
      focus: 'Sequencing work orders, leveling work-center loads, and preventing line starvation.',
      dashboardPreview: 'Finite Capacity Gantt Scheduling Board',
      metrics: [
        { label: 'Schedule Adherence', value: '96.2%' },
        { label: 'Queue Idle Time', value: '-22%' },
        { label: 'Changeover Overhead', value: '4.8%' },
        { label: 'Finite Capacity Horizon', value: '21 Days' }
      ],
      primaryDuties: [
        'Schedule work orders against finite machine capacity and verified tooling availability.',
        'Sequence production jobs to minimize setup times (e.g. grouping by paint color or tube diameter).',
        'Balance line loading between primary cells and auxiliary backup machines.',
        'Re-dispatch jobs dynamically when hot rush orders or unplanned maintenance occurs.'
      ],
      dailyWorkflow:
        'Reviews daily MRP recommendations; launches optimized finite-capacity solver runs; checks tool crib staging for tomorrow\'s jobs; confirms raw material staging with warehouse supervisor.'
    },
    {
      id: 'shop-floor',
      name: 'Shop-Floor Operators & Technicians',
      tagline: 'Paperless Traveler Terminals & Guided Execution',
      focus: 'Executing setup, running work orders, recording step completions, and logging scrap causes.',
      dashboardPreview: 'Paperless Work Traveler Operator Terminal',
      metrics: [
        { label: 'Current Job Progress', value: 'WO-8491 (94%)' },
        { label: 'Hourly Output Target', value: '28 / 30 units' },
        { label: 'Setup Inspection Check', value: 'Passed' },
        { label: 'Cycle Time Pace', value: 'Nominal' }
      ],
      primaryDuties: [
        'Access digital work travelers at touchscreen stations with up-to-date drawings and work instructions.',
        'Clock on and off jobs to record direct labor hours and machine cycle times automatically.',
        'Conduct first-piece quality measurements and record dimensional checks before full run.',
        'Log scrap counts and select root-cause downtime codes with one touch.'
      ],
      dailyWorkflow:
        'Logs in at work cell; reviews active job sequence and attached CAD visual instructions; verifies tooling fixtures; initiates run; logs completed parts and advances digital traveler to next work center.'
    },
    {
      id: 'inventory-procurement',
      name: 'Inventory & Procurement Teams',
      tagline: 'Bin-Level Accuracy & Timely Material Replenishment',
      focus: 'Maintaining stock accuracy, vendor lead-time reliability, and directed warehouse put-away.',
      dashboardPreview: 'Inventory Replenishment & Vendor Tracking Grid',
      metrics: [
        { label: 'Inventory Record Accuracy', value: '99.8%' },
        { label: 'Stockout Incidents', value: '0 This Month' },
        { label: 'Supplier On-Time Delivery', value: '94.8%' },
        { label: 'Active Purchase Requisitions', value: '18 Open' }
      ],
      primaryDuties: [
        'Execute directed put-away and FIFO/FEFO picking using mobile handheld barcode terminals.',
        'Review automated MRP shortage lists and convert purchase requisitions into supplier POs.',
        'Track supplier delivery milestones and flag extended transit delays before stock is exhausted.',
        'Conduct continuous ABC cycle counts to eliminate year-end physical inventory shutdowns.'
      ],
      dailyWorkflow:
        'Receives morning supplier shipments; conducts dock receiving scans against POs; routes samples to receiving QA; generates pick lists for the day\'s production runs; reviews automated reorder alerts.'
    },
    {
      id: 'quality-inspector',
      name: 'Quality Assurance Inspectors',
      tagline: 'Tolerance Enforcement, Quarantine & Conformance Audits',
      focus: 'Verifying dimensional tolerances, isolating defects, and managing lot traceability.',
      dashboardPreview: 'Quality Control & Conformance Station',
      metrics: [
        { label: 'First-Pass Yield (FPY)', value: '98.4%' },
        { label: 'Incoming Defect Rate', value: '0.42%' },
        { label: 'Open Quarantine Lots', value: '1 Active' },
        { label: 'CAPA Resolution Time', value: '3.1 Days' }
      ],
      primaryDuties: [
        'Enforce quality plans at receiving inspection, first-piece setup, in-process, and final packaging.',
        'Quarantine defective parts instantly, issuing Non-Conformance Reports (NCR) and Material Review Board routes.',
        'Maintain Statistical Process Control (SPC) charting to spot tolerance drift before scrap is produced.',
        'Generate digital Certificates of Conformance (CoC) and compile complete lot/serial genealogy records.'
      ],
      dailyWorkflow:
        'Performs morning gauge calibration checks; inspects first-off parts for new work order setups; monitors automated vision inspection feeds; reviews NCRs with production supervisors for root-cause 8D analysis.'
    },
    {
      id: 'finance-team',
      name: 'Finance & Cost Accounting Teams',
      tagline: 'Standard vs. Actual Job Costing & Margin Control',
      focus: 'Capturing real manufacturing expenditures, 3-way matching, and balance sheet inventory valuation.',
      dashboardPreview: 'Manufacturing Cost Ledger & Variance Analysis',
      metrics: [
        { label: 'Costing Variance', value: '< 1.0%' },
        { label: 'AP 3-Way Match Rate', value: '99.4%' },
        { label: 'Month-End Close Cycle', value: '2 Days' },
        { label: 'Inventory Valuation Accuracy', value: '100% Reconciled' }
      ],
      primaryDuties: [
        'Decompose standard vs. actual costs across direct materials, direct labor, and overhead per job.',
        'Reconcile purchase orders, goods receipt notes (GRN), and supplier invoices automatically (3-way match).',
        'Maintain real-time inventory valuations (standard cost, FIFO, or weighted moving average).',
        'Identify unprofitable SKUs, custom quote variances, and scrap cost drivers for executive review.'
      ],
      dailyWorkflow:
        'Reviews closed work orders for labor and material variances; runs automated 3-way AP matching; monitors work-in-progress (WIP) asset balances; produces weekly product line profitability summaries.'
    }
  ];

  const current = roles.find((r) => r.id === activeRole) || roles[0];

  return (
    <section className="roles-section" id="roles">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            Role-Based User Experience
          </div>
          <h2 className="section-title">
            Tailored Experiences for <br />
            <span className="gradient-text">Every Manufacturing Team</span>
          </h2>
          <p className="section-subtitle">
            From the boardroom to the shop-floor terminal, {BRAND_CONFIG.productName} delivers purpose-built workflows, actionable indicators, and clear handoffs for every operational persona.
          </p>
          <div style={{ marginTop: '10px' }}>
            <span className="mockup-label" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              Illustrative Persona Architecture &amp; Planned Role Views
            </span>
          </div>
        </div>

        {/* Role Selector Tabs */}
        <div className="roles-tab-bar" role="tablist">
          {roles.map((role) => (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={activeRole === role.id}
              className={`role-tab-btn ${activeRole === role.id ? 'active' : ''}`}
              onClick={() => setActiveRole(role.id)}
            >
              <span>{role.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Role Showcase Card */}
        <div className="role-detail-card">
          <div className="role-card-header">
            <div>
              <span className="role-tagline-badge">{current.tagline}</span>
              <h3 className="role-headline">{current.name}</h3>
              <p className="role-focus-text">
                <strong>Primary Objective: </strong>{current.focus}
              </p>
            </div>
            <div className="role-dash-label">
              <span className="mockup-label">{current.dashboardPreview}</span>
            </div>
          </div>

          {/* Metric KPI Cards */}
          <div className="role-metrics-grid">
            {current.metrics.map((m, idx) => (
              <div key={idx} className="role-metric-box">
                <span className="role-metric-label">{m.label}</span>
                <span className="role-metric-val">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Duties and Daily Workflow */}
          <div className="role-content-split">
            <div className="role-duties-col">
              <h4>Key Responsibilities &amp; Capabilities</h4>
              <ul className="role-duties-list">
                {current.primaryDuties.map((duty, idx) => (
                  <li key={idx}>
                    <span className="duty-check">✓</span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="role-workflow-col">
              <h4>Typical Daily Workflow</h4>
              <div className="workflow-quote-box">
                <p>{current.dailyWorkflow}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
