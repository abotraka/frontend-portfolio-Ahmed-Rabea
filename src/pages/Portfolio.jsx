import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Section = ({ id, children }) => (
  <motion.section
    id={id}
    variants={sectionVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="section-padding container-custom"
  >
    {children}
  </motion.section>
);

const Portfolio = () => {
  return (
    <>
      <section id="home" className="section-padding container-custom">
        <Hero />
      </section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
      <footer className="section-padding">
        <div className="container-custom">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Portfolio;



