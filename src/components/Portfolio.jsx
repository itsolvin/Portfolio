import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Dashboard'];

const PROJECTS = [
  { id: 1, title: 'Fintech Dashboard', category: 'Dashboard', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', description: 'A comprehensive financial analytics dashboard for enterprise clients.' },
  { id: 2, title: 'E-Commerce App', category: 'Mobile', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', description: 'A modern, high-conversion mobile shopping experience.' },
  { id: 3, title: 'SaaS Landing Page', category: 'Web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', description: 'High-performing landing page with interactive 3D elements.' },
  { id: 4, title: 'Health Tracking', category: 'Mobile', image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800', description: 'Wellness app focusing on personalized habit tracking.' },
  { id: 5, title: 'AI Copywriter', category: 'Web', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', description: 'Minimalist interface for a powerful AI content generation tool.' },
  { id: 6, title: 'Crypto Exchange', category: 'Dashboard', image: 'https://images.unsplash.com/photo-1621501103254-44b46c827725?auto=format&fit=crop&q=80&w=800', description: 'Real-time cryptocurrency trading platform with advanced charting.' },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(project => filter === 'All' || project.category === filter);

  return (
    <section id="portfolio" className="w-full py-32 px-8 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Selected <span className="text-primary italic">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-lg font-light text-lg"
          >
            A collection of projects showcasing my process, from research and ideation to shipped products.
          </motion.p>
        </div>
        
        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 glass p-2 rounded-full"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative ${
                filter === cat ? 'text-bg-dark' : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="filter-bg"
                  className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(124,255,79,0.3)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ layout: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-[#0A0A0A] border border-white/[0.05] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Background Image with Zoom */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out scale-[1.01] group-hover:scale-[1.05] opacity-50 group-hover:opacity-70 mix-blend-luminosity group-hover:mix-blend-normal"
              />

              {/* Light Sweep Animation */}
              <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-[700ms] ease-in-out pointer-events-none skew-x-12 z-10"></div>

              {/* Gradient Overlay for Readability (Always dark at bottom) */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent transition-opacity duration-300 ease-out opacity-80 group-hover:opacity-100 z-10"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <div className="flex justify-between items-end">
                  
                  {/* Text Block */}
                  <div className="flex-1 transform transition-transform duration-300 ease-out translate-y-6 group-hover:translate-y-0">
                    <p className="text-primary text-[11px] font-bold uppercase tracking-[0.2em] mb-2 drop-shadow-md">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-[#A1A1AA] text-sm font-light transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA Icon */}
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 ease-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 shrink-0 ml-6 group-hover:bg-primary/20 group-hover:border-primary/40 relative overflow-hidden text-white group-hover:text-primary">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-12 group-hover:scale-110" />
                  </div>

                </div>
              </div>

              {/* Inner Border Hover Highlight */}
              <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/10 transition-colors duration-300 ease-out pointer-events-none z-30"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
