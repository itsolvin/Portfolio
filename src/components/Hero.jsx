import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const AnimatedCounter = ({ endValue, duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let requestRef;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));
      if (progress < 1) {
        requestRef = window.requestAnimationFrame(step);
      }
    };
    requestRef = window.requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef);
  }, [endValue, duration]);

  return <span>{count}</span>;
};

const ExtrudedIcon = ({ src, alt, glow }) => {
  return (
    // Flattened isolating compositor layer explicitly prevents Chromium 3D depth-sorting glitches
    <div className="relative w-12 h-12 group cursor-pointer hover:scale-[1.15] transition-transform duration-300">

      {/* Explosive Custom Brand-Specific Backwards Bloom Light */}
      <div 
        className="absolute inset-0 rounded-full blur-[14px] xl:blur-[20px] opacity-80 mix-blend-screen pointer-events-none"
        style={{
          background: glow || 'transparent',
          transform: 'translateZ(-4px) scale(1.4)'
        }}
      />

      {/* The Dark Physical Extruded Body (Layers 11 to 1) */}
      {Array.from({ length: 11 }).reverse().map((_, revIdx) => {
        const i = 11 - revIdx;
        return (
          <img
            key={i}
            src={src}
            alt={`${alt} Icon for ${alt} software used by UI UX Designer Arbin Paudel`}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            style={{
              transform: `translateZ(${-i * 1.5}px)`,
              filter: "brightness(0.25) saturate(0.5)",
            }}
          />
        );
      })}

      {/* The 'Glassy' Geometric Glow: sits behind the front face to create a soft, native-colored neon backlight */}
      <img
        src={src}
        alt={`${alt} Logo (glow effect)`}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          transform: `translateZ(-2px) scale(1.1)`,
          filter: "blur(5px) saturate(2) brightness(1.2)",
          opacity: 0.5
        }}
      />

      {/* The Front Face: 100% Solid Opacity, Sharp, Unaltered Vibrance! */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          transform: `translateZ(0px)`,
          // Sharp glossy white specular top-rim highlight
          filter: "drop-shadow(0 -1px 0.5px rgba(255,255,255,0.7)) brightness(1.05)",
        }}
      />
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  // const glowRef = useRef(null);

  /*
  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let requestRef;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);
  */

  return (
    <>
      {/* MOUSE FOLLOW GLOW (GLOBAL ROOT FIX)
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(124, 255, 79, 0.12) 0%, transparent 70%)',
          willChange: 'transform'
        }}
      ></div>
      */}

      <section ref={heroRef} id="home" className="w-full min-h-screen relative flex items-center justify-center px-6 lg:px-16 max-w-[1400px] mx-auto pt-24 lg:pt-0 overflow-hidden">

      {/* 1 & 2. LEFT SIDE SUBTLE LIGHTING */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 25% 50%, rgba(124, 255, 79, 0.05), transparent 45%)' }}
      ></div>

      {/* 3. DARK OVERLAY BEHIND TEXT */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none z-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5), transparent)' }}
      ></div>

      {/* 4. CINEMATIC RADIAL FALLOFF */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none z-10"
        style={{ background: 'radial-gradient(circle at 70% 50%, transparent 40%, rgba(5,5,5,0.7) 100%)' }}
      ></div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-20 relative">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex flex-col items-start w-full z-20"
        >
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-2 border border-primary/20 rounded-full text-xs font-medium text-primary bg-primary/5 mb-8 glass inline-block backdrop-blur-md"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
              Available for immediate projects
            </span>
          </motion.div>

          {/* Typography Overhaul */}
          <p className="text-lg md:text-xl text-zinc-500 font-medium tracking-wide mb-2 uppercase">Hi, I'm</p>
          <h1 className="text-[4rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] tracking-tighter font-extrabold mb-6 text-white relative z-20">
            Arbin <br />
            <span className="text-[#7CFF4F] tracking-tight">Paudel.</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-[480px] mb-8 leading-relaxed font-light">
            A passionate UI/UX Designer specialized in advanced variable-based design systems. I craft scalable interfaces that feel <strong className="text-zinc-200 font-medium">effortlessly human</strong> and deeply premium.
          </p>

          {/* Subtle Grounding Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7CFF4F] to-transparent opacity-30 mb-8 max-w-[480px]"></div>

          {/* Buttons Layout */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="group relative px-8 py-[14px] text-[#0A1A05] font-semibold text-[15px] tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:brightness-105 active:scale-[0.98] cursor-pointer flex items-center gap-2 shadow-[0_4px_20px_rgba(124,255,79,0.2),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_10px_30px_rgba(124,255,79,0.4),inset_0_1px_0_rgba(255,255,255,0.5)] bg-gradient-to-b from-[#94ff70] to-[#7CFF4F]">
              <span className="relative z-10">Hire Me</span>
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 text-[#0A1A05]" />
            </button>

            <button className="group px-8 py-[14px] bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium text-[15px] tracking-wide rounded-full hover:bg-white/[0.08] hover:border-[#7CFF4F]/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] cursor-pointer flex items-center gap-2 backdrop-blur-[10px] hover:text-white">
              <span className="relative z-10">View Resume</span>
              <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1 opacity-70 group-hover:opacity-100" />
            </button>
          </div>


          {/* Stats Area */}
          <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6 pt-4 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-1 p-5 rounded-[12px] bg-white/[0.03] border border-white/[0.06] hover:-translate-y-[2px] transition-all duration-300 hover:border-[#7CFF4F]/20 hover:shadow-[0_0_15px_rgba(124,255,79,0.15)] min-w-[140px]"
            >
              <h3 className="text-4xl lg:text-5xl text-zinc-100 font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(124,255,79,0.2)]">
                <AnimatedCounter endValue={150} />
                <span className="text-[#7CFF4F]">+</span>
              </h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Projects</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-1 p-5 rounded-[12px] bg-white/[0.03] border border-white/[0.06] hover:-translate-y-[2px] transition-all duration-300 hover:border-[#7CFF4F]/20 hover:shadow-[0_0_15px_rgba(124,255,79,0.15)] min-w-[140px]"
            >
              <h3 className="text-4xl lg:text-5xl text-zinc-100 font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(124,255,79,0.2)]">
                <AnimatedCounter endValue={99} />
                <span className="text-[#42f5c8]">%</span>
              </h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right 3D Visual Payload */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative flex justify-center items-center h-[500px] lg:h-[700px] w-full mt-12 lg:mt-0 perspective-1000 preserve-3d"
        >
          <div className="absolute inset-0 flex justify-center items-center preserve-3d scale-105">
            {/* Pushed Deep Background Frame Layer to prevent bounding intersection with the orbital halo */}
            <div className="absolute inset-0 flex justify-center items-center preserve-3d" style={{ transform: "translateZ(-300px) scale(1.3)" }}>
              {/* Background Halo Systems */}
              <div className="absolute w-[90%] h-[90%] bg-primary/5 blur-[100px] rounded-full" />
              <div className="absolute w-[60%] h-[60%] bg-accent/5 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4" />

              {/* Structural Dotted Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] xl:w-[480px] xl:h-[480px] rounded-full border border-primary/20 border-dashed opacity-40 mix-blend-screen"
              />
              {/* Base Layer: Structural Solid Frame Block */}
              <div className="absolute w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] rounded-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Character Base Layer */}
            <div className="absolute w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] rounded-full overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
              {/* Cinematic Studio Backlight (Rim lighting behind the character) */}
              <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[200px] xl:w-[260px] h-[300px] xl:h-[400px] bg-primary/30 blur-[70px] rounded-[100%] pointer-events-none"></div>

              <img src="/New 2.svg" alt="Arbin Paudel - Leading Product Designer and UI UX Designer in Nepal" className="absolute bottom-0 left-1/2 -translate-x-1/2 -ml-1 xl:-ml-2 translate-y-[60px] xl:translate-y-[80px] w-[360px] xl:w-[480px] h-[440px] xl:h-[580px] max-w-none object-contain object-bottom pointer-events-none opacity-100 brightness-[0.85] contrast-[1.15] saturate-[0.85]" />

              {/* Ambient Occlusion Shadow (Blends the waist smoothly into the dark void) */}
              <div className="absolute inset-x-0 bottom-0 h-[100px] xl:h-[140px] bg-gradient-to-t from-black/80 via-black/30 to-transparent z-40 pointer-events-none"></div>
            </div>

            {/* Character Top Layer: The head stretching out infinitely without top bounds. */}
            <div className="absolute w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] pointer-events-none" style={{ transform: 'translateZ(2px)' }}>
              {/* Polygon explicitly covers from -100% (way above the head) down to 60% of the image body, protecting the face entirely while chopping off the legs so they don't leak out */}
              <img src="/New 2.svg" alt="Arbin Paudel - UI UX Designer Nepal (Portrait)" className="absolute bottom-0 left-1/2 -translate-x-1/2 -ml-1 xl:-ml-2 translate-y-[60px] xl:translate-y-[80px] w-[360px] xl:w-[480px] h-[440px] xl:h-[580px] max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] drop-shadow-[0_0_30px_rgba(124,255,79,0.15)] pointer-events-none opacity-100 brightness-[0.85] contrast-[1.15] saturate-[0.85]" style={{ clipPath: "polygon(-100% -100%, 200% -100%, 200% 64%, -100% 64%)" }} />
            </div>

            {/* Orbital Software Icons */}
            <div className="absolute inset-x-0 top-[10px] xl:top-[10px] flex justify-center pointer-events-none preserve-3d z-30">
              {/* True 3D Ring - Tilted forward exactly as requested (Top section comes to front, Bottom section goes back) */ }
              <div 
                 className="relative w-[200px] h-[200px] xl:w-[320px] xl:h-[320px] rounded-full preserve-3d"
                 style={{ transform: "rotateX(-76deg) rotateY(8deg)" }}
              >
                {/* 3D Dashed Trail */}
                <div className="absolute inset-0 rounded-full border border-white/20 border-dashed opacity-40 mx-[10px] my-[10px]" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(124,255,79,0.1)] opacity-30" />

                <div className="absolute inset-0 animate-spin-3d preserve-3d">
                  {[
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', alt: 'Slack', angle: 0, rad: 90, radXl: 150, glow: 'rgba(224, 30, 90, 0.6)' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg', alt: 'Lightroom', angle: 60, rad: 90, radXl: 150, glow: 'rgba(49, 168, 255, 0.6)' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', alt: 'Photoshop', angle: 120, rad: 90, radXl: 150, glow: 'rgba(49, 168, 255, 0.6)' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', alt: 'Illustrator', angle: 180, rad: 90, radXl: 150, glow: 'rgba(255, 154, 0, 0.6)' },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma', angle: 240, rad: 90, radXl: 150, glow: 'rgba(162, 89, 255, 0.6)' },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg', alt: 'Notion', angle: 300, rad: 90, radXl: 150, glow: 'rgba(255, 255, 255, 0.4)' }
                  ].map((item, index) => {
                    return (
                      /* L3: Static Angular Placement along Radius track */
                      <div
                        key={index}
                        className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-auto preserve-3d orbit-radius-var"
                        style={{ 
                           '--angle': `${item.angle}deg`,
                           '--rad': `${item.rad}px`,
                           '--rad-xl': `${item.radXl}px`
                        }}
                      >
                         {/* L4: Perfect Inverse Sweep Spin explicitly rotating exactly at the 0x0 anchor point */}
                         <div
                            className="absolute inset-0 w-0 h-0 preserve-3d animate-spin-3d"
                            style={{ animationDirection: "reverse" }}
                         >
                            {/* L5: Native Unwind exactly at the 0x0 anchor point */}
                            <div className="absolute inset-0 w-0 h-0 preserve-3d" style={{ transform: `rotateZ(-${item.angle}deg) rotateY(-8deg) rotateX(76deg)` }}>
                              {/* The Icon physically centered squarely upon the origin */}
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 xl:w-14 xl:h-14">
                                <ExtrudedIcon src={item.src} alt={item.alt} glow={item.glow} />
                              </div>
                            </div>
                         </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
    </>
  );
};

export default Hero;
