import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Hi, I'm a
              </h1>
              <h2 className="text-5xl md:text-7xl font-black text-stroke leading-tight mt-2">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white/80 text-lg md:text-xl max-w-lg leading-relaxed drop-shadow-lg"
            >
              I specialize in building modern, data-driven web applications using React.js, 
              Node.js, and Tailwind CSS. Focused on performance, scalability, and exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black rounded-full font-semibold text-lg hover:shadow-xl transition-shadow"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-semibold text-lg text-white hover:bg-white/20 transition-all"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Play Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.button
              onClick={toggleVideo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group hover:shadow-[0_0_60px_rgba(255,42,42,0.5)] transition-all duration-300"
            >
              <div className="text-white">
                {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-2" />}
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-widest uppercase">
                {isPlaying ? 'PAUSE' : 'PLAY REEL'}
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="text-white/60" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
