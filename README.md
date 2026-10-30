# GENTRO NEXUS — AI-Powered Manufacturing ERP Landing Page

A dedicated product introduction and marketing landing page for **GENTRO NEXUS**, an AI-powered ERP platform engineered for discrete, batch, and fabricated manufacturing companies.

Built with **React**, **Vite**, and **Vanilla CSS**.

---

## Brand Identity & Architectural Rules

* **Brand Prefix:** `GENTRO` (Strictly non-negotiable; never Zentro).
* **Official Product Name:** `GENTRO NEXUS` (configured in `src/constants/branding.js`).
* **Product Descriptor:** `AI-Powered Manufacturing ERP`.
* **Visual Direction:**
  * **Backgrounds:** Deep Space Navy (`#050816`, `#0A0F26`, `#0F1638`) with layered micro-dot matrix texture, fine technical grid, and ambient glassmorphism (`backdrop-filter: blur(16px)`).
  * **Accents & Gradients:** Bright Electric Cyan (`#00F0FF`), Electric Blue (`#0066FF`, `#0080FF`), and Cyber Purple (`#7928CA`, `#9333EA`, `#C084FC`).
  * **Brand Wordmark:** Crisp, high-end text-based GENTRO NEXUS wordmark with luminous multi-stop cyan-blue-purple specular gradients.
  * **Integrity Guardrails:** Clear distinction between verified functionality, illustrative UI demonstrations, and proposed AI capabilities. No fabricated customer claims or unverified backend calls.

---

## Page Structure & Components

1. **Navigation (`src/components/Navbar.jsx`):**
   * Responsive sticky navigation with blur-on-scroll.
   * GENTRO brand mark, desktop links, and full mobile drawer covering all 9 sections with smooth scrolling.
2. **Hero & Command Center (`src/components/Hero.jsx`):**
   * Official positioning: *"From Customer Order to Finished Product — Intelligently."*
   * Supporting message: *"Connect customer orders, engineering, materials, production, quality, and delivery through one integrated manufacturing workflow."*
   * Interactive **Command Center Telemetry Preview** with switchable views:
     * *Shop Floor Status* (active work centers, cycle times, throughput).
     * *Dynamic Dispatch* (automated queue balancing and bottleneck mitigation).
     * *Machine Diagnostics* (vibration telemetry and condition-based maintenance).
   * Key indicators: Active Work Orders, Production Completion, Material Availability, Work-Center Utilization, Quality Pass Rate, and On-Time Delivery.
3. **Order-to-Delivery Workflow (`src/components/Workflow.jsx`):**
   * Complete 6-stage lifecycle in exact required sequence:
     1. Customer Orders and Requirements (enquiries, quotes, specs, ATP delivery dates)
     2. Engineering and Product Design (CAD drawings, multi-tier BOM, revisions, routings)
     3. Material Planning and Procurement (MRP net requirements, supplier lead times, reservations)
     4. Production Planning and Execution (finite capacity scheduling, paperless travelers, telemetry)
     5. Quality Assurance and Traceability (inspection checkpoints, defect logging, lot genealogy)
     6. Finished Goods, Dispatch, Delivery, and Returns (packaging, freight tracking, RMA returns)
   * Details inputs, ERP activities, AI assistance, outputs, handoffs, and real manufacturing examples for each stage.
4. **ERP Modules Suite (`src/components/Modules.jsx`):**
   * Comprehensive interactive showcase of all 6 core functional modules:
     * **Inventory and Warehousing** (bin-level tracking, FIFO/FEFO, ABC cycle counts, safety stock)
     * **Production and Manufacturing Execution** (finite Gantt dispatching, paperless terminals, OEE)
     * **Purchasing and Supplier Management** (MRP requisition match, vendor scoring, 3-way match)
     * **Sales, Orders, and Quotations** (CPQ dynamic margin bounds, Available-to-Promise)
     * **Quality Assurance and Traceability** (inspection plans, non-conformance quarantine, SPC, CAPA)
     * **Financial Management and Job Costing** (standard vs. actual job costing, 3-way AP reconciliation)
