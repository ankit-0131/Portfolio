import { FiDownload, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Hero.css';

/**
 * Hero — Full-viewport landing section with floating shapes
 * and scroll indicator. No dynamic typing text.
 */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Star layers for dark theme */}
      <div className="hero-stars"></div>
      <div className="hero-stars-2"></div>
      <div className="hero-stars-3"></div>

      {/* Floating shapes */}
      <div className="hero-shapes">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1 className="hero-name">
          <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-tagline">{personalInfo.tagline}</p>
        <p className="hero-description">
          Passionate about crafting beautiful, performant web applications.
          Currently pursuing B.Tech in Computer Science at Lovely Professional University.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <FiMail /> Contact Me
          </a>
          <a
            href={personalInfo.resumeLink}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload /> Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}
