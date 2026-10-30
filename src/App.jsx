import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import Modules from './components/Modules';
import AiCapabilities from './components/AiCapabilities';
import RoleViews from './components/RoleViews';
import IndustryUseCases from './components/IndustryUseCases';
import Architecture from './components/Architecture';
import Benefits from './components/Benefits';
import FaqSection from './components/FaqSection';
import DemoSection from './components/DemoSection';
import ContactSection from './components/ContactSection';
import InteractionLayer from './components/InteractionLayer';
import Footer from './components/Footer';

// Component Styles
import './styles/navbar.css';
import './styles/hero.css';
import './styles/workflow.css';
import './styles/modules.css';
import './styles/ai-capabilities.css';
import './styles/roles.css';
import './styles/use-cases.css';
import './styles/architecture.css';
import './styles/benefits.css';
import './styles/faq.css';
import './styles/demo-section.css';
import './styles/footer.css';
import './styles/contact.css';
import './styles/interactions.css';

export default function App() {
  return (
    <div className="gentro-landing-app">
      {/* Background ambient lighting */}
      <div className="ambient-glow-mid"></div>

      {/* Modern Navigation Header */}
      <Navbar />

      {/* Scroll progress, reveal/hover motion, floating WhatsApp & back-to-top */}
      <InteractionLayer />

      {/* Main Page Sections */}
      <main id="overview">
        {/* 1. Hero Section & Command Center Telemetry */}
        <Hero />

        {/* 2. Manufacturing Workflow from Order to Delivery (6 Stages) */}
        <Workflow />

        {/* 3. Six Core ERP Modules */}
        <Modules />

        {/* 4. Applied AI Capabilities (6 Domain Applications) */}
        <AiCapabilities />

        {/* 5. Role-Based User Experience (9 Personas) */}
        <RoleViews />

        {/* 6. Manufacturing Industry Use Cases (Fans, Steel Furniture, etc.) */}
        <IndustryUseCases />

        {/* 7. Product Architecture & External Integrations */}
        <Architecture />

        {/* 8. Operational Benefits & Side-by-Side Transformation */}
        <Benefits />

        {/* 9. Frequently Asked Questions */}
        <FaqSection />

        {/* 10. Tailored Product Demonstration & Contact Form */}
        <DemoSection />

        {/* 11. Contact Us (phone / WhatsApp, office, GST + validated message form) */}
        <ContactSection />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
