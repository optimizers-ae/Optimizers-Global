import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0202]">
      <Navbar />
      <Hero />
    </main>
  );
}