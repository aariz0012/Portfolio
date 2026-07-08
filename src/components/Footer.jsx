import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white min-h-[50vh]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/60">Connect</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:Khanaariz0012@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>Khanaariz0012@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://github.com/aariz0012"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span>github.com/aariz0012</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/aariz-khan01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                <span>linkedin.com/in/aariz-khan01</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>+91 8875195390</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Column - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/60">Experience</h4>
            <p className="text-2xl font-bold">4+ Years of Experience</p>
            <motion.a
              href="#projects"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors underline decoration-white/30 hover:decoration-white"
            >
              View Work <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>

          {/* Right Column - Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-mono uppercase tracking-widest text-white/60">Status</h4>
            <p className="text-xl font-semibold">Available Worldwide</p>
            <p className="text-white/60">{currentYear}</p>
          </motion.div>
        </div>
      </div>

      {/* Giant Branding Text */}
      <div className="py-20 md:py-32 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          whileHover={{ scale: 1.02 }}
          className="text-[12vw] md:text-[10vw] font-black text-[#F4F4F4] leading-none text-center lowercase tracking-tight cursor-default"
        >
          aariz khan
        </motion.h2>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">
              Send Message
            </a>
            <p className="text-white/40 text-xs">
              © {currentYear} Aariz Khan. Built with React.
            </p>
          </motion.div>

          {/* Center - Email */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.a
              href="mailto:Khanaariz0012@gmail.com"
              whileHover={{ y: -2 }}
              className="text-lg md:text-xl text-white hover:text-[#FF2A2A] transition-colors underline decoration-white/20 hover:decoration-[#FF2A2A]"
            >
              Khanaariz0012@gmail.com
            </motion.a>
          </motion.div>

          {/* Right - Privacy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-right"
          >
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
