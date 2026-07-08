import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // EmailJS Configuration
  // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_company: formData.company || 'Not specified',
          from_email: formData.email,
          message: formData.message,
          to_email: 'Khanaariz0012@gmail.com'
        }
      );

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent">
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
            CONTACT
          </motion.span>
          
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Get In Touch
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
                Let's build something together.
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <motion.a
                href="mailto:Khanaariz0012@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#FF2A2A] hover:text-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                  <Mail className="text-white group-hover:text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white/80">Email</p>
                  <p className="font-semibold">Khanaariz0012@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/aariz0012"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FF2A2A] rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                  <Github className="text-white group-hover:text-black" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white/80">GitHub</p>
                  <p className="font-semibold">github.com/aariz0012</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/aariz-khan01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#0077B5] hover:text-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-white transition-colors">
                  <Linkedin className="text-white group-hover:text-[#0077B5]" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white/80">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/aariz-khan01</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FF2A2A] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                  Company Name <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FF2A2A] focus:outline-none transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FF2A2A] focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#FF2A2A] focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#FF2A2A] text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(255,42,42,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    Message sent successfully! I'll get back to you shortly.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">
                    Failed to send message. Please check your inputs and try again.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
