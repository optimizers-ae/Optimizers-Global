import React from 'react';
import HeroSection from '../components/HeroSection';
import ConsultationSection from '../components/ConsultationSection';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#0d0101] overflow-x-hidden">
      <HeroSection />
      <ConsultationSection />
    </main>
  );
};

export default Home;