5. **Applied AI Capabilities (`src/components/AiCapabilities.jsx`):**
   * Six industrial AI applications:
     1. Predictive Equipment Health & Maintenance Advisory
     2. Intelligent Production Scheduling & Rescheduling
     3. Demand and Material Reorder Forecasting
     4. Computer-Vision-Assisted Quality Inspection
     5. Manufacturing Operations Copilot
     6. Process Optimization & Anomaly Detection
   * Transparently details problems, data inputs, high-level algorithms, outputs, human oversight, and operational benefits.
6. **Role-Based User Experience (`src/components/RoleViews.jsx`):**
   * Purpose-built workflows, KPI dashboards, and daily routines for 9 distinct manufacturing personas:
     * Plant Managers, Business Owners, Sales Teams, Engineering Teams, Production Planners, Shop-Floor Operators, Inventory/Procurement Teams, Quality Inspectors, and Finance Teams.
7. **Manufacturing Industry Use Cases (`src/components/IndustryUseCases.jsx`):**
   * Deep domain walkthroughs explaining how BOMs, routings, and quality criteria adapt across:
     * Ceiling Fans & Electromechanical Components (stator winding, rotor die-casting, blade balancing)
     * Steel Furniture & Benches (tubular bending, robotic MIG welding, powder coating)
     * Fabricated Metal Products (sheet nesting, laser cutting, press brake forming)
     * Precision CNC Machining & Tooling (5-axis milling, tight tolerances ±0.005mm, tool offsets)
     * Electronics & PCB Assembly (high-speed SMT, component reel tracking, reflow profiling)
8. **Product Architecture & Integrations (`src/components/Architecture.jsx`):**
   * Multi-layer conceptual architectural breakdown: Presentation Dashboards, Core ERP Modules, Workflow & Rules Engine, Industrial AI Solvers, and Unified Time-Series / Relational Data Store.
   * Planned integration gateways for CAD/PLM (SolidWorks, Inventor), Shop-Floor PLCs/SCADA (OPC-UA, Modbus), Supplier EDI, and Accounting platforms.
9. **Operational Benefits (`src/components/Benefits.jsx`):**
   * Side-by-side comparison: *Traditional Fragmented Systems* vs. *GENTRO Connected Architecture*.
   * Nine grounded value drivers without fabricated statistics.
10. **Frequently Asked Questions (`src/components/FaqSection.jsx`):**
    * In-depth accordion covering manufacturing ERP fundamentals, BOM management, industry suitability, AI scheduling, traceability, and rollout strategy.
11. **Demonstration Request (`src/components/DemoSection.jsx`):**
    * Full client-side validated form with accessible labels, error feedback, expanded manufacturing sectors, and transparent confirmation card.
12. **Contact Us (`src/components/ContactSection.jsx`):**
    * Phone / WhatsApp, office address, and GST cards beside a validated Name / Contact Details / Message form.
    * No backend is bundled, so by default the form does **not** claim to send anything: after validation it shows a clear "ready, not sent yet" state with a pre-filled WhatsApp link and a copy-message action.
    * To enable real delivery, set `VITE_CONTACT_ENDPOINT` (see `.env.example`). The form then POSTs JSON `{ name, contact, message, source, submittedAt }` and shows "Message sent" only after a 2xx response; failures show an error with retry.
13. **Interaction layer (`src/components/InteractionLayer.jsx`, `src/styles/interactions.css`):**
    * Scroll progress bar, staggered reveal-on-scroll, pointer spotlight on cards, hero panel float/tilt, live step highlight, navbar scroll-spy, floating WhatsApp and back-to-top buttons. Honors `prefers-reduced-motion`.
14. **Professional Footer (`src/components/Footer.jsx`):**
    * Consistent GENTRO branding, navigation links to all 9 sections, manufacturing sector anchors, legal links, and provisional branding disclosure.

---

## Local Development & Build

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### Commands

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
