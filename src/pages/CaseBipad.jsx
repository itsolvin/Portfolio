import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronDown, Monitor, Database, Users, Zap, Compass, Layout, ArrowLeft, Mouse, User, Globe, Layers, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseBipad = () => {
  // Always scroll to top when mounting a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="w-full relative z-10 flex flex-col items-center">
      
      {/* =======================
          FLOATING BACK BUTTON
      ======================== */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50"
      >
        <Link 
          to="/"
          className="flex items-center gap-3 px-5 h-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-medium text-sm tracking-wide">Back</span>
        </Link>
      </motion.div>
      
      {/* =======================
          1. HERO SECTION 
      ======================== */}
      <section className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden pt-16">
        <motion.div 
          style={{ y: heroParallax }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Large Abstract Background Map/Data Visual Placeholder */}
          <div className="absolute inset-0 bg-black">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
              alt="BIPAD Background" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-110"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/90 to-[#050505]"></div>
          </div>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1000px] px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <span className="px-4 py-2 text-xs font-semibold text-[#0A0A0A] bg-primary rounded-full tracking-wide">
              GovTech
            </span>
            <span className="px-4 py-2 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full tracking-wide flex items-center gap-2 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              Live System
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-2xl"
          >
            BIPAD Portal
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-zinc-400 font-medium mb-12"
          >
            National Disaster Information System
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl leading-relaxed"
          >
            “Transforming complex disaster data into clear, actionable insights.”
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 flex items-center gap-2">
            <Mouse className="w-4 h-4 opacity-70" /> Scroll
          </span>
          <ChevronDown className="w-5 h-5 opacity-70 mt-1" />
        </motion.div>
      </section>

      {/* =======================
          2. CONTEXT STRIP 
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        >
          {[
            { label: "Role", value: "UI/UX Designer", icon: <User className="w-5 h-5 text-primary/80" /> },
            { label: "Platform", value: "Web GIS System", icon: <Globe className="w-5 h-5 text-primary/80" /> },
            { label: "Scope", value: "Data Vis & UX", icon: <Layers className="w-5 h-5 text-primary/80" /> },
            { label: "Context", value: "Government System", icon: <Building className="w-5 h-5 text-primary/80" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start bg-white/[0.02] border border-white/5 px-6 py-5 rounded-2xl flex-1 min-w-[200px] hover:bg-white/[0.04] transition-colors group">
              <div className="mb-4 p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1.5">{item.label}</span>
              <span className="text-zinc-200 text-sm md:text-base font-medium">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =======================
          3. PROBLEM SECTION 
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
            <Compass className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            Disaster data is complex, dense, and difficult to interpret quickly.
          </h3>
          <ul className="space-y-4">
            {[
              "Multiple massive data layers overlapping",
              "Different user types (Gov officials vs First responders)",
              "Absolute need for real-time decision clarity under extreme pressure"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-400 font-light text-[17px]">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 relative rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Dashboard Map Visual */}
          <img 
            src="/images/bipad/dashboard-map.jpg" 
            alt="BIPAD Portal Dashboard Map" 
            className="w-full h-auto block opacity-90 transition-transform duration-700 hover:scale-105"
          />
          {/* Subtle inner shadow and overlay to blend with dark mode */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/40 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none"></div>
        </motion.div>
      </section>

      {/* =======================
          4. CHALLENGES 
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-16">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest text-primary uppercase mb-12 text-center"
        >
          Core Challenges
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Database />, title: "Data Complexity", desc: "High-volume, multi-layered disaster data requiring instant rendering." },
            { icon: <Zap />, title: "Decision Speed", desc: "Users must act quickly under pressure. No time to learn complex interfaces." },
            { icon: <Layout />, title: "Usability", desc: "Interfaces must remain remarkably simple despite holding extreme technical complexity." },
            { icon: <Users />, title: "Multi-user System", desc: "Serving completely different stakeholders with contradictory data needs." }
          ].map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white/[0.015] border border-white/[0.05] p-8 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/[0.1] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
              <div className="text-zinc-500 group-hover:text-primary transition-colors mb-6">
                {React.cloneElement(challenge.icon, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-xl font-bold text-zinc-100 mb-3">{challenge.title}</h4>
              <p className="text-zinc-400 font-light leading-relaxed">{challenge.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          5. APPROACH 
      ======================== */}
      <section className="w-full bg-[#080808] border-y border-white/[0.02] py-32 mt-16 relative">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold">Design Philosophy</h3>
            <div className="space-y-6 text-xl md:text-2xl text-zinc-500 font-light">
              <p className="text-white">"Simplify complexity."</p>
              <p>"Prioritize clarity over data density."</p>
              <p>"Design for decision-making, not aimless exploration."</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full bg-black/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm shadow-inner"
          >
            {/* Raw UX Sketch Representation */}
            <div className="w-full aspect-[4/3] relative flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl">
              <Monitor className="w-12 h-12 text-zinc-700 mb-4" />
              <div className="text-zinc-600 text-sm font-mono">[ Wireframe / Flow Map Placeholder ]</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =======================
          6. SOLUTION VISUALS 
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-32 space-y-32">
        {[
          {
            title: "Map Interaction Design",
            desc: "Simplified map-based interaction for faster interpretation of geographic risk zones.",
            video: "/videos/New Video.mov"
          },
          {
            title: "Data Layer Toggles",
            desc: "Clear hierarchy for critical information, allowing users to stack or isolate datasets instantly.",
            video: "/videos/New Video 2.mov",
            reverse: true
          },
          {
            title: "Executive Dashboard",
            desc: "High-level statistical overviews combining live maps with urgent numerical readouts.",
            video: "/videos/New Video 3.mov"
          }
        ].map((sol, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${sol.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
          >
            <div className="flex-1 space-y-4">
              <h4 className="text-2xl md:text-3xl font-bold text-white">{sol.title}</h4>
              <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">{sol.desc}</p>
            </div>
            <div className="w-full lg:w-[60%] rounded-[2rem] overflow-hidden border border-white/[0.05] bg-[#0A0A0A] shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10"></div>
              {sol.video ? (
                <video 
                  src={sol.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <img 
                  src={sol.img} 
                  alt={sol.title} 
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                />
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* =======================
          7. KEY DECISIONS 
      ======================== */}
      <section className="w-full max-w-[1000px] px-6 md:px-12 py-16">
        <h3 className="text-center text-3xl font-bold mb-16 text-white">Critical Design Decisions</h3>
        <div className="flex flex-col gap-6">
          {[
            "Reduced cognitive load by intelligently grouping data layers instead of flat-listing.",
            "Prioritized real-time visibility of critical data (red alerts) above structural analytics.",
            "Balanced immense data density with stark readability using a dark, high-contrast UI mode."
          ].map((decision, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.02] border-l-2 border-primary py-6 px-8 rounded-r-2xl"
            >
              <p className="text-zinc-300 text-lg font-light">{decision}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          8. IMPACT 
      ======================== */}
      <section className="w-full py-40 flex justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] space-y-6"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            Improved clarity in disaster data interpretation.
          </h3>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light">Faster decision-making.</p>
          <p className="text-2xl md:text-3xl text-zinc-500 font-light">A unified system for multi-level governance.</p>
        </motion.div>
      </section>

      {/* =======================
          9. CTA SECTION 
      ======================== */}
      <section className="w-full pb-32 pt-16 flex justify-center gap-4 px-6 border-t border-white/[0.05]">
        <a 
          href="https://bipadportal.gov.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-[15px] font-medium text-[#0A0A0A] bg-primary hover:bg-primary/90 px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(124,255,79,0.3)]"
        >
          Visit Platform
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <Link 
          to="/"
          className="flex items-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium text-[15px] rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
        >
          Back to Home
        </Link>
      </section>

    </div>
  );
};

export default CaseBipad;
