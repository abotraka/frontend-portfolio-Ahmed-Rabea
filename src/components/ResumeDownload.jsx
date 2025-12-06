import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    const resumeContent = `
Ahmed Rabea
Frontend Developer

CONTACT
Email: aborabea3.ahmed@gmail.com
LinkedIn: https://www.linkedin.com/in/ahmed-aborabea
GitHub: https://github.com/abotraka

SUMMARY
Passionate Frontend Developer with expertise in React, Next.js, and modern web technologies. 
Dedicated to creating exceptional user experiences through clean, efficient code and innovative design solutions.

SKILLS
• Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3
• Styling: TailwindCSS, Styled Components, Material-UI
• Animation: Framer Motion, GSAP
• Tools: Git, Webpack, Vite, npm/yarn
• Design: Figma, Adobe XD, Responsive Design

EXPERIENCE
Frontend Developer | 2022 - Present
• Developed responsive web applications using React and Next.js
• Implemented modern UI/UX designs with TailwindCSS and Framer Motion
• Collaborated with design and backend teams to deliver high-quality products
• Optimized application performance and user experience

PROJECTS
• Modern E-commerce Platform - Full-stack e-commerce solution
• Admin Dashboard - Comprehensive analytics and user management system
• Portfolio Website - Personal portfolio with modern design and animations

EDUCATION
Bachelor's Degree in Computer Science | 2018 - 2022
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ahmed_Rabea_Resume.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleDownload} className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
        <Download className="w-5 h-5" />
        <FileText className="w-5 h-5" />
        Download Resume
      </motion.button>
    </motion.div>
  );
};

export default ResumeDownload;



