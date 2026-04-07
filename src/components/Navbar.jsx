import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = ['Home', 'About', 'Portfolio', 'Contact'];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = NAV_ITEMS.map(item => document.getElementById(item.toLowerCase()));
      const scrollY = window.scrollY;
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActive(NAV_ITEMS[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-max z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <nav className="glass px-2 py-2 rounded-full flex flex-row items-center gap-1 md:gap-2 relative shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById(item.toLowerCase());
              if(section) {
                  section.scrollIntoView({ behavior: 'smooth' });
              }
              setActive(item);
            }}
            className={`relative px-4 md:px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
              active === item ? 'text-primary' : 'text-zinc-500 hover:text-white'
            }`}
          >
            {active === item && (
              <motion.div
                layoutId="nav-bg"
                className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-full shadow-[inset_0_0_12px_rgba(124,255,79,0.05)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
