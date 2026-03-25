import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Aspiring Data Scientist | Machine Learning Enthusiast";
  const typingSpeed = 100;

  useEffect(() => {
    let timer;
    if (text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [text, fullText]);

  return (
    <section id="home" className="hero-section">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-greeting"
          >
            Hi, I'm
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="hero-name gradient-text text-glow"
          >
            Manohar Kumar Jha
          </motion.h1>

          <div className="hero-title-container">
            <h3 className="hero-title">
              {text}
              <span className="cursor" />
            </h3>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-description"
          >
            Passionate about problem-solving, creating clean modern web experiences, 
            and building scalable software applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href="/Manohar_Kumar_Jha_Resume.pdf" download="Manohar_Kumar_Jha_Resume.pdf" className="btn-secondary">
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
        >
          <div className="profile-wrapper">
            <img 
              src="https://github.com/manohar1305h.png" 
              alt="Manohar Kumar Jha" 
              className="profile-img" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/320x320/0B1526/00E5FF?text=Profile+Image";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
