import React from 'react';
import './App.css';
import portfolioData from './portfolioData.json';

function App() {
  return (
    <div className="App">
      {/* Landing Section */}
      <section className="landing" id="home">
        <div className="landing-content">
          <h1 className="landing-title">
            <span className="gradient-text">Frontend Developer</span>
          </h1>
          <p className="landing-subtitle">Creating beautiful and functional web experiences</p>
          <div className="landing-buttons">
            <a href="#portfolio" className="btn btn-primary">View My Work</a>
            <a href="#about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with a keen eye for design and a love for creating
                intuitive user experiences. I specialize in building modern, responsive web applications
                using the latest technologies and best practices.
              </p>
              <p>
                With expertise in React, JavaScript, and modern CSS, I transform ideas into beautiful,
                functional websites. I'm always learning and exploring new technologies to stay at the
                forefront of web development.
              </p>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="portfolio-grid">
            {portfolioData.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <div className="portfolio-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                    loading="lazy"
                  />
                  <div className="portfolio-overlay">
                    <h3 className="portfolio-title">{project.title}</h3>
                    <p className="portfolio-description">{project.description}</p>
                    <div className="portfolio-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Frontend Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
