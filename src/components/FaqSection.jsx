import React, { useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: `What distinguishes ${BRAND_CONFIG.productName} from generic accounting-based ERP software?`,
      a: `${BRAND_CONFIG.productName} is architected specifically for manufacturing shop floors, not merely office accounting. Generic ERPs treat production as simple delayed ledger transactions. ${BRAND_CONFIG.productName} models the physical reality of the factory—linking CAD engineering drawings, multi-tier BOM explosion, machine cycle times, operator skill matrices, finite capacity scheduling, in-process quality gates, and bidirectional lot traceability directly to standard and actual job costing.`
    },
    {
      q: 'How does the platform manage engineering drawings and Bill of Materials (BOM) revisions?',
      a: 'The system links 2D/3D CAD models, DXF flat patterns, and engineering specifications directly to item master records. When an Engineering Change Order (ECO) is approved, the system updates the Manufacturing BOM (mBOM), flags open purchase requisitions, highlights obsolete components in warehouse bins, and updates operator traveler screens automatically to prevent manufacturing parts to outdated specifications.'
    },
    {
      q: 'Which manufacturing sectors and operational models are best suited for this platform?',
      a: 'The platform is engineered for discrete, batch, and custom fabricated manufacturing operations. Key sectors include ceiling fans and electromechanical components, steel furniture and benches, fabricated sheet metal products, precision CNC machining, electronics/PCB assembly, and industrial equipment. It supports Make-to-Stock (MTS), Make-to-Order (MTO), and Engineer-to-Order (ETO) workflows.'
    },
    {
      q: 'How do the AI capabilities assist with production scheduling and maintenance?',
      a: 'The AI scheduling engine uses operations research constraint solvers to balance machine availability, tooling wear, and setup times. If a work-center experiences an unplanned stoppage or a rush order arrives, the solver calculates optimized alternate sequences in seconds. For maintenance, condition-based algorithms evaluate continuous machine telemetry to recommend servicing during scheduled shift handovers before mechanical failures occur.'
    },
    {
      q: 'How is complete batch, heat lot, and serial-number traceability maintained?',
      a: 'Traceability is enforced at every physical movement. Inbound raw materials (such as steel tubing heats or copper wire reels) receive unique lot barcodes upon dock receiving. As parts move through cutting, stamping, welding, and assembly, travelers record the component lot IDs used in each unit. If a defect is later discovered, quality engineers can trace every affected finished product serial within seconds.'
    },
    {
      q: 'What external shop-floor machines, CAD systems, and accounting platforms can integrate?',
      a: 'The architecture includes planned integration gateways for CAD/PLM systems (SolidWorks, Autodesk Inventor), industrial machine protocols (OPC-UA, Modbus TCP, MQTT for CNCs, PLCs, and SCADA), supplier EDI (EDI 850, 856), and external corporate accounting ledgers via secure REST and GraphQL APIs.'
    },
    {
      q: 'Can the platform handle highly customized products like custom steel benches or fans?',
      a: 'Yes. The integrated Configure-Price-Quote (CPQ) module allows commercial teams to select custom parameters—such as tubing gauge, powder coat RAL colors, fan blade pitch angles, and controller options. The rules engine instantly validates engineering feasibility, explodes the custom BOM, calculates accurate margin boundaries, and generates realistic Available-to-Promise (ATP) delivery dates.'
    },
    {
      q: 'What are the implementation requirements and recommended rollout strategy?',
      a: 'A structured, phased rollout is recommended: Phase 1 focuses on core item masters, BOM structures, and Inventory/Purchasing; Phase 2 implements shop-floor routing, digital travelers, and MES scheduling; Phase 3 activates quality inspection checkpoints and job costing reconciliation; and Phase 4 enables advanced telemetry streams and optimization solvers. Our technical team guides data migration and operator training at every milestone.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            Knowledge Base &amp; FAQ
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Get clear, technical answers regarding {BRAND_CONFIG.productName} architecture, order-to-delivery integration, and manufacturing suitability.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
