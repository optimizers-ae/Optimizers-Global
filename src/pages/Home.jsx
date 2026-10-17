import React from 'react';
import ConsultationSection from '../components/ConsultationSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import StrategicInsightsSection from '../components/StrategicInsightsSection';
import UAEFootprintSection from '../components/UAEFootprintSection';
import TrustedClientsSection from '../components/TrustedClientsSection';
import TechnologyEcosystemSection from '../components/TechnologyEcosystemSection';
import PortfolioSection from '../components/PortfolioSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';

const Home = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden" style={{ background: '#030D12' }}>
      {/* ── Main Page Content (Elevated with z-10 and dark background to mask sticky reveal footer) ── */}
      <div className="relative z-10 w-full shadow-[0_25px_60px_rgba(0,0,0,0.95)]" style={{ background: '#030D12' }}>
        <Hero />
        <ConsultationSection />
        <ServicesSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <StrategicInsightsSection />
        <ProcessSection />
        <UAEFootprintSection />
        <TrustedClientsSection />
        <TechnologyEcosystemSection />
        <PortfolioSection />
        <FAQSection />
        <FinalCTASection />
      </div>

      {/* ── Sticky Under-Page Reveal Footer (Motion for React) ── */}
      <Footer />
    </main>
  );
};

export default Home;
