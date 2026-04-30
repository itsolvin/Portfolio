import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Layout } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary relative z-10" />,
      title: 'Problem Solving',
      description: 'Breaking complexity into clear, scalable systems.',
      dim: true
    },
    {
      icon: <Users className="w-6 h-6 text-primary relative z-10" />,
      title: 'User-Centered',
      description: 'Designing around real behaviors, not assumptions.',
      prominent: true
    },
    {
      icon: <Layout className="w-6 h-6 text-primary relative z-10" />,
      title: 'Product Thinking',
      description: 'Aligning design decisions with business outcomes.',
      dim: true
    }
  ];

  return (
    <section id="about" className="w-full py-32 px-6 lg:px-16 max-w-[1200px] mx-auto relative z-10">
      {/* Background Depth Effects */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-10 opacity-40" />
      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10 opacity-60" />

      <div className="flex flex-col items-center text-center mb-20 mt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight leading-tight flex items-center justify-center flex-wrap gap-2 text-white"
        >
          Design, but with
          <span className="relative inline-flex items-center justify-center px-5 py-1.5 bg-white/[0.02] rounded-full border border-white/5 backdrop-blur-sm shadow-[0_2px_15px_rgba(0,0,0,0.3)] overflow-hidden">
            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60"></span>
            <span className="relative z-10 text-primary font-medium tracking-tight drop-shadow-[0_0_8px_rgba(124,255,79,0.2)]">
              Purpose.
            </span>
          </span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-zinc-400 max-w-[540px] text-[17px] font-light leading-[1.8]">
            Great design is not decoration—it’s structure. <br className="hidden md:block" />
            I build scalable systems that connect business goals <br className="hidden md:block" />
            with intuitive user experiences.
          </p>
          <p className="mt-6 text-zinc-300 font-medium tracking-wide">
            Every interaction is intentional.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 pb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.7, ease: "easeOut" }}
            className={`relative group flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-500 ease-out bg-white/[0.015] backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:-translate-y-[6px] hover:bg-white/[0.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:border-white/[0.08] ${
              card.prominent
                ? "md:scale-[1.03] border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-10"
                : "border-white/[0.03] opacity-80 hover:opacity-100 z-0"
            }`}
          >
            {/* Glowing Hover Halo */}
            <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b ${card.prominent ? 'from-primary/10' : 'from-primary/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            {/* Top subtle border highlight */}
            <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/[0.04] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-500 ease-out">
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md opacity-50 group-hover:opacity-100 group-hover:bg-primary/20 transition-all duration-500" />
              {card.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors">
              {card.title}
            </h3>
            
            <p className="text-zinc-400 leading-[1.6] font-light text-[15px]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
