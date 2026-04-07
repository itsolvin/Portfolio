import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Target, Layers, Blocks } from 'lucide-react';

const SKILLS = [
  { name: 'UI Design', level: 95, icon: <PenTool className="w-5 h-5 text-primary" /> },
  { name: 'UX Research', level: 85, icon: <Target className="w-5 h-5 text-primary" /> },
  { name: 'Prototyping', level: 90, icon: <Layers className="w-5 h-5 text-primary" /> },
  { name: 'Design Systems', level: 88, icon: <Blocks className="w-5 h-5 text-primary" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      {/* Background Depth Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Typography */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight"
          >
            Technical <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[#A1A1AA] text-lg font-light max-w-md mx-auto lg:mx-0 mb-8 leading-[1.8]"
          >
            I combine creative design principles with a strong understanding of deep user research and scalable design architecture to build top-tier digital products.
          </motion.p>
        </div>
        
        {/* Right Side: Interactive Bars */}
        <div className="flex-1 flex flex-col gap-5 w-full relative z-10">
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="w-full group relative p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* Inner Soft Gradient on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#09090B] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 ease-out">
                    {skill.icon}
                  </div>
                  <span className="text-gray-200 font-bold tracking-tight text-xl group-hover:text-white transition-colors">{skill.name}</span>
                </div>
                <span className="text-primary font-bold text-2xl drop-shadow-md">{skill.level}%</span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="w-full h-3.5 bg-black/50 border border-white/5 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative z-10 translate-z-0">
                
                {/* Progress Bar Fill Component */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                  className="h-full rounded-full relative overflow-hidden bg-gradient-to-r from-primary/50 via-primary to-accent"
                >
                  {/* Endless Sine-Sweep Shine Animation */}
                  <motion.div 
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: index * 0.2 }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                  />
                </motion.div>

                {/* Simulated Outerglow rendered behind/around the fill safely */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                  className="absolute top-0 left-0 h-full bg-primary blur-[10px] opacity-40 mix-blend-screen pointer-events-none"
                />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
