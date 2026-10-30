import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function IndustryUseCases() {
  const [activeIndustry, setActiveIndustry] = useState('fans');

  const industries = [
    {
      id: 'fans',
      name: 'Ceiling Fans & Components',
      tagline: 'High-Speed Balancing, Rotor Die-Casting & Stator Winding',
      overview:
        'Ceiling fan manufacturing requires coordinating electromechanical sub-assemblies—precision copper-wound stators, die-cast aluminum rotor housings, aerodynamic blade sets, and electronic speed controllers.',
      bomStructure:
        'Multi-level BOM (Motor Core sub-assembly, blade pack, downrod/canopy hardware, packaging carton with EPS foam inserts).',
      keyMaterials:
        'Enameled copper magnet wire (0.35mm), silicon steel stator laminations, ADC12 aluminum ingot, aluminum/ABS blade stock, capacitor kits.',
      primaryRoutings: [
        'Automated coil winding & wedge insertion on stator cores',
        'High-pressure die-casting of aluminum motor shells and rotor hubs',
        'Dynamic blade weight-matching and multi-axis pitch balancing at 1,800 RPM',
        'Conveyorized electrostatic powder coating & curing tunnel at 190°C',
        'End-of-line electrical hipot dielectric testing and acoustic noise analysis'
      ],
      qualityCheckpoints:
        'Dynamic unbalance < 0.5g-cm, winding insulation resistance > 100MΩ, powder coat thickness 85-95 microns, zero blade wobble under full throttle.',
      lifecycleAdaptation:
        'Sales ATP commits batch delivery based on wire reel inventory and automated stator winding cycle times. Work orders automatically split into parallel motor and blade sub-lines, meeting at the final assembly pack station with synchronized lot barcodes.'
    },
    {
      id: 'steel-furniture',
      name: 'Steel Furniture & Benches',
      tagline: 'Tubular Bending, Robotic Welding & Powder Coating',
      overview:
        'Producing durable steel chairs, public park benches, and hospital frames involves high-mix tubular metal cutting, CNC mandrel bending, robotic MIG welding, and high-durability outdoor powder coating.',
      bomStructure:
        'Flat and tubular cut-lists nested onto standard stock lengths, sheet metal seat pans, hardware packs (bolts, washers, rubber feet), multi-tier weldment BOM.',
      keyMaterials:
        'Cold-rolled mild steel tubing (16-gauge 1" & 1.25"), perforated steel plate (12-gauge), MIG welding wire (ER70S-6), TGIC polyester outdoor powder.',
      primaryRoutings: [
        'Automated band-saw cutting and deburring with scrap-optimizing nesting',
        'CNC multi-radius rotary draw mandrel bending for chair frames',
        'Robotic MIG welding in dedicated rotary fixtures with manual tack inspection',
        '5-stage chemical pre-treatment wash (degrease, iron phosphate, DI rinse)',
        'Electrostatic powder application and final hardware kitting / stretch-wrapping'
      ],
      qualityCheckpoints:
        'Bend angle tolerance ±0.5°, 100% visual weld penetration check with periodic dye-penetrant testing, salt-spray corrosion resistance > 1,000 hrs, cross-hatch paint adhesion ASTM D3359.',
      lifecycleAdaptation:
        'GENTRO NEXUS sequences chair and bench production by tube diameter and powder-coat color to eliminate costly paint booth purging and die changeovers. Scrap drop lengths are returned to inventory with barcode tags for smaller bracket jobs.'
    },
    {
      id: 'sheet-metal',
      name: 'Fabricated Metal Products',
      tagline: 'Sheet Laser Nesting, Press Brake Forming & Enclosures',
      overview:
        'Custom electrical enclosures, industrial equipment chassis, and structural brackets demand fast turnaround from CAD DXF flats to fiber laser cutting, press brake bending, and hardware insertion.',
      bomStructure:
        'Single and multi-level assemblies with sheet part blanks, PEM hardware fasteners, spot-welded internal mounting brackets, and sub-components.',
      keyMaterials:
        'Mild steel sheets (14-gauge & 16-gauge), stainless steel 304 (2B finish), aluminum 5052-H32, self-clinching studs, gasket seals.',
      primaryRoutings: [
        'Automated DXF flat-pattern nesting onto 4x8 ft and 5x10 ft sheet inventory',
        'Fiber laser cutting with nitrogen assist gas for oxide-free weld prep',
        'CNC hydraulic press brake multi-step bending with bend-deduction tables',
        'Pneumatic PEM fastener insertion and spot-welding of grounding studs',
        'Gasket dispensing and final hardware accessory kitting'
      ],
      qualityCheckpoints:
        'Flange dimensional tolerance ±0.25mm, bend angle inspection ±0.5°, PEM push-out torque verification, gasket continuous seal continuity.',
      lifecycleAdaptation:
        'Customer CAD drawings upload directly to GENTRO NEXUS; the system calculates material yield and machine setup minutes, immediately locking margin boundaries and material reservations on sheet metal inventory racks.'
    },
    {
      id: 'machining',
      name: 'Precision CNC Machining',
      tagline: '5-Axis Milling, Tight Tolerances & Tool Life Management',
      overview:
        'High-precision machined housings, shafts, and hydraulic manifolds require tight dimensional tolerances (±0.005mm), fixture management, tool wear offsets, and complete raw material cert traceability.',
      bomStructure:
        'Raw billet stock or forging blank, fixture clamps, specialized cutting inserts, custom coolant, and finishing treatments (anodizing/passivation).',
      keyMaterials:
        'Aluminum 6061-T6 and 7075 billet, 4140 chromoly alloy steel, 316L stainless bar stock, titanium Grade 5.',
      primaryRoutings: [
        'Raw stock saw cutting with mill test report (MTR) heat number verification',
        'Stage 1 roughing on 5-axis CNC horizontal machining center (HMC)',
        'Stage 2 finish profiling with laser tool-setter wear offset compensation',
        'Automated ultrasonic degrease and particulate washing',
        '100% Coordinate Measuring Machine (CMM) dimensional verification'
      ],
      qualityCheckpoints:
        'Bore concentricity < 0.005mm, surface roughness Ra 0.8 µm, CMM inspection log linked to serial number, 100% material cert traceability.',
      lifecycleAdaptation:
        '{BRAND_CONFIG.productName} tracks cutting tool insert stroke counts and machine spindle hours, scheduling tool replacement during changeovers and preventing out-of-tolerance rejects before they happen.'
    },
    {
      id: 'electronics',
      name: 'Electronics & PCB Assembly',
      tagline: 'High-Speed SMT, Reel Tracking & Reflow Profiling',
      overview:
        'Industrial controller boards and fan sensor assemblies require precise SMD component placement, moisture-sensitive part handling, stencil solder inspection, and selective soldering.',
      bomStructure:
        'Complex 300+ line-item electronic BOM with alternate approved vendor list (AVL) components, PCB raw boards, and mechanical enclosures.',
      keyMaterials:
        'FR4 multi-layer bare boards, microcontrollers, passive capacitor/resistor reels, lead-free SAC305 solder paste, conformal coating.',
      primaryRoutings: [
        'Automated SMT line solder paste printing with 3D SPI inspection',
        'High-speed pick-and-place component mounting (up to 35k CPH)',
        'Multi-zone reflow oven soldering with thermal profiler logging',
        'Automated Optical Inspection (AOI) with AI bridge/tombstone classification',
        'In-circuit bed-of-nails functional test (FCT) and firmware flash'
      ],
      qualityCheckpoints:
        'Zero solder bridging, solder fillet wetting per IPC-A-610 Class 2/3, 100% functional test pass, full reel component lot genealogy.',
      lifecycleAdaptation:
        'Component reel barcodes are scanned at SMT feeders to verify polarity and part numbers, preventing costly assembly line mismatches. Defective boards are instantly flagged and routed to rework benches.'
    }
  ];

  const current = industries.find((ind) => ind.id === activeIndustry) || industries[0];

  return (
    <section className="use-cases-section" id="use-cases">
      <div className="container">
        <div className="section-header">
          <div className="section-tag purple">
            <span className="section-tag-dot" style={{ background: '#b05bff', boxShadow: '0 0 8px #b05bff' }}></span>
            Manufacturing Domain Expertise
          </div>
          <h2 className="section-title">
            Engineered for Real-World <br />
            <span className="gradient-text">Manufacturing Environments</span>
          </h2>
          <p className="section-subtitle">
            See how the same unified order-to-delivery lifecycle adapts seamlessly across diverse Bills of Materials, shop-floor routings, and quality standards—from ceiling fans and steel furniture to precision machining.
          </p>
        </div>

        {/* Industry Nav Pills */}
        <div className="industry-nav-bar" role="tablist">
          {industries.map((ind) => (
            <button
              key={ind.id}
              type="button"
              role="tab"
              aria-selected={activeIndustry === ind.id}
              className={`industry-pill-btn ${activeIndustry === ind.id ? 'active' : ''}`}
              onClick={() => setActiveIndustry(ind.id)}
            >
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Industry Showcase Card */}
        <div className="industry-detail-card">
          <div className="industry-card-header">
            <div>
              <span className="industry-badge">{current.tagline}</span>
              <h3 className="industry-title">{current.name}</h3>
              <p className="industry-overview">{current.overview}</p>
            </div>
            <span className="mockup-label">Industry Lifecycle Template</span>
          </div>

          <div className="industry-grid">
            {/* Column 1: BOM & Materials */}
            <div className="ind-block">
              <h4>
                <span className="ind-block-num">01</span>
                BOM Structure &amp; Materials
              </h4>
              <div className="ind-block-content">
                <p><strong>BOM Architecture: </strong>{current.bomStructure}</p>
                <div style={{ marginTop: '10px' }}>
                  <strong>Core Raw Materials: </strong>
                  <span style={{ color: '#22d3ee' }}>{current.keyMaterials}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Primary Shop Floor Routings */}
            <div className="ind-block">
              <h4>
                <span className="ind-block-num">02</span>
                Shop-Floor Routings &amp; Operations
              </h4>
              <ul className="ind-routing-list">
                {current.primaryRoutings.map((routing, idx) => (
                  <li key={idx}>
                    <span className="route-step-num">{idx + 1}</span>
                    <span>{routing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quality Standards & ERP Adaptation */}
            <div className="ind-block full-width">
              <h4>
                <span className="ind-block-num">03</span>
                Quality Enforcement &amp; Connected Lifecycle
              </h4>
              <div className="ind-split-content">
                <div>
                  <strong style={{ color: '#00ffaa' }}>Enforced Quality &amp; Tolerance Criteria:</strong>
                  <p style={{ marginTop: '6px', color: '#cbd5e1' }}>{current.qualityCheckpoints}</p>
                </div>
                <div>
                  <strong style={{ color: '#c084fc' }}>How GENTRO NEXUS Orchestrates This Lifecycle:</strong>
                  <p style={{ marginTop: '6px', color: '#cbd5e1' }}>{current.lifecycleAdaptation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
