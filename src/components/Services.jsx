import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const processes = [
    {
      step: '01',
      title: 'Define',
      description: 'We start by understanding your vision, goals, and requirements. Deep research and strategic planning lay the foundation.',
      position: 'right',
      rotation: 2,
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating stunning visual designs that align with your brand. Wireframes, prototypes, and UI/UX excellence.',
      position: 'left',
      rotation: -2,
    },
    {
      step: '03',
      title: 'Build',
      description: 'Turning designs into reality with clean, scalable code. Using modern technologies for optimal performance.',
      position: 'right',
      rotation: 2,
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Deploying your product with precision. Testing, optimization, and ongoing support for success.',
      position: 'left',
      rotation: -2,
    },
  ];

  useEffect(() => {
    if (isInView) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const sectionHeight = sectionRef.current?.offsetHeight || 0;
        const progress = (scrollPosition - sectionTop + window.innerHeight / 2) / sectionHeight;
        
        const cardIndex = Math.min(Math.floor(progress * processes.length), processes.length - 1);
        if (cardIndex >= 0) {
          setActiveCard(cardIndex);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isInView, processes.length]);

  return (
    <section id="skills" ref={sectionRef} className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white border-2 border-black rounded-full text-sm font-semibold tracking-wider mb-6 shadow-lg"
          >
            HOW WE WORK
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 max-w-4xl mx-auto leading-tight">
            Let us show you how we drive your brand to new heights
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven process ensures every project is delivered with excellence, 
            from initial concept to final launch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Curved Dashed Line */}
          <svg className="absolute left-1/2 -translate-x-1/2 w-full h-[800px] md:h-[1000px] pointer-events-none">
            <motion.path
              d="M 400 0 Q 400 200 200 250 Q 0 300 200 500 Q 400 700 200 800 Q 0 900 200 1000"
              stroke="black"
              strokeWidth="3"
              strokeDasharray="10 10"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>

          {/* Process Cards */}
          <div className="space-y-32 md:space-y-48">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: process.position === 'right' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex ${process.position === 'right' ? 'justify-end' : 'justify-start'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`
                    relative w-80 md:w-96 p-8 rounded-[2rem] shadow-xl
                    transition-all duration-500
                    ${activeCard === index 
                      ? 'bg-[#FF2A2A] text-white shadow-[0_20px_60px_rgba(255,42,42,0.4)]' 
                      : 'bg-white text-black border-2 border-gray-200'
                    }
                  `}
                  style={{ transform: `rotate(${process.rotation}deg)` }}
                >
                  {/* Hole Punch */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-200 rounded-full" />
                  
                  {/* Step Number */}
                  <span className={`text-5xl md:text-6xl font-serif italic ${activeCard === index ? 'text-white/60' : 'text-gray-300'}`}>
                    {process.step}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-3">
                    {process.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-base leading-relaxed ${activeCard === index ? 'text-white/80' : 'text-gray-600'}`}>
                    {process.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-gray-400 rotate-2 inline-block">
            Ready to be delivered!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
