import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    id: "bipad",
    badge: "GovTech",
    status: "Live",
    title: "BIPAD Portal",
    subtitle: "National Disaster Information System",
    description: "Government-scale platform for disaster data, risk monitoring, and coordination.",
    highlights: [
      "Simplified complex disaster data into usable interfaces",
      "Designed map-based interaction flows",
      "Improved decision-making under pressure"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    cta: "Visit Platform",
  },
  {
    id: "shikshya",
    badge: "EdTech",
    status: "Live",
    title: "Shikshya",
    subtitle: "E-learning Platform",
    description: "Digital learning platform for structured courses and certification.",
    highlights: [
      "Designed clear course navigation system",
      "Improved learning flow and engagement",
      "Built scalable course architecture"
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
    cta: "Visit Platform",
  }
];

const Card = ({ study, i, isLast, nextCardProgress }) => {
  const isEven = i % 2 === 0;

  // If there's no next card (it's the last one), it stays fully opaque and scaled
  const defaultProgress = useMotionValue(0);
  const progress = nextCardProgress || defaultProgress;

  const fadeOutOpacity = useTransform(progress, [0, 1], [1, 0]);
  const scaleOut = useTransform(progress, [0, 1], [1, 0.95]);

  const positionClass = isLast ? "relative z-20" : "sticky z-10";
  const topStyle = isLast ? {} : { top: `calc(27vh + ${i * 40}px)` };

  return (
    <div 
      className={`w-full max-w-[1100px] mx-auto ${positionClass}`}
      style={topStyle}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full origin-top"
      >
        <motion.div
          style={{ opacity: fadeOutOpacity, scale: scaleOut }}
          className="w-full bg-[#0d0d0d] rounded-[2.5rem] border border-white/[0.08] shadow-[0_-20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col lg:flex-row"
        >
          {/* ---------------- CONTENT SIDE ---------------- */}
          <div className={`w-full lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative z-20 ${!isEven ? 'lg:order-2' : ''}`}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 text-xs font-semibold text-[#0A0A0A] bg-primary rounded-full tracking-wide">
                {study.badge}
              </span>
              <span className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 border border-white/10 rounded-full tracking-wide flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                {study.status}
              </span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
              {study.title} <br/>
              <span className="text-zinc-500 text-2xl lg:text-3xl font-medium mt-2 block tracking-normal">
                {study.subtitle}
              </span>
            </h3>
            
            <p className="text-zinc-300 leading-[1.7] font-light text-[16px] lg:text-[18px] mb-10 max-w-[480px]">
              {study.description}
            </p>

            <ul className="space-y-4 mb-12 hidden md:block">
              {study.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-400 font-light text-[15px]">
                  <ArrowRight className="w-5 h-5 text-primary shrink-0 opacity-70 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="group w-fit flex items-center gap-3 text-[15px] font-medium text-[#0A0A0A] bg-primary hover:bg-primary/90 px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(124,255,79,0.3)]">
              {study.cta}
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* ---------------- IMAGE SIDE ---------------- */}
          <div className={`w-full lg:w-1/2 min-h-[300px] lg:min-h-0 relative overflow-hidden bg-black hidden sm:block ${!isEven ? 'lg:order-1' : ''}`}>
            {/* Subtle gradient to blend image into the card center */}
            <div className={`absolute inset-0 z-10 ${isEven ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent opacity-90`} />
            
            <img 
              src={study.image} 
              alt={study.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CaseStudies = () => {
  const card2Ref = useRef(null);

  // Track Card 2 to fade out Card 1
  const { scrollYProgress: card2FadeProgress } = useScroll({
    target: card2Ref,
    offset: ["start 85%", "start 35vh"]
  });

  // Track Card 2 to move the Title up synchronously
  const { scrollYProgress: titleScrollProgress } = useScroll({
    target: card2Ref,
    offset: ["start 27vh", "start 0vh"] // As Card 2 moves from 27vh up to 0vh
  });

  // Move title from 0 to -27vh synchronously with Card 2, and DON'T clamp it! 
  // This ensures it keeps scrolling up off the screen natively instead of freezing and overlapping the next section.
  const titleY = useTransform(titleScrollProgress, [0, 1], ["0vh", "-27vh"], { clamp: false });
  const titleOpacity = useTransform(titleScrollProgress, [0, 1], [1, 0]);

  return (
    <section id="work" className="w-full relative z-10">
      
      {/* ---------------- STICKY SECTION HEADER ---------------- */}
      <div className="sticky top-0 z-50 w-full pt-[10vh] pointer-events-none">
        <motion.div 
          style={{ y: titleY, opacity: titleOpacity }}
          className="w-full max-w-[1100px] mx-auto px-8 flex flex-col items-center text-center pointer-events-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-2xl"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Case Studies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl font-light drop-shadow-xl"
          >
            Real-world systems solving complex problems
          </motion.p>
        </motion.div>
      </div>

      {/* ---------------- STACKED CARDS CONTAINER ---------------- */}
      <div className="hidden lg:flex relative w-full px-4 md:px-8 pb-12 flex-col gap-[30vh] pt-[7vh]">
        <Card study={caseStudies[0]} i={0} isLast={false} nextCardProgress={card2FadeProgress} />
        
        {/* Wrap Card 2 in the ref so we can track its physical position */}
        <div ref={card2Ref} className="w-full h-auto z-20">
          <Card study={caseStudies[1]} i={1} isLast={true} />
        </div>
      </div>

      {/* ---------------- MOBILE & TABLET: STACKED FALLBACK ---------------- */}
      <div className="lg:hidden flex flex-col pt-12 pb-24 px-6 gap-12 w-full max-w-[700px] mx-auto relative">
        {caseStudies.map((study) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d0d0d] relative shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="h-[250px] relative border-b border-white/10 bg-black">
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            
            <div className="p-8 bg-[#0d0d0d]">
              <div className="flex items-center gap-2 mb-5">
                <span className="px-2.5 py-1 text-[10px] font-semibold text-[#0A0A0A] bg-primary rounded-full tracking-wide">
                  {study.badge}
                </span>
                <span className="px-2.5 py-1 text-[10px] font-medium text-zinc-200 bg-white/5 border border-white/10 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {study.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {study.title}
              </h3>
              <p className="text-zinc-400 text-sm font-medium mb-4">
                {study.subtitle}
              </p>
              
              <p className="text-zinc-300 text-[14px] font-light leading-relaxed mb-6">
                {study.description}
              </p>

              <button className="w-full flex justify-center items-center gap-2 text-[13px] font-medium text-[#0A0A0A] bg-primary border border-primary px-5 py-3 rounded-full">
                {study.cta}
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default CaseStudies;
