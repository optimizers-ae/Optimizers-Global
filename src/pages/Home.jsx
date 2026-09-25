
import ConsultationSection from '../components/ConsultationSection';
import ServicesSection from '../components/ServicesSection';
import Hero from '../components/home/Hero';

const Home = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden" style={{ background: '#030D12' }}>
      <Hero />
      <ConsultationSection />
      <ServicesSection />
    </main>
  );
};

export default Home;
