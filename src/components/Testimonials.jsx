import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  { 
    id: 1, 
    quote: <>"They completely transformed our platform. <span className="text-white font-semibold">The new design increased our user engagement by 40%</span> in just two weeks."</>, 
    author: "Sarah Jenkins", 
    role: "CEO, TechFlow", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
  },
  { 
    id: 2, 
    quote: <>"An absolute masterclass in UI/UX. <span className="text-white font-semibold">The attention to detail and ability to simplify complex workflows</span> is unmatched."</>, 
    author: "David Chen", 
    role: "Product Manager, Innovate", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
  },
  { 
    id: 3, 
    quote: <>"Working together was a breeze. They don't just create pretty screens; <span className="text-white font-semibold">they design solutions that drive business metrics.</span>"</>, 
    author: "Elena Rodriguez", 
    role: "Founder, Zenith App", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" 
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, index]);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -500) {
      next();
    } else if (swipe > 50 || velocity.x > 500) {
      prev();
    }
  };

  // 3D Tilt & Parallax Variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-150, 150], [5, -5]); 
  const rotateY = useTransform(smoothX, [-150, 150], [-5, 5]);

  const glowX = useTransform(smoothX, [-150, 150], [-40, 40]);
  const glowY = useTransform(smoothY, [-150, 150], [-40, 40]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsAutoPlaying(true);
  };

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction * 50,
      scale: 0.95,
      filter: 'blur(8px)',
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction * -50,
      scale: 0.95,
      filter: 'blur(8px)',
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
    })
  };

  return (
    <section id="testimonials" className="w-full py-32 px-6 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-10 md:mb-12 relative">
        {/* Section Label */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/50 text-center"
        >
           Client Feedback
        </motion.h2>
      </div>

      <div className="relative max-w-5xl mx-auto h-[480px] sm:h-[400px] md:h-[420px]">
        
        <div 
          className="w-full h-full relative perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsAutoPlaying(false)}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing w-full h-full flex flex-col items-center justify-center touch-pan-y"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Premium Card Glass Base */}
              <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-8 md:p-14 lg:p-16 rounded-[32px] bg-[#0A0D0A]/40 backdrop-blur-xl border border-white/[0.04] shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_rgba(255,255,255,0.05)] overflow-hidden group">
                
                {/* Parallax Cursor Glow inside card */}
                <motion.div 
                   className="absolute inset-0 w-[150%] h-[150%] -left-1/4 -top-1/4 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                   style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(124,255,79,0.12), transparent 40%)',
                      x: glowX,
                      y: glowY
                   }}
                />

                {/* 3D Content Container */}
                <div className="relative z-10 w-full flex flex-col items-center" style={{ transform: "translateZ(40px)" }}>
                  
                  {/* Integrated Quote Icon */}
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-white/[0.12] mb-6 md:mb-8" />

                  {/* Primary Focus: Quote Text */}
                  <motion.p 
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-2xl md:text-[28px] lg:text-[32px] font-medium text-zinc-400 mb-12 md:mb-16 leading-[1.7] md:leading-[1.8] max-w-[700px] mx-auto italic"
                  >
                    {TESTIMONIALS[index].quote}
                  </motion.p>
                  
                  {/* Author Block */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6">
                    {/* Avatar Microinteraction */}
                    <motion.div
                       initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                       className="relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-[#7CFF4F]/20 blur-[12px] scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img src={TESTIMONIALS[index].image} alt={`Client ${TESTIMONIALS[index].author}`} className="relative w-14 h-14 md:w-[68px] md:h-[68px] rounded-full object-cover border border-[#7CFF4F]/30 shadow-[0_0_15px_rgba(124,255,79,0.15)]" />
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-center md:text-left flex flex-col justify-center">
                      <h4 className="font-bold text-white tracking-wide text-lg md:text-[20px] mb-1 leading-none">{TESTIMONIALS[index].author}</h4>
                      <p className="text-[#7CFF4F]/60 text-xs md:text-[13px] font-semibold tracking-widest uppercase mt-1">{TESTIMONIALS[index].role}</p>
                    </motion.div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Premium Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-30 pointer-events-none">
          <motion.button 
             whileHover={{ scale: 1.1, x: -3 }}
             whileTap={{ scale: 0.95 }}
             onClick={prev}
             onMouseEnter={() => setIsAutoPlaying(false)}
             onMouseLeave={() => setIsAutoPlaying(true)}
             aria-label="Previous Testimonial"
             className="pointer-events-auto flex justify-center items-center w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/[0.08] rounded-full hover:bg-white/[0.06] hover:border-[#7CFF4F]/40 transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(124,255,79,0.15)] focus:outline-none text-zinc-400 hover:text-white cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-30 pointer-events-none">
          <motion.button 
             whileHover={{ scale: 1.1, x: 3 }}
             whileTap={{ scale: 0.95 }}
             onClick={next}
             onMouseEnter={() => setIsAutoPlaying(false)}
             onMouseLeave={() => setIsAutoPlaying(true)}
             aria-label="Next Testimonial"
             className="pointer-events-auto flex justify-center items-center w-12 h-12 md:w-14 md:h-14 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/[0.08] rounded-full hover:bg-white/[0.06] hover:border-[#7CFF4F]/40 transition-colors shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(124,255,79,0.15)] focus:outline-none text-zinc-400 hover:text-white cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
