import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CaseBipad from './pages/CaseBipad';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Subtle dampening for a smooth, natural feel
      wheelMultiplier: 1,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Premium exponential easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      {/* Background radial gradient spotlight */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-50 mix-blend-overlay"></div>
      
      <Router>
        <main className="relative z-10 flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <About />
                <CaseStudies />
                {/* <Portfolio /> */}
                <Skills />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/case/bipad" element={<CaseBipad />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
