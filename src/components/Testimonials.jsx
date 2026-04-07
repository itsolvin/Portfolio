import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  { id: 1, quote: "They completely transformed our platform. The new design increased our user engagement by 40% in just two weeks.", author: "Sarah Jenkins", role: "CEO, TechFlow", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
  { id: 2, quote: "An absolute masterclass in UI/UX. The attention to detail and ability to simplify complex workflows is unmatched.", author: "David Chen", role: "Product Manager, Innovate", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
  { id: 3, quote: "Working together was a breeze. They don't just create pretty screens; they design solutions that drive business metrics.", author: "Elena Rodriguez", role: "Founder, Zenith App", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="w-full py-32 px-8 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      <div className="flex flex-col items-center mb-16 relative">
        <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"
        >
          <Quote className="text-primary w-8 h-8" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-center"
        >
           Client Feedback
        </motion.h2>
      </div>

      <div className="relative max-w-4xl mx-auto h-[350px] md:h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center glass p-8 md:p-12 rounded-3xl border-white/5 shadow-2xl"
          >
            <p className="text-xl md:text-3xl font-light text-gray-200 mb-10 leading-relaxed italic">
              "{TESTIMONIALS[index].quote}"
            </p>
            <div className="flex items-center gap-5">
              <img src={TESTIMONIALS[index].image} alt={TESTIMONIALS[index].author} className="w-16 h-16 rounded-full object-cover border-2 border-primary/50 shadow-[0_0_15px_rgba(124,255,79,0.3)]" />
              <div className="text-left">
                <h4 className="font-bold text-white tracking-wide text-lg">{TESTIMONIALS[index].author}</h4>
                <p className="text-primary text-sm font-medium">{TESTIMONIALS[index].role}</p>
              </div>
            </div>
            {/* Ambient Background Glow inside card */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl -z-10 pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 flex justify-center w-14 h-14 bg-bg-panel border border-white/10 rounded-full items-center cursor-pointer hover:bg-white/10 hover:border-primary/50 transition-all z-20 shadow-xl" onClick={prev}>
          <ChevronLeft className="text-white w-6 h-6" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 flex justify-center w-14 h-14 bg-bg-panel border border-white/10 rounded-full items-center cursor-pointer hover:bg-white/10 hover:border-primary/50 transition-all z-20 shadow-xl" onClick={next}>
          <ChevronRight className="text-white w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
