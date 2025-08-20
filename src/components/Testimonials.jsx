import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Manager', company: 'TechCorp', content: 'Ahmed delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and user experience focus made all the difference.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    { id: 2, name: 'Michael Chen', role: 'Startup Founder', company: 'InnovateLab', content: 'Working with Ahmed was a pleasure. He transformed our vision into a beautiful, functional web application that our users love.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { id: 3, name: 'Emily Rodriguez', role: 'Marketing Director', company: 'GrowthCo', content: "Ahmed's expertise in modern web development helped us create a stunning landing page that significantly improved our conversion rates.", rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  ];
  const certificates = [
    { id: 1, title: 'React Developer Certification', issuer: 'Meta', date: '2023', icon: <Award className="w-8 h-8 text-blue-500" /> },
    { id: 2, title: 'Advanced JavaScript', issuer: 'Udemy', date: '2023', icon: <Award className="w-8 h-8 text-yellow-500" /> },
    { id: 3, title: 'UI/UX Design Fundamentals', issuer: 'Coursera', date: '2022', icon: <Award className="w-8 h-8 text-purple-500" /> },
    { id: 4, title: 'Web Development Bootcamp', issuer: 'freeCodeCamp', date: '2022', icon: <Award className="w-8 h-8 text-green-500" /> },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">Testimonials & Certificates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Here's what clients say about working with me and some of the certifications I've earned along my journey.</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants} className="card p-6 relative">
              <Quote className="w-8 h-8 text-primary-600 mb-4 opacity-50" />
              <div className="flex mb-4">{[...Array(testimonial.rating)].map((_, index) => (<Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />))}</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Certificates & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div key={cert.id} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -5 }} className="card p-6 text-center">
                <div className="flex justify-center mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-500"><Calendar className="w-4 h-4 mr-1" />{cert.date}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;



