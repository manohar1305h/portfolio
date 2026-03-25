import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/manohar1305h/repos');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        {error && (
          <div className="error-message glass-card">
            ⚠️ {error}. Displaying fallback...
          </div>
        )}

        {loading ? (
          <div className="projects-grid">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="project-card glass-card skeleton-container">
                <div className="skeleton-pulse skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-pulse skeleton-title"></div>
                  <div className="skeleton-pulse skeleton-body"></div>
                  <div className="skeleton-pulse skeleton-body short"></div>
                  <div className="skeleton-pulse skeleton-footer"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {repos.map((repo, index) => {
              const cleanName = repo.name.replace(/-/g, ' ');
              const desc = (repo.description || '').toLowerCase();
              const nameLower = cleanName.toLowerCase();
              const fullText = `${nameLower} ${desc}`;
              
              // Smart Keyword Extractor for Unique Imagery
              let keywords = 'advanced software development, technology coding setup';
              if (fullText.includes('ev') || fullText.includes('electric') || fullText.includes('battery')) {
                keywords = 'electric vehicle, futuristic green energy, smart battery system';
              } else if (fullText.includes('registra') || fullText.includes('transport') || fullText.includes('vehicle')) {
                keywords = 'modern transport vehicle system, digital highway grid';
              } else if (fullText.includes('summary') || fullText.includes('data') || fullText.includes('predict') || fullText.includes('analytics')) {
                keywords = 'data science analytics, digital statistics visualization, glowing charts';
              } else if (fullText.includes('snake') || fullText.includes('game') || fullText.includes('arcade')) {
                keywords = 'neon arcade retro gaming snake, cyber glowing grid';
              } else if (fullText.includes('weather')) {
                keywords = 'digital weather forecast globe, atmospheric data mapping';
              } else if (fullText.includes('portfolio') || fullText.includes('web')) {
                keywords = 'modern sleek web design interface, developer coding setup';
              } else if (fullText.includes('health') || fullText.includes('medical')) {
                keywords = 'digital healthcare medical tech, glowing biotech dna';
              }

              // Generating a perfectly unique seeded AI image
              const prompt = `${keywords}, highly detailed 3D illustration, dark theme, electric cyan and neon purple accents`;
              const encodedPrompt = encodeURIComponent(prompt);
              // Adding seed=${repo.id} ensures even generic projects get a structurally unique image!
              const imgUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=600&height=300&nologo=true&seed=${repo.id}`;

              return (
                <motion.div 
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="project-card glass-card"
                >
                  <div className="project-image-wrapper">
                    <img 
                      src={imgUrl} 
                      alt={cleanName} 
                      loading="lazy"
                      className="project-img" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=300";
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{cleanName}</h3>
                      <div className="project-stats">
                        <span className="stat-badge">⭐ {repo.stargazers_count}</span>
                        <span className="stat-badge">🍴 {repo.forks_count}</span>
                      </div>
                    </div>
                    <p className="project-description">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="project-tech">
                      {repo.language && <span className="tech-tag">{repo.language}</span>}
                    </div>
                  </div>
                  <div className="project-footer">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="github-btn">
                      <FiGithub /> View Code
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
