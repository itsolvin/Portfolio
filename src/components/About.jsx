import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Layout } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Lightbulb className="w-7 h-7 text-primary relative z-10" />,
      title: 'Problem Solving',
      description: 'Translating complex business requirements into simple, elegant, and highly scalable digital solutions.'
    },
    {
      icon: <Users className="w-7 h-7 text-primary relative z-10" />,
      title: 'User-Centered',
      description: 'Designing with deep empathy to ensure products are accessible, equitable, and intuitive for everyone.'
    },
    {
      icon: <Layout className="w-7 h-7 text-primary relative z-10" />,
      title: 'Product Thinking',
      description: 'Focusing on the big picture to align design decisions directly with strategic business objectives.'
    }
  ];

  return (
    <section id="about" className="w-full py-32 px-6 lg:px-16 max-w-[1400px] mx-auto relative relative z-10">
      {/* Background Depth Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-x-0 bottom-0 top-[50%] bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center mb-16 mt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight flex items-center justify-center flex-wrap gap-2"
        >
          Design with
          <span className="relative inline-flex items-center justify-center px-6 py-1 bg-white/[0.03] rounded-full border border-white/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden">
            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70"></span>
            <span className="relative z-10 text-primary font-bold italic tracking-tight drop-shadow-[0_0_10px_rgba(124,255,79,0.3)]">
              Purpose
            </span>
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-[#A1A1AA] max-w-[640px] text-lg font-light leading-[1.8]"
        >
          Great design isn't just about aesthetics—it's about architecture. I construct scalable, variable-based design systems that bridge the gap between strategic business goals and intuitive human experiences. 
          <br /><br />
          Every pixel serves a function; every interaction drives value.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 pb-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative group flex flex-col p-8 rounded-3xl transition-all duration-300 ease-out bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1.5 hover:scale-[1.02] hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-white/[0.1]"
          >
            {/* Glowing Hover Halo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ease-out">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {card.icon}
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3 tracking-tight group-hover:text-white transition-colors">
              {card.title}
            </h3>
            
            <p className="text-[#A1A1AA] leading-[1.7] font-light text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
