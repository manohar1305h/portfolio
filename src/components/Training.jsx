import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import './Training.css';

const Training = () => {
  const certifications = [
    {
      title: 'Placement Ace: Java Bootcamp (Leetcode - Codeforces Edition)',
      issuer: 'Lovely Professional University',
      date: "Jul' 2025 - Aug' 2025"
    },
    {
      title: 'Python Fundamentals',
      issuer: 'Infosys',
      date: "Sep' 2025"
    },
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      issuer: 'Infosys',
      date: "Aug' 2025"
    },
    {
      title: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      issuer: 'Infosys',
      date: "Aug' 2025"
    },
    {
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      issuer: 'Infosys',
      date: "Aug' 2025"
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: "Oct' 2023"
    }
  ];

  return (
    <section id="training" className="training-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Training & Certificates
        </motion.h2>

        <div className="training-grid">
          {certifications.map((cert, index) => {
            // Smart Keyword Extractor for IT Certificates
            const titleLower = cert.title.toLowerCase();
            let keywords = 'premium software development certificate education tech';
            
            if (titleLower.includes('python')) {
              keywords = 'python programming code on screen, glowing green tech terminal';
            } else if (titleLower.includes('generative ai') || titleLower.includes('chatgpt')) {
              keywords = 'artificial intelligence glowing neural network brain, future tech advanced ai';
            } else if (titleLower.includes('automata') || titleLower.includes('theory')) {
              keywords = 'complex computer science algorithms, futuristic abstract computing matrix';
            } else if (titleLower.includes('web design') || titleLower.includes('responsive')) {
              keywords = 'modern sleek web ui layout glowing wireframes screen';
            } else if (titleLower.includes('java')) {
              keywords = 'advanced java programming code, futuristic developer setup';
            }

            // Secure seeded URL builder
            const prompt = `${keywords}, highly detailed 3D illustration, dark theme, electric cyan and neon purple accents`;
            const encodedPrompt = encodeURIComponent(prompt);
            const imgUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=600&height=300&nologo=true&seed=${index + 100}`;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="cert-card glass-card"
              >
                <div className="cert-image-wrapper">
                  <img 
                    src={imgUrl} 
                    alt={cert.title} 
                    loading="lazy"
                    className="cert-img" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600&h=300";
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="cert-content">
                  <div className="cert-header">
                    <h3>{cert.title}</h3>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  
                  <p className="cert-issuer">Offered by: <strong>{cert.issuer}</strong></p>
                </div>
                
                <div className="cert-footer">
                  <a href={cert.link || "#"} target={cert.link ? "_blank" : "_self"} rel="noopener noreferrer" className="cert-btn">
                    {index === 0 ? <FiBookOpen /> : <FiAward />} View Certificate
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Training;
