import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowRight, Globe, Monitor, Send, Link, Layout } from 'lucide-react';

const CONTACT_EMAIL = "olvinsp80@gmail.com";
const CONTACT_PHONE = "+977 9861333577";
const EMAILJS_SERVICE_ID = "service_rlipi5l";
const EMAILJS_TEMPLATE_ID = "template_qoil4in";
const EMAILJS_PUBLIC_KEY = "RUrWDyKmPON6lucly";

const SOCIAL_LINKS = [
  { Icon: Monitor, label: 'LinkedIn', href: '#' },
  { Icon: Send, label: 'Twitter', href: '#' },
  { Icon: Link, label: 'GitHub', href: '#' },
  { Icon: Globe, label: 'Website', href: '#' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: `New Inquiry from ${formData.name}`,
            message: formData.message,
            to_email: CONTACT_EMAIL
          }
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 px-6 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
      {/* Centered ambient glow behind the entire section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

       <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-20 border border-white/[0.04] bg-[#0A0A0A]/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col lg:flex-row gap-16 lg:gap-24 backdrop-blur-2xl">
         
         {/* Subtle inner border to enhance glass edge */}
         <div className="absolute inset-0 border border-white/[0.02] rounded-[2rem] md:rounded-[3rem] pointer-events-none"></div>
         <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent pointer-events-none"></div>

         <div className="flex-1 relative z-10 flex flex-col justify-between">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
           >
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-[-0.02em] leading-[1.05]">
               Let's build <br/><span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-[#5cd637] drop-shadow-[0_0_30px_rgba(124,255,79,0.3)]">something great.</span>
             </h2>
             <p className="text-[#A1A1AA] text-lg font-light mb-12 max-w-[400px] leading-[1.8]">
               I'm currently open for freelance work and collaborations. Reach out to discuss your next project—I'm always excited to explore new challenges.
             </p>
             
             <div className="space-y-5 flex flex-col">
               <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">Reach me directly</p>
               
               <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-5 text-xl font-medium text-white/90 hover:text-white transition-colors group w-fit">
                 <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(124,255,79,0.15)] shrink-0">
                   <Mail className="w-5 h-5 text-gray-400 group-hover:text-primary transition-all duration-300" />
                 </div>
                 <span className="relative">
                   {CONTACT_EMAIL}
                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full opacity-60"></span>
                 </span>
               </a>

               <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="inline-flex items-center gap-5 text-xl font-medium text-white/90 hover:text-white transition-colors group w-fit">
                 <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(124,255,79,0.15)] shrink-0">
                   <Phone className="w-5 h-5 text-gray-400 group-hover:text-primary transition-all duration-300" />
                 </div>
                 <span className="relative">
                   {CONTACT_PHONE}
                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full opacity-60"></span>
                 </span>
               </a>
             </div>

             <div className="mt-16 pt-10 border-t border-white/[0.04] flex items-center gap-4 w-full flex-wrap">
               {SOCIAL_LINKS.map(({ Icon, label, href }, i) => (
                 <a 
                   key={i} 
                   href={href} 
                   aria-label={label}
                   title={label}
                   className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.2] hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-2 focus:ring-primary/50"
                 >
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
           </motion.div>
         </div>

         <div className="flex-[1.1] relative z-10 w-full mt-8 lg:mt-0">
           <motion.form 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
             onSubmit={handleSubmit}
             className="flex flex-col gap-7 w-full"
           >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
               <div className="flex flex-col gap-2.5 relative">
                 <label htmlFor="name" className="text-[13px] font-medium text-gray-400 tracking-wide ml-1 cursor-pointer">Name</label>
                 <input 
                   type="text" 
                   id="name" 
                   value={formData.name}
                   onChange={handleInputChange}
                   className={`w-full bg-[#050505]/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.05] focus:border-primary/50 hover:border-white/[0.1]'} rounded-2xl px-5 py-4 outline-none focus:bg-[#050505]/60 transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_15px_rgba(124,255,79,0.05)] text-white font-light`} 
                   placeholder="John Doe" 
                 />
                 <AnimatePresence>
                   {errors.name && (
                     <motion.span 
                       initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                       className="text-red-400 text-xs font-medium px-2 absolute -bottom-5 flex items-center gap-1.5"
                     >
                       {errors.name}
                     </motion.span>
                   )}
                 </AnimatePresence>
               </div>
               
               <div className="flex flex-col gap-2.5 relative">
                 <label htmlFor="email" className="text-[13px] font-medium text-gray-400 tracking-wide ml-1 cursor-pointer">Email</label>
                 <input 
                   type="email" 
                   id="email" 
                   value={formData.email}
                   onChange={handleInputChange}
                   className={`w-full bg-[#050505]/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.05] focus:border-primary/50 hover:border-white/[0.1]'} rounded-2xl px-5 py-4 outline-none focus:bg-[#050505]/60 transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_15px_rgba(124,255,79,0.05)] text-white font-light`} 
                   placeholder="john@example.com" 
                 />
                 <AnimatePresence>
                   {errors.email && (
                     <motion.span 
                       initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                       className="text-red-400 text-xs font-medium px-2 absolute -bottom-5 flex items-center gap-1.5"
                     >
                       {errors.email}
                     </motion.span>
                   )}
                 </AnimatePresence>
               </div>
             </div>

             <div className="flex flex-col gap-2.5 relative">
               <label htmlFor="message" className="text-[13px] font-medium text-gray-400 tracking-wide ml-1 cursor-pointer">Message</label>
               <textarea 
                 id="message" 
                 rows="5" 
                 value={formData.message}
                 onChange={handleInputChange}
                 className={`w-full bg-[#050505]/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.05] focus:border-primary/50 hover:border-white/[0.1]'} rounded-2xl px-5 py-4 outline-none focus:bg-[#050505]/60 transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_15px_rgba(124,255,79,0.05)] resize-none text-white font-light`} 
                 placeholder="Tell me about your project, timeline, and goals..."
               ></textarea>
               <AnimatePresence>
                 {errors.message && (
                   <motion.span 
                     initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                     className="text-red-400 text-xs font-medium px-2 absolute -bottom-5 flex items-center gap-1.5"
                   >
                     {errors.message}
                   </motion.span>
                 )}
               </AnimatePresence>
             </div>

             <div className="pt-4">
               <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'success'}
                  className={`group relative w-full overflow-hidden rounded-2xl py-4.5 font-semibold text-[15px] tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] ${
                    status === 'success' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]' : 
                    status === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 
                    'bg-primary text-[#050505] hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(124,255,79,0.2)] hover:shadow-[0_0_30px_rgba(124,255,79,0.3)]'
                  }`}
                >
                 {status === 'idle' && (
                   <>
                     <span>Send Message</span>
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                   </>
                 )}
                 {status === 'sending' && (
                   <>
                     <span>Sending...</span>
                   </>
                 )}
                 {status === 'success' && (
                   <>
                     <span>Message Sent Successfully</span>
                   </>
                 )}
                 {status === 'error' && (
                   <>
                     <span>Failed to Send. Try Again.</span>
                   </>
                 )}
               </button>
               
               {/* Trust signal & microcopy */}
               <p className="text-center text-[13px] text-gray-500 font-medium mt-5 flex items-center justify-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse"></span>
                 Usually responds within 24 hours
               </p>
             </div>
           </motion.form>
         </div>
       </div>

       {/* Footer / Copyright overlay */}
       <div className="mt-24 md:mt-32 border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-gray-500 text-sm font-medium">
           © {new Date().getFullYear()} Arbin Paudel. All rights reserved.
         </p>
         <p className="text-gray-600 text-[13px] font-medium tracking-wide">
           Designed with precision
         </p>
       </div>
    </section>
  );
};

export default Contact;
