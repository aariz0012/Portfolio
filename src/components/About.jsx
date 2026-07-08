import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#FF2A2A] py-24 md:py-32 overflow-hidden">
      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-black/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star size={20 + Math.random() * 20} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - ID Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Lanyard */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-2 h-20 bg-black rounded-full" />
              
              {/* Metal Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded shadow-lg" />
              
              {/* ID Card */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="w-72 md:w-80 bg-gray-800 rounded-2xl p-4 shadow-2xl -rotate-3 transition-transform duration-500"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-[#FF2A2A] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AK</span>
                  </div>
                  <div className="text-white/60 text-xs tracking-wider">DEVELOPER</div>
                </div>
                
                {/* Profile Photo */}
                <div className="w-full aspect-square bg-gray-700 rounded-xl mb-4 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Aariz Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Details */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-xl">MOHD AARIZ KHAN</h3>
                  <p className="text-white/60 text-sm">Full Stack Developer</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/80 text-xs">Available for projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-black"
            >
              Hello!
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-lg md:text-xl text-white leading-relaxed"
            >
              <p>
                I'm a passionate <span className="text-black font-bold">FULL STACK DEVELOPER</span> and{' '}
                <span className="text-black font-bold">AI/ML ENGINEER</span> with a love for creating 
                modern, data-driven web applications.
              </p>
              <p className="text-white/80">
                I specialize in turning complex ideas into scalable products using cutting-edge 
                technologies. My expertise spans across frontend and backend development, 
                machine learning integration, and cloud architecture.
              </p>
            </motion.div>

            {/* Technology Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {['React', 'Node.js', 'MongoDB'].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">{tech}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="text-black" size={24} />
                <h4 className="text-black font-bold text-lg">Education</h4>
              </div>
              <div className="bg-black/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-white font-semibold">Galgotias University, Greater Noida</p>
                <p className="text-white/80 text-sm mt-1">B.Tech in Computer Science and Engineering</p>
                <p className="text-white/60 text-xs mt-1">Specialization: Artificial Intelligence and Machine Learning (2020-2024)</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-black" size={24} />
                <h4 className="text-black font-bold text-lg">Certifications</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'AWS Cloud with AI Workshop',
                  'AI/ML Internship',
                  'PowerBI by Udemy',
                  'Python Training by Simplilearn',
                  'DevOps on AWS Fundamentals',
                  'AI Tools Workshop by be10X',
                  'Microsoft Azure Fundamentals'
                ].map((cert, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-black/10 hover:bg-black/30 transition-colors"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Torn Paper Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default About;
