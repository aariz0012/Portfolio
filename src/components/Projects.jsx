import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Venuity',
      role: 'Founder & Lead Full-Stack Developer',
      period: '2025 - Present',
      icon: <Rocket size={32} />,
      description: 'A full-stack dual-sided platform providing B2B and B2C services, streamlining event management and venue booking.',
      highlights: [
        'Entrepreneurship & Product Vision: Founded Venuity to address market need for venue booking solutions',
        'Full-Stack Architecture: Architected high-performance application using Next.js and Node.js with React Context API',
        'Robust Backend & Security: Built scalable REST APIs with Express.js and MongoDB, implementing JWT authentication',
        'Commercial Integration: Integrated Stripe API for payments and automated communications via Nodemailer and Twilio SMS',
        'DevOps & Deployment: Managed full SDLC, deploying to Cloud Platforms (AWS/GCP/Azure) with high availability'
      ],
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'GCP', 'Azure']
    },
    {
      title: 'College Information ChatBot & Interactive Tour',
      role: 'Lead Developer',
      period: '5th to 8th Semester',
      icon: <MessageSquare size={32} />,
      description: 'A conversational AI chatbot to streamline access to information for prospective students with scalable digital campus tours.',
      highlights: [
        'Led development of conversational AI chatbot for prospective student information access',
        'Created scalable digital alternative to traditional campus tours for remote and international students',
        'Addressed limitations of physical tours with interactive, always-available digital experience'
      ],
      tags: ['AI/ML', 'Conversational AI', 'React', 'Node.js', 'Python']
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-transparent">
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
            PROJECTS
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Featured Work
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Building innovative solutions that solve real-world problems and drive business growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-16 h-16 bg-[#FF2A2A] rounded-2xl flex items-center justify-center text-white shadow-lg"
                >
                  {project.icon}
                </motion.div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 font-medium">{project.period}</p>
                </div>
              </div>

              {/* Title & Role */}
              <h3 className="text-3xl font-black text-black mb-2">{project.title}</h3>
              <p className="text-[#FF2A2A] font-semibold text-lg mb-4">{project.role}</p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-[#FF2A2A] hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
