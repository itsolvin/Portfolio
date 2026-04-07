import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Globe, Monitor, Send, Link } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 px-8 lg:px-16 max-w-[1400px] mx-auto z-10 relative">
       <div className="glass rounded-[2.5rem] p-8 md:p-16 border-white/5 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-16 md:gap-8">
         {/* Abstract background shapes */}
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="flex-1 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
               Let's Work <br/><span className="text-gradient drop-shadow-sm">Together.</span>
             </h2>
             <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-md leading-relaxed">
               Have an idea or a project in mind? Let's discuss it and make it a reality. I'm currently available for freelance work.
             </p>
             
             <a href="mailto:hello@example.com" className="inline-flex items-center gap-4 text-2xl font-medium hover:text-primary transition-colors group">
               <Mail className="w-8 h-8 group-hover:scale-110 transition-transform text-primary" />
               <span className="relative">
                 hello@example.com
                 <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
               </span>
             </a>

             <div className="mt-16 flex items-center gap-6">
               {[Globe, Monitor, Send, Link].map((Icon, i) => (
                 <a key={i} href="#" className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-[0_0_0_rgba(124,255,79,0)] hover:shadow-[0_0_15px_rgba(124,255,79,0.3)]">
                   <Icon className="w-6 h-6" />
                 </a>
               ))}
             </div>
           </motion.div>
         </div>

         <div className="flex-[0.8] relative z-10">
           <motion.form 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-6"
           >
             <div className="flex flex-col gap-2">
               <label htmlFor="name" className="text-sm font-medium text-gray-300 uppercase tracking-widest px-2">Name</label>
               <input type="text" id="name" className="w-full bg-bg-dark/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-bg-dark transition-all placeholder:text-gray-600 focus:shadow-[0_0_15px_rgba(124,255,79,0.1)]" placeholder="John Doe" required />
             </div>
             
             <div className="flex flex-col gap-2">
               <label htmlFor="email" className="text-sm font-medium text-gray-300 uppercase tracking-widest px-2">Email</label>
               <input type="email" id="email" className="w-full bg-bg-dark/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-bg-dark transition-all placeholder:text-gray-600 focus:shadow-[0_0_15px_rgba(124,255,79,0.1)]" placeholder="john@example.com" required />
             </div>

             <div className="flex flex-col gap-2">
               <label htmlFor="message" className="text-sm font-medium text-gray-300 uppercase tracking-widest px-2">Message</label>
               <textarea id="message" rows="4" className="w-full bg-bg-dark/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-bg-dark transition-all placeholder:text-gray-600 resize-none focus:shadow-[0_0_15px_rgba(124,255,79,0.1)]" placeholder="Tell me about your project..." required></textarea>
             </div>

             <button type="submit" className="mt-4 w-full py-4 bg-primary text-bg-dark font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(124,255,79,0.2)]">
               Send Message
               <ArrowRight className="w-5 h-5" />
             </button>
           </motion.form>
         </div>
       </div>

       {/* Footer */}
       <div className="mt-32 text-center text-gray-500 text-sm font-medium">
         <p>© {new Date().getFullYear()} Arbin Paudel. Designed with perfection.</p>
       </div>
    </section>
  );
};

export default Contact;
