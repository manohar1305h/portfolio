import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiDatabase, FiLayout } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiTerminal />,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Tools & Platforms',
      icon: <FiDatabase />,
      skills: ['MySQL', 'Excel', 'Power BI', 'Jupyter']
    },
    {
      title: 'Web Technologies',
      icon: <FiLayout />,
      skills: ['HTML', 'CSS']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Skills
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="skills-grid"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="skill-card glass-card">
              <div className="skill-card-header">
                <div className="skill-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
