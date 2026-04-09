import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Target, Layers, Blocks } from 'lucide-react';

const SKILLS = [
  { name: 'UI Architecture', level: 95, label: 'Expert', desc: 'Scalable interface systems', icon: <PenTool className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" /> },
  { name: 'UX Research', level: 85, label: 'Advanced', desc: 'Data-driven insights', icon: <Target className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" /> },
  { name: 'Prototyping', level: 92, label: 'Expert', desc: 'High-fidelity interactions', icon: <Layers className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" /> },
  { name: 'Design Systems', level: 88, label: 'Strong', desc: 'Component library governance', icon: <Blocks className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      {/* Reduced Background Depth Glow for cleaner aesthetic */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        {/* Left Side: Typography - Senior Product Designer Tone */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/50 mb-6 md:mb-8"
          >
             Technical Expertise
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[26px] md:text-3xl lg:text-4xl text-zinc-200 font-medium leading-[1.4] max-w-xl mx-auto lg:mx-0"
          >
            I design systems, not just screens.<br className="hidden md:block"/>
            <span className="text-zinc-500 font-light mt-2 block text-xl md:text-[22px] lg:text-2xl leading-[1.6]">From research to scalable UI architecture, I focus on clarity, usability, and impact—creating products that actually perform.</span>
          </motion.p>
        </div>
        
        {/* Right Side: Refined Skill Cards */}
        <div className="flex-1 flex flex-col gap-4 w-full relative z-10">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 + (index * 0.12), duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="w-full group relative p-5 md:p-[22px] rounded-[24px] bg-[#0A0D0A]/60 backdrop-blur-md border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-[5px]"
            >
              
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-[#7CFF4F]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-center mb-5 md:mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Clean Icon Container */}
                  <div className="w-12 h-12 rounded-[14px] bg-black/40 border border-white/[0.05] flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:bg-[#7CFF4F]/10 group-hover:border-[#7CFF4F]/20 group-hover:shadow-[0_0_15px_rgba(124,255,79,0.15)]">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-zinc-100 font-semibold tracking-wide text-base md:text-lg relative group-hover:text-white transition-colors duration-300">{skill.name}</h3>
                    <p className="text-zinc-500 text-[11px] md:text-xs font-semibold uppercase tracking-widest mt-0.5">{skill.desc}</p>
                  </div>
                </div>
                {/* Text Label Instead of Percentage */}
                <span className="text-zinc-400 font-semibold text-[10px] md:text-[11px] tracking-[0.15em] uppercase bg-white/[0.03] border border-white/[0.05] px-3 md:px-4 py-1.5 rounded-full group-hover:text-[#0a0a0a] group-hover:bg-[#7CFF4F] transition-all duration-500 shadow-sm">{skill.label}</span>
              </div>
              
              {/* Premium Progress Bar */}
              <div className="w-full h-[6px] md:h-[8px] bg-[#000000] border border-white/[0.05] rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] relative z-10 transition-transform duration-500 group-hover:scale-y-[1.1] origin-left">
                
                {/* Progress Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 + (index * 0.1) }}
                  className="h-full rounded-full relative overflow-hidden bg-gradient-to-r from-[#213b1a] to-[#51a337] group-hover:to-[#7CFF4F] transition-colors duration-500"
                >
                  <motion.div 
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "linear", delay: index * 0.2 }}
                    className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent skew-x-[-20deg]"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
