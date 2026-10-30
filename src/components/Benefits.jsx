import React from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function Benefits() {
  const legacyPainPoints = [
    {
      title: 'Disjointed Departmental Silos',
      desc: 'Sales promises delivery dates based on outdated spreadsheets while shop-floor supervisors scramble with uncoordinated physical job sheets.'
    },
    {
      title: 'Reactive Unplanned Downtime',
      desc: 'Machines run until mechanical failure occurs mid-shift, simultaneously stalling upstream cell queues and starving downstream assembly.'
    },
    {
      title: 'Blind-Spot Material Shortages',
      desc: 'Procurement teams discover missing fasteners, steel coils, or wire reels only after the job is staged on the machine, halting line operations.'
    },
    {
      title: 'Delayed & Inaccurate Cost Accounting',
      desc: 'Actual job costs are calculated weeks after shipment, concealing profit-eroding labor overtime, scrap waste, and machine idle time.'
    },
    {
      title: 'Paperwork & Audit Vulnerabilities',
      desc: 'Tracing defective components requires days of hunting through paper travelers, binder logs, and manual warehouse clipboards.'
    }
  ];

  const gentroAdvantages = [
    {
      title: 'Unified Digital Manufacturing Thread',
      desc: 'A single real-time operational model synchronizing customer sales orders, CAD revisions, BOMs, machine schedules, and warehouse bins.'
    },
    {
      title: 'Predictive & Condition-Based Maintenance',
      desc: 'Continuous machine hours and telemetry tracking flags mechanical degradation early, slotting technician work orders into planned shift breaks.'
    },
    {
      title: 'MRP-Driven Material Availability',
      desc: 'Automated BOM explosion cross-references stock and open POs, reserving parts and issuing replenishment requisitions before lines are starved.'
    },
    {
      title: 'Real-Time Job Costing & Margin Control',
      desc: 'Continuous capture of actual material consumption, machine runtime, and direct labor variance per finished work order.'
    },
    {
      title: '100% Instant Lot & Serial Genealogy',
      desc: 'Immediate bidirectional digital traceability linking raw material supplier heat numbers to finished product serial IDs.'
    }
  ];

  const valueDrivers = [
    {
      num: '01',
      title: 'Real-Time Production Visibility',
      desc: 'Observe live line speeds, active work orders, and cell statuses from any workstation without walking the floor or waiting for shift reports.'
    },
    {
      num: '02',
      title: 'Precision Material Planning (MRP)',
      desc: 'Calculate exact net raw material requirements based on multi-tier BOMs, scrap allowances, and real-time stock balances across all bays.'
    },
    {
      num: '03',
      title: 'Granular Inventory & Bin Control',
      desc: 'Track raw coils, hardware, work-in-progress, and finished goods to the exact aisle and bin location with mobile barcode scanning.'
    },
    {
      num: '04',
      title: 'Reduced Manual Coordination',
      desc: 'Eliminate paper work travelers, manual whiteboard schedules, and endless inter-departmental phone calls between sales and production.'
    },
    {
      num: '05',
      title: 'Early Bottleneck Identification',
      desc: 'Spot queue build-ups and cycle time slowdowns in real time, allowing schedulers to re-route batches to parallel cells before lines stall.'
    },
    {
      num: '06',
      title: 'Consistent First-Pass Quality Yield',
      desc: 'Enforce digital inspection gates at setup, in-process, and final assembly, stopping defective parts before value-add downstream labor.'
    },
    {
      num: '07',
      title: 'Reliable Delivery Commitments (ATP)',
      desc: 'Commit realistic delivery dates during sales quoting based on live machine capacity, open orders, and supplier lead-time pipelines.'
    },
    {
      num: '08',
      title: 'Bidirectional Serial Traceability',
      desc: 'Instantly isolate suspect components across finished units using full forward and backward lot genealogy from supplier heat lots to customer serials.'
    },
    {
      num: '09',
      title: 'Continuous Job-Cost Visibility',
      desc: 'Compare standard estimated costs with actual material, labor, and machine costs on every job run to protect product line profit margins.'
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="section-header">
          <div className="section-tag purple">
            <span className="section-tag-dot" style={{ background: '#b05bff', boxShadow: '0 0 8px #b05bff' }}></span>
            Operational Value &amp; Transformation
          </div>
          <h2 className="section-title">
            Engineered to Solve <br />
            <span className="gradient-text">Real Manufacturing Challenges</span>
          </h2>
          <p className="section-subtitle">
            Compare traditional fragmented systems with the synchronized, connected intelligence of the {BRAND_CONFIG.productName} platform.
          </p>
        </div>

        {/* Side-by-side comparison */}
        <div className="benefits-comparison">
          {/* Legacy Side */}
          <div className="comparison-card legacy">
            <span className="card-header-badge">Traditional Fragmented Systems</span>
            <h3>The Cost of Siloed Operations</h3>
            <div className="comparison-list">
              {legacyPainPoints.map((item, idx) => (
                <div key={idx} className="comp-item">
                  <div className="comp-icon">✕</div>
                  <div className="comp-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GENTRO NEXUS Side */}
          <div className="comparison-card gentro">
            <span className="card-header-badge">{BRAND_CONFIG.productName} Architecture</span>
            <h3>The Connected Factory Advantage</h3>
            <div className="comparison-list">
              {gentroAdvantages.map((item, idx) => (
                <div key={idx} className="comp-item">
                  <div className="comp-icon">✓</div>
                  <div className="comp-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Drivers Grid - 9 Core Industrial Benefits */}
        <div className="value-drivers-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {valueDrivers.map((driver) => (
            <div key={driver.num} className="driver-card">
              <span className="driver-num">CAPABILITY // {driver.num}</span>
              <h3 className="driver-title">{driver.title}</h3>
              <p className="driver-desc">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
