import Loader from '../components/ui/Loader';
import Navbar from '../components/Navbar';
import Globe from '../components/Globe';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {


  const services = [
    {
      number: '01',
      title: 'Web & Cloud Architecture',
      tagline: 'Top performing enterprise scale',
      description:
        'We engineer ultra-fast, responsive, and SEO-optimized digital web applications. Every platform is architected for maximum usability, security, and global scalability.',
      tools: ['React / Next.js', 'Three.js & WebGL', 'Tailwind CSS', 'Node / Python', 'Cloudflare & AWS', 'Vercel / Docker'],
      rotation: '-rotate-1',
      offset: 'top-24',
      borderGlow: 'hover:border-[#3DADEC]',
      accentColor: '#3DADEC',
    },
    {
      number: '02',
      title: 'Product Design & Systems',
      tagline: 'MVP to global market launch',
      description:
        'We turn concepts into high-impact digital products. From design systems and rapid interactive prototypes to full user experience optimization.',
      tools: ['Figma & FigJam', 'Design Systems', 'Interactive Prototypes', 'Brand Identity', 'Investor Decks', 'User Research'],
      rotation: 'rotate-1',
      offset: 'top-28',
      borderGlow: 'hover:border-[#e26d22]',
      accentColor: '#e26d22',
    },
    {
      number: '03',
      title: 'AI & Next-Gen Systems',
      tagline: 'Intelligent workflow automation',
      description:
        'Cutting-edge generative AI integrations, intelligent chatbots, automated data processing, and custom vector search infrastructure.',
      tools: ['OpenAI & Claude APIs', 'Gemini Models', 'Vector Databases', 'AI Pipelines', 'Automation Agents', 'Computer Vision'],
      rotation: '-rotate-1',
      offset: 'top-32',
      borderGlow: 'hover:border-[#3DADEC]',
      accentColor: '#3DADEC',
    },
    {
      number: '04',
      title: 'Performance & Global SEO',
      tagline: '100% Core Web Vitals guaranteed',
      description:
        'Full-scale technical search engine optimization, semantic structured metadata, edge CDN caching, and high-conversion landing page funnels.',
      tools: ['Google Search Console', 'Lighthouse 100/100', 'Schema.org JSON-LD', 'Edge CDN Routing', 'Analytics & Heatmaps', 'Conversion CRO'],
      rotation: 'rotate-1',
      offset: 'top-36',
      borderGlow: 'hover:border-[#e26d22]',
      accentColor: '#e26d22',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-slate-100 font-mont selection:bg-[#3DADEC]/30 selection:text-[#3DADEC] relative overflow-x-clip">

      {/* 1. Rocket Preloader */}
      <Loader />

      {/* 2. Top Navigation Bar*/}
      <Navbar />

      {/* 3. Globe */}
      <Globe />

      {/* 3D Embossed Hexagonal Backdrop Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#3DADEC 1px, transparent 1px), radial-gradient(#e26d22 1px, #121212 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Atmospheric Ambient Theme Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(61,173,236,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-10 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(226,109,34,0.08),transparent_70%)] pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* HERO SECTION (Center-Aligned)                                             */}
      {/* ========================================================================= */}
      <Hero />

      {/* ========================================================================= */}
      {/* INFINITE MARQUEE BANNER                                                   */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full bg-[#181818]/90 border-y border-[#262626] py-3.5 overflow-hidden select-none backdrop-blur-md">
        <div className="flex w-max animate-marquee space-x-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400">
          <span>13+ Years of Experience</span>
          <span className="text-[#3DADEC]">/</span>
          <span>600+ Successful Projects</span>
          <span className="text-[#e26d22]">/</span>
          <span>130+ Enterprise Reviews</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100% Customer Satisfaction Rate</span>
          <span className="text-[#e26d22]">/</span>
          <span>50+ Global Platform Experiences</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100/100 Core Web Vitals SEO</span>
          <span className="text-[#e26d22]">/</span>
          <span>13+ Years of Experience</span>
          <span className="text-[#3DADEC]">/</span>
          <span>600+ Successful Projects</span>
          <span className="text-[#e26d22]">/</span>
          <span>130+ Enterprise Reviews</span>
          <span className="text-[#3DADEC]">/</span>
          <span>100% Customer Satisfaction Rate</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SERVICES & STICKY CAPABILITIES SECTION                                    */}
      {/* ========================================================================= */}
      <Services services={services} />

     

    </div>
  );
};

export default Home;