import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/ahmed-aborabea', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/abotraka', color: 'hover:text-gray-800 dark:hover:text-white' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:aborabea3.ahmed@gmail.com', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Ahmed Rabea</h3>
            <p className="text-gray-400 leading-relaxed">Frontend Developer passionate about creating beautiful, functional, and user-friendly web applications.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((link) => (
                <motion.button key={link} whileHover={{ x: 5 }} onClick={() => {
                  const element = document.querySelector(`#${link.toLowerCase()}`);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="block text-gray-400 hover:text-primary-400 transition-colors duration-300">{link}</motion.button>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => (
                <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className={`p-3 bg-gray-800 rounded-lg text-gray-400 transition-all duration-300 ${link.color}`}>{link.icon}</motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 Ahmed Rabea. All rights reserved.</p>
              <p className="flex items-center justify-center md:justify-start mt-1">Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & TailwindCSS</p>
            </div>
            <motion.button onClick={scrollToTop} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



