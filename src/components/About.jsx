import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, MapPin, Calendar } from 'lucide-react';
import ResumeDownload from './ResumeDownload';

const About = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/ahmed-aborabea',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/abotraka',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:aborabea3.ahmed@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Technologies', value: '12+' }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                <div className="text-6xl font-bold mb-2">AR</div>
                  <div className="text-lg opacity-90">Ahmed Rabea</div>
                  <div className="text-sm opacity-75">Frontend Developer</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-lg"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Ahmed Rabea, a passionate Frontend Developer based in Egypt. 
                I specialize in creating modern, responsive, and user-friendly web applications that 
                deliver exceptional user experiences.
              </p>
              <p>
                With over 3 years of experience in web development, I've worked on various projects 
                ranging from simple landing pages to complex web applications. My expertise includes 
                React, Next.js, TypeScript, and modern CSS frameworks like TailwindCSS.
              </p>
              <p>
                I'm constantly learning and staying up-to-date with the latest technologies and best 
                practices in frontend development. I believe in writing clean, maintainable code and 
                creating intuitive user interfaces that solve real-world problems.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">Available for new opportunities</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <ResumeDownload />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



