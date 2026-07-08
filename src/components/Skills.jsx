import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Brain, Layout } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
      color: 'bg-blue-500'
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Layout size={24} />,
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'ML (Scikit-learn, TensorFlow)'],
      color: 'bg-[#FF2A2A]'
    },
    {
      title: 'Cloud & Platforms',
      icon: <Cloud size={24} />,
      skills: ['AWS', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'DevOps (CI/CD)'],
      color: 'bg-purple-500'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Mongoose'],
      color: 'bg-green-500'
    },
    {
      title: 'AI & Analytics',
      icon: <Brain size={24} />,
      skills: ['LLM Integration', 'PowerBI', 'Tailwind CSS'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-transparent">
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
            className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-semibold tracking-wider mb-6"
          >
            SKILLS
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Technical Expertise
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, cloud infrastructure, and data analytics.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-black">{category.title}</h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#FF2A2A] hover:text-[#FF2A2A] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Constantly learning and expanding the tech stack to stay at the forefront of innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
