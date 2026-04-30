import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';

const CATEGORIES = ['All', 'Web Apps', 'Mobile', 'Dashboards', 'AI / Experiments'];

const PROJECTS = [
  { 
    id: 1, 
    title: 'Fintech Dashboard', 
    category: 'Dashboards', 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    description: 'A comprehensive financial analytics dashboard for enterprise clients.',
    tools: ['React', 'Framer Motion', 'Tailwind'],
    metric: '+45% User Retention'
  },
  { 
    id: 2, 
    title: 'E-Commerce App', 
    category: 'Mobile', 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800', 
    description: 'A modern, high-conversion mobile shopping experience focusing on minimal friction.',
    tools: ['React Native', 'Shopify', 'Redux'],
    metric: '2.4x Conversion Rate'
  },
  { 
    id: 3, 
    title: 'SaaS Platform', 
    category: 'Web Apps', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', 
    description: 'High-performing platform with interactive 3D elements and robust analytics.',
    tools: ['Next.js', 'Three.js', 'Vercel'],
    metric: '10M+ Events Processed'
  },
  { 
    id: 4, 
    title: 'Health Tracking', 
    category: 'Mobile', 
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800', 
    description: 'Wellness app focusing on personalized habit tracking and predictive health modeling.',
    tools: ['SwiftUI', 'HealthKit', 'CoreData'],
    metric: '4.9 App Store Rating'
  },
  { 
    id: 5, 
    title: 'AI Copywriter', 
    category: 'AI / Experiments', 
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800', 
    description: 'Minimalist interface for a powerful AI content generation tool.',
    tools: ['OpenAI API', 'React', 'Node.js'],
    metric: '1M+ Words Generated'
  },
  { 
    id: 6, 
    title: 'Crypto Exchange', 
    category: 'Dashboards', 
    image: 'https://images.unsplash.com/photo-1621501103254-44b46c827725?auto=format&fit=crop&q=80&w=800', 
    description: 'Real-time cryptocurrency trading platform with advanced charting capabilities.',
    tools: ['Vue.js', 'WebSockets', 'D3.js'],
    metric: '<50ms Latency'
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="w-full py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      
      {/* 1. Section Header */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Selected <span className="text-gradient animate-pulse">Works</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl font-light text-lg md:text-xl leading-relaxed"
        >
          A curated selection of projects showcasing research, UX thinking, prototyping, and shipped products.
        </motion.p>
        
        {/* Subtle Divider Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "anticipate" }}
          className="h-px w-full max-w-md bg-gradient-to-r from-primary/50 via-primary/10 to-transparent mt-8 origin-left"
        />
      </div>
      
      {/* 2. Filter Bar */}
      <div className="relative z-20 mb-12 flex justify-center md:justify-start pointer-events-none pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pointer-events-auto flex items-center p-1.5 rounded-full glass bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl max-w-full"
        >
          {/* Search container (fixed in flow) */}
          <div className="hidden md:flex items-center pl-3 pr-4 border-r border-white/10 mr-1 shrink-0 text-gray-400 z-20">
            <Search className="w-4 h-4" />
            <input 
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 ml-2 w-20 focus:w-32 transition-all duration-300 pointer-events-auto"
            />
          </div>
          
          {/* Categories scrollable container */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-1 px-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`snap-center whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  filter === cat ? 'text-[#050505]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_rgba(124,255,79,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
                
                {filter !== cat && (
                  <span className="absolute bottom-1.5 left-1/2 w-0 h-px bg-white/30 transform -translate-x-1/2 group-hover:w-1/2 transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. Project Grid (Masonry Style via CSS Columns) */}
      <motion.div 
        layout 
        className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ 
                layout: { type: "spring", stiffness: 350, damping: 30 },
                opacity: { duration: 0.3 },
                y: { type: "spring", stiffness: 400, damping: 25, delay: index * 0.05 }
              }}
              className={`break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/[0.05] cursor-pointer shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 tap-highlight-transparent ${index === 0 ? 'aspect-[4/5]' : 'aspect-square md:aspect-[3/4]'}`}
            >
              {/* Image & Loading State */}
              <div className="absolute inset-0 bg-[#111] animate-pulse"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] cubic-bezier(0.25, 1, 0.5, 1) scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100 z-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90 z-10" />

              {/* Category Pill (Top Left) */}
              <div className="absolute top-6 left-6 z-20">
                <div className="glass px-3 py-1 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--color-primary)]"></div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Block (Bottom) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <div className="w-full">
                  
                  <div className="flex justify-between items-end mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-none tracking-tight">
                      {project.title}
                    </h3>
                    
                    {/* View CTA (Always Visible) */}
                    <div className="flex items-center text-primary text-sm font-medium pr-1 group-hover:translate-x-1 transition-transform">
                      View <ArrowUpRight className="w-4 h-4 ml-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Metadata (Always Visible) */}
                  <div>
                    <p className="text-zinc-300 text-sm font-light leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.tools.slice(0,2).map(tool => (
                          <span key={tool} className="text-[11px] text-zinc-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 2 && (
                          <span className="text-[11px] text-zinc-500">+{project.tools.length - 2}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-white/70 tracking-wide uppercase px-2 py-0.5 bg-white/10 rounded-sm">
                        {project.metric}
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Glowing Inner Border on Hover */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 pointer-events-none z-30 pointer-events-none" />
              
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};

export default Portfolio;

