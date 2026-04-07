import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const ExtrudedIcon = ({ src, alt }) => {
  return (
    // Flattened isolating compositor layer explicitly prevents Chromium 3D depth-sorting glitches
    <div className="relative w-12 h-12 group cursor-pointer hover:scale-[1.15] transition-transform duration-300">

      {/* The Dark Physical Extruded Body (Layers 11 to 1) */}
      {Array.from({ length: 11 }).reverse().map((_, revIdx) => {
        const i = 11 - revIdx;
        return (
          <img
            key={i}
            src={src}
            alt=""
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
        alt=""
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
  return (
    <section id="home" className="w-full min-h-screen relative flex items-center justify-center px-6 lg:px-16 max-w-[1400px] mx-auto pt-24 lg:pt-0">

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 z-10">

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
          <h1 className="text-[4rem] sm:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] tracking-tighter font-extrabold mb-6">
            Arbin <br />
            <span className="text-gradient drop-shadow-2xl">Paudel.</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-[480px] mb-8 leading-relaxed font-light">
            A passionate UI/UX Designer specialized in advanced variable-based design systems. I craft scalable interfaces that feel <strong className="text-zinc-200 font-medium">effortlessly human</strong> and deeply premium.
          </p>

          {/* Buttons Layout */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="group relative px-7 py-3.5 bg-gradient-to-r from-primary to-accent text-bg-dark font-bold rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-[0_0_30px_rgba(124,255,79,0.15)] hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]">
              <span className="relative z-10 text-sm tracking-wide">Hire Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="group px-7 py-3.5 bg-white/[0.03] border border-white/10 text-zinc-300 font-medium rounded-full hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 glass hover:text-white backdrop-blur-xl">
              <span className="text-sm tracking-wide">View Resume</span>
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-1 opacity-70 group-hover:opacity-100" />
            </button>
          </div>

          {/* Stats Area */}
          <div className="mt-12 flex items-center gap-10 pt-8 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-1"
            >
              <h3 className="text-4xl text-zinc-100 font-bold tracking-tight">150<span className="text-primary">+</span></h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Projects</p>
            </motion.div>

            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col gap-1"
            >
              <h3 className="text-4xl text-zinc-100 font-bold tracking-tight">99<span className="text-accent">%</span></h3>
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Satisfaction</p>
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

              <img src="/New 2.svg" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 -ml-1 xl:-ml-2 translate-y-[60px] xl:translate-y-[80px] w-[360px] xl:w-[480px] h-[440px] xl:h-[580px] max-w-none object-contain object-bottom pointer-events-none opacity-100 brightness-[0.85] contrast-[1.15] saturate-[0.85]" />

              {/* Ambient Occlusion Shadow (Blends the waist smoothly into the dark void) */}
              <div className="absolute inset-x-0 bottom-0 h-[100px] xl:h-[140px] bg-gradient-to-t from-black/80 via-black/30 to-transparent z-40 pointer-events-none"></div>
            </div>

            {/* Character Top Layer: The head stretching out infinitely without top bounds. */}
            <div className="absolute w-[280px] h-[280px] xl:w-[360px] xl:h-[360px] pointer-events-none" style={{ transform: 'translateZ(2px)' }}>
              {/* Polygon explicitly covers from -100% (way above the head) down to 60% of the image body, protecting the face entirely while chopping off the legs so they don't leak out */}
              <img src="/New 2.svg" alt="Designer Cutout" className="absolute bottom-0 left-1/2 -translate-x-1/2 -ml-1 xl:-ml-2 translate-y-[60px] xl:translate-y-[80px] w-[360px] xl:w-[480px] h-[440px] xl:h-[580px] max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] drop-shadow-[0_0_30px_rgba(124,255,79,0.15)] pointer-events-none opacity-100 brightness-[0.85] contrast-[1.15] saturate-[0.85]" style={{ clipPath: "polygon(-100% -100%, 200% -100%, 200% 64%, -100% 64%)" }} />
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
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', alt: 'Slack', angle: 0, rad: 90, radXl: 150 },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg', alt: 'Lightroom', angle: 60, rad: 90, radXl: 150 },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', alt: 'Photoshop', angle: 120, rad: 90, radXl: 150 },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', alt: 'Illustrator', angle: 180, rad: 90, radXl: 150 },
                    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma', angle: 240, rad: 90, radXl: 150 },
                    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg', alt: 'Notion', angle: 300, rad: 90, radXl: 150 }
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
                                <ExtrudedIcon src={item.src} alt={item.alt} />
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
  );
};

export default Hero;
