import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Hanu Green Energy Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Nov 2025 - Apr 2026',
      achievements: [
        'Developed a real-time energy tracking dashboard using React and Node.js to monitor production across 500+ solar panels',
        'Integrated AWS CloudWatch for automated system failure alerts, reducing maintenance downtime by 20%',
        'Applied AI/ML models to historical weather data to predict energy yield, improving grid management and operational efficiency'
      ]
    },
    {
      company: 'TechSolution',
      role: 'AI/ML Engineer',
      period: '2023 - 2025',
      achievements: [
        'Developed real-time fraud detection algorithms, resulting in a 15% reduction in fraudulent transactions',
        'Collaborated with cross-functional teams to enhance fraud detection analysis speed by 30% through database optimization',
        'Implemented RESTful APIs for seamless integration with other services across the product ecosystem'
      ]
    },
    {
      company: 'Single Tap Assistance Pvt. Ltd',
      role: 'Full Stack Developer Intern',
      period: '2022 - 2023',
      achievements: [
        'Developed a full-stack e-commerce application using React, Node.js, and MongoDB/Postgres',
        'Implemented user authentication and authorization features including registration, login, and secure session management',
        'Designed and optimized RESTful APIs and database queries for smooth, responsive user experience handling concurrent requests'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-transparent">
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
            className="inline-block px-4 py-2 bg-[#FF2A2A] text-white rounded-full text-sm font-semibold tracking-wider mb-6"
          >
            EXPERIENCE
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Professional Journey
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A track record of delivering impactful solutions across AI/ML, full-stack development, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
              )}

              <div className="flex gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#FF2A2A] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Briefcase className="text-white" size={28} />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">{exp.company}</h3>
                      <p className="text-[#FF2A2A] font-semibold text-lg">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-[#FF2A2A] rounded-full mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
