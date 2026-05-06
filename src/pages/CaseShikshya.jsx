import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink, ArrowLeft, Layout, Mouse, User, Globe, Layers, BookOpen, GraduationCap, LineChart, MessageSquare, PlayCircle, Trophy, UserCheck, Settings, Lock, Unlock, Mail, Compass, ChevronDown, Building, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseShikshya = () => {
  // Always scroll to top when mounting a new page
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shikshya Case Study | Arbin Paudel";
    
    // Add meta description for SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Case study of Shikshya, an e-learning and certification platform focused on learner onboarding, course progression, analytics, engagement, and certification.";
  }, []);

  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="w-full relative z-10 flex flex-col items-center">
      
      {/* =======================
          FLOATING BACK BUTTON
      ======================== */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50"
      >
        <Link 
          to="/"
          className="flex items-center gap-3 px-5 h-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-medium text-sm tracking-wide">Back</span>
        </Link>
      </motion.div>
      
      {/* =======================
          1. HERO SECTION 
      ======================== */}
      <section className="w-full h-screen relative flex flex-col items-center justify-center overflow-hidden pt-16">
        <motion.div 
          style={{ y: heroParallax }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Abstract Learning Background */}
          <div className="absolute inset-0 bg-black">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
              alt="Shikshya dashboard showing learner progress and enrolled courses" 
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110 blur-[2px]"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/90 to-[#050505]"></div>
          </div>
        </motion.div>

        <div className="relative z-10 w-full max-w-[1000px] px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            {['EdTech', 'Learner Journey', 'Live Platform', 'Certification'].map((badge, idx) => (
              <span key={idx} className={`px-4 py-2 text-xs font-semibold rounded-full tracking-wide ${idx === 0 ? 'text-[#0A0A0A] bg-primary' : 'text-zinc-300 bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2'}`}>
                {idx === 2 && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>}
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-2xl"
          >
            Shikshya
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-zinc-400 font-medium mb-12"
          >
            Digital Learning & Certification Platform
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-zinc-300 font-light max-w-3xl leading-relaxed"
          >
            “Designing a guided learning experience that helps users enroll, progress, stay motivated, and complete courses.”
          </motion.p>
        </div>

        {/* Scroll indicator (Matched to BIPAD) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-zinc-500 flex items-center gap-2">
            <Mouse className="w-4 h-4 opacity-70" /> Scroll
          </span>
          <ChevronDown className="w-5 h-5 opacity-70 mt-1" />
        </motion.div>
      </section>

      {/* =======================
          2. CONTEXT STRIP (Matched to BIPAD)
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
        >
          {[
            { label: "Role", value: "UI/UX Designer", icon: <User className="w-5 h-5 text-primary/80" /> },
            { label: "Platform", value: "Web Learning Platform", icon: <Globe className="w-5 h-5 text-primary/80" /> },
            { label: "Scope", value: "Learner Journey", icon: <Layers className="w-5 h-5 text-primary/80" /> },
            { label: "Context", value: "EdTech Platform", icon: <Building className="w-5 h-5 text-primary/80" /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start bg-white/[0.02] border border-white/5 px-6 py-5 rounded-2xl flex-1 min-w-[200px] hover:bg-white/[0.04] transition-colors group">
              <div className="mb-4 p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1.5">{item.label}</span>
              <span className="text-zinc-200 text-sm md:text-base font-medium">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =======================
          3. EXPERIENCE ARCHITECTURE (Moved & Matched to BIPAD)
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-20 lg:py-32 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">Platform Architecture</h3>
          <h4 className="text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            A 4-Layer Learning Ecosystem
          </h4>
        </motion.div>

        <div className="w-full max-w-[900px] flex flex-col gap-6">
          {[
            { 
              title: "Access Layer", 
              tech: "Landing Page, Language Toggle, Signup, Login, Password Reset",
              icon: <Lock className="w-6 h-6 text-primary" />,
              color: "from-primary/20 to-transparent"
            },
            { 
              title: "Learning Layer", 
              tech: "Courses, Modules, Lessons, Videos, Subtitles, Quizzes",
              icon: <BookOpen className="w-6 h-6 text-blue-400" />,
              color: "from-blue-500/20 to-transparent"
            },
            { 
              title: "Progress Layer", 
              tech: "Dashboard, Course Status, Analytics, Streaks, Milestones, Leaderboard",
              icon: <LineChart className="w-6 h-6 text-purple-400" />,
              color: "from-purple-500/20 to-transparent"
            },
            { 
              title: "Support Layer", 
              tech: "Discussions, Learning Capsules, Help & Support, Certificates",
              icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
              color: "from-orange-500/20 to-transparent"
            }
          ].map((layer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative w-full bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 overflow-hidden group hover:border-white/20 transition-all shadow-xl"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${layer.color} opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                {layer.icon}
              </div>
              <div className="relative z-10">
                <h5 className="text-xl font-bold text-white mb-2">{layer.title}</h5>
                <p className="text-zinc-400 font-mono text-sm md:text-base">{layer.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          4. PROBLEM SECTION (Matched to BIPAD Operational Use)
      ======================== */}
      <section className="w-full max-w-[1000px] px-6 md:px-12 py-24 mx-auto text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Guiding the Learning Journey</h3>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Online learning fails when users cannot clearly understand where to start, what to do next, or how far they have progressed. The interface needed to remain <span className="text-white font-medium">structured, motivating, and clear</span> without feeling overwhelming.
          </p>
        </motion.div>
      </section>

      {/* =======================
          5. CORE CHALLENGES
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-20 lg:py-32 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Challenges</h3>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            Building a complete e-learning ecosystem required solving key friction points across the entire user journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: User,
              title: "Clear Onboarding",
              desc: "Learners need a simple path from landing page to account creation, email verification, and login."
            },
            {
              icon: Compass,
              title: "Course Discovery",
              desc: "Users must quickly understand available courses and enroll without confusion."
            },
            {
              icon: Layers,
              title: "Learning Continuity",
              desc: "Modules, lessons, videos, quizzes, and locked/unlocked states need to guide the learner forward."
            },
            {
              icon: Trophy,
              title: "Motivation",
              desc: "Progress, streaks, milestones, leaderboards, and analytics should encourage continued learning."
            },
            {
              icon: GraduationCap,
              title: "Certification",
              desc: "Course completion needs to feel rewarding, credible, and easy to access or share."
            },
            {
              icon: MessageSquare,
              title: "Support & Community",
              desc: "Learners need help/support and discussion spaces to stay connected during the learning journey."
            }
          ].map((challenge, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-[2rem] hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <challenge.icon className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{challenge.title}</h4>
              <p className="text-zinc-400 leading-relaxed font-light">{challenge.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          6. LEARNER JOURNEY FLOW (Fixed mobile overlap)
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-20 lg:py-32 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Learner Journey Flow</h3>
          <p className="text-zinc-400 text-lg max-w-2xl font-light">
            A structured path designed to convert visitors into active, engaged, and certified learners.
          </p>
        </motion.div>

        <div className="w-full max-w-[1000px] mx-auto flex flex-col">
          {[
            { title: "Landing Page", desc: "Language toggle, Login, Join Now", icon: Globe },
            { title: "Account Access", desc: "Signup, email verification, login, password reset", icon: Lock },
            { title: "Profile Setup", desc: "Personal details, qualifications, address, profession, social links, password", icon: User },
            { title: "Course Enrollment", desc: "Course selection, enroll now, enrolled course appears in course section", icon: Compass },
            { title: "Learning Modules", desc: "Course introduction, module outlines, locked/unlocked lessons, video learning, subtitles", icon: BookOpen },
            { title: "Assessment", desc: "Quiz completion, score, module completion", icon: PlayCircle },
            { title: "Progress & Engagement", desc: "Dashboard stats, analytics, average time spent, streaks, milestones, leaderboard", icon: LineChart },
            { title: "Community & Support", desc: "Discussions, learning capsules, help/support", icon: MessageSquare },
            { title: "Certification", desc: "View, download, print, or share certificate", icon: GraduationCap }
          ].map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group w-full flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 md:py-10 border-b border-white/5 hover:bg-white/[0.02] px-6 md:px-10 rounded-3xl transition-all duration-500 cursor-default"
            >
              {/* Massive Premium Numbering */}
              <div className="w-16 md:w-32 shrink-0">
                <span className="text-6xl md:text-8xl font-black text-white/[0.03] group-hover:text-primary/20 transition-colors duration-500 font-mono tracking-tighter">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Status/Icon Badge */}
              <div className="hidden md:flex w-16 h-16 shrink-0 rounded-full bg-white/[0.02] border border-white/10 items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:scale-110 transition-all duration-500">
                <step.icon className="w-6 h-6 text-zinc-500 group-hover:text-primary transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          7. FEATURE SHOWCASE
      ======================== */}
      <section className="w-full max-w-[1200px] px-6 md:px-12 py-20 lg:py-32 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Designing the Platform</h3>
          <p className="text-zinc-400 text-lg max-w-2xl font-light mx-auto">
            Translating complex learning requirements into an intuitive, motivating interface.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {[
            {
              title: "Onboarding & Access",
              desc: "Reduced friction by making account creation, verification, login, and password recovery part of a clear access flow.",
              icon: UserCheck,
              video: "/videos/Shikshya Onboarding.mov"
            },
            {
              title: "Dashboard & Progress",
              desc: "Turned the dashboard into a learner home base with progress, enrolled courses, and real-time learning status.",
              icon: Layout
            },
            {
              title: "Course Enrollment",
              desc: "Designed a clear course selection and enrollment journey so learners can quickly begin the right course.",
              icon: BookOpen
            },
            {
              title: "Module-Based Learning",
              desc: "Structured course content into modules, outlines, lessons, videos, and locked/unlocked states.",
              icon: Layers
            },
            {
              title: "Quiz & Unlocking Logic",
              desc: "Used quizzes and completion states to guide progression and unlock the next module.",
              icon: Unlock
            },
            {
              title: "Analytics & Motivation",
              desc: "Supported motivation through average time spent, streaks, milestones, and leaderboards.",
              icon: LineChart
            },
            {
              title: "Discussion & Support",
              desc: "Added discussion and help pathways so learners are not isolated during the learning process.",
              icon: MessageSquare
            },
            {
              title: "Certification",
              desc: "Made course completion tangible through certificates that users can view, download, print, or share.",
              icon: GraduationCap
            }
          ].map((block, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full bg-[#0d0d0d] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col md:flex-row group"
            >
              <div className={`w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">{block.title}</h4>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">{block.desc}</p>
              </div>
              <div className="w-full md:w-3/5 bg-black/50 min-h-[300px] relative border-t md:border-t-0 md:border-l border-white/5 flex items-center justify-center overflow-hidden">
                {block.video ? (
                  <video 
                    src={block.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : (
                  <>
                    {/* Visual Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent mix-blend-overlay"></div>
                    <div className="text-zinc-600 font-medium tracking-widest uppercase text-sm">UI/UX Mockup Space</div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          8. KEY UX DECISIONS (Matched to BIPAD)
      ======================== */}
      <section className="w-full max-w-[1000px] px-6 md:px-12 py-20 lg:py-32 border-t border-white/5">
        <h3 className="text-center text-3xl font-bold mb-16 text-white">Key UX Decisions</h3>
        <div className="flex flex-col gap-6">
          {[
            "The course flow uses module structure, locked/unlocked states, quizzes, and progress visibility to make the next step obvious.",
            "Login, signup, email verification, and password reset are treated as a complete access journey rather than isolated screens.",
            "Dashboards, course status, analytics, milestones, streaks, and leaderboards make learning progress measurable.",
            "Completion indicators, quiz results, module unlocking, leaderboards, and certificates create reasons to continue.",
            "Profile settings, language toggle, support forms, discussions, and certificates make the platform more complete and learner-friendly."
          ].map((decision, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/[0.02] border-l-2 border-primary py-6 px-8 rounded-r-2xl"
            >
              <p className="text-zinc-300 text-lg font-light">{decision}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =======================
          9. IMPACT SECTION (Matched to BIPAD)
      ======================== */}
      <section className="w-full py-24 lg:py-40 flex justify-center text-center px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1000px] flex flex-col gap-6"
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-12">
            The Outcome
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { title: "Clear Pathway", desc: "Made the learning journey easier to understand from signup to certification." },
              { title: "Guided Progression", desc: "Improved course continuity through module-based progression and unlock logic." },
              { title: "Measurable Growth", desc: "Made learner progress visible through dashboard, analytics, streaks, and milestones." },
              { title: "Active Engagement", desc: "Encouraged engagement through discussions, leaderboards, and learning capsules." }
            ].map((outcome, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="group relative bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-8 md:p-10 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Large Background Number */}
                <div className="absolute -bottom-6 -right-2 text-[140px] font-black text-white/[0.02] group-hover:text-primary/[0.03] transition-colors pointer-events-none leading-none select-none">
                  {idx + 1}
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(124,255,79,0.6)]"></span>
                  {outcome.title}
                </h4>
                <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-[90%] relative z-10">
                  {outcome.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =======================
          10. CTA SECTION (Matched to BIPAD)
      ======================== */}
      <section className="w-full pb-32 pt-16 flex justify-center gap-4 px-6 border-t border-white/[0.05]">
        <a 
          href="https://shikshya.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-[15px] font-medium text-[#0A0A0A] bg-primary hover:bg-primary/90 px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(124,255,79,0.3)]"
        >
          Visit Platform
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <Link 
          to="/"
          className="flex items-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium text-[15px] rounded-full hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
        >
          Back to Home
        </Link>
      </section>

    </div>
  );
};

export default CaseShikshya;
