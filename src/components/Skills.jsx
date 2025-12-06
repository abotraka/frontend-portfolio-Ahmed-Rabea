import React from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGit, SiPostgresql, SiMongodb, SiFirebase, SiRedux, SiDocker, SiAmazonaws, SiVercel, SiNetlify, SiJest } from 'react-icons/si';
import { Database, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <SiHtml5 className="w-8 h-8 text-orange-500" />, level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: <SiCss3 className="w-8 h-8 text-blue-500" />, level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-500" />, level: 88, category: 'Frontend' },
    { name: 'React', icon: <SiReact className="w-8 h-8 text-blue-400" />, level: 85, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-gray-800 dark:text-white" />, level: 80, category: 'Frontend' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" />, level: 92, category: 'Styling' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, level: 75, category: 'Backend' },
    { name: 'Git', icon: <SiGit className="w-8 h-8 text-orange-600" />, level: 85, category: 'Tools' },
    { name: 'API Integration', icon: <Database className="w-8 h-8 text-purple-500" />, level: 82, category: 'Backend' },
    { name: 'Responsive Design', icon: <Smartphone className="w-8 h-8 text-blue-600" />, level: 90, category: 'Design' },
    { name: 'Performance Optimization', icon: <Zap className="w-8 h-8 text-yellow-400" />, level: 78, category: 'Optimization' },
    { name: 'TypeScript', icon: <SiJavascript className="w-8 h-8 text-blue-600" />, level: 70, category: 'Frontend' },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const progressVariants = { hidden: { width: 0 }, visible: (level) => ({ width: `${level}%`, transition: { duration: 1, ease: 'easeOut' } }) };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">I specialize in modern frontend development technologies and tools, constantly learning and adapting to new trends in web development.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={itemVariants} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-3 mb-2">
                <motion.div custom={skill.level} variants={progressVariants} className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full relative">
                  <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-6 bg-primary-600 text-white text-xs px-2 py-1 rounded">Strong</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Additional Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Redux', 'Context API', 'Firebase', 'MongoDB', 'PostgreSQL', 'Express.js', 'REST APIs', 'GraphQL', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Docker', 'AWS', 'Vercel', 'Netlify'].map((skill, index) => (
              <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.05 }} className="px-4 py-2 bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-dark-600">{skill}</motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



