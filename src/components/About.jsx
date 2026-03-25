import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiMonitor } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text glass-card"
          >
            <p className="mb-2">
              Hello! I'm <strong>Manohar Kumar Jha</strong>, a passionate Computer Science student 
              currently pursuing my Bachelor of Technology at Lovely Professional University.
            </p>
            <p className="mb-2">
              My journey in tech is driven by an intense curiosity to solve complex problems 
              and build efficient, scalable software solutions. From writing algorithms that 
              power predictive models to crafting sleek user interfaces, I enjoy every phase 
              of the software development lifecycle.
            </p>
            <p>
              When I'm not coding, you can find me analyzing data, volunteering for community 
              development initiatives, or continuously learning new technologies to stay ahead 
              in this fast-paced field.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-focus"
          >
            <div className="focus-card glass-card">
              <div className="focus-icon"><FiCode /></div>
              <h3>Software Engineering</h3>
              <p>Developing robust applications using Java, Python, C++ and modern web frameworks.</p>
            </div>
            
            <div className="focus-card glass-card">
              <div className="focus-icon"><FiCpu /></div>
              <h3>Data & Machine Learning</h3>
              <p>Leveraging tools like Scikit-Learn to build predictive models and analyze data.</p>
            </div>

            <div className="focus-card glass-card">
              <div className="focus-icon"><FiMonitor /></div>
              <h3>Problem Solving</h3>
              <p>Passionate about algorithmic challenges and competitive programming on LeetCode.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
