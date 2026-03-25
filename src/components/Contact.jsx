import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-card glass-card"
        >
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to reach out to me!
            </p>
            
            <div className="contact-details">
              <a href="mailto:mjha932466@gmail.com" className="contact-link">
                <div className="contact-icon"><FiMail /></div>
                <span>mjha932466@gmail.com</span>
              </a>
              <a href="https://github.com/manohar1305h" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon"><FiGithub /></div>
                <span>github.com/manohar1305h</span>
              </a>
              <a href="https://www.linkedin.com/in/manohar-jha-/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon"><FiLinkedin /></div>
                <span>linkedin.com/in/manohar-jha-</span>
              </a>
              <div className="contact-link non-clickable">
                <div className="contact-icon"><FiMapPin /></div>
                <span>Jalandhar, Punjab</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-placeholder">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary w-100 justify-center">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Manohar Kumar Jha. All rights reserved.</p>
        <p className="footer-builtwith">Built with React & Framer Motion</p>
      </footer>
    </section>
  );
};

export default Contact;
