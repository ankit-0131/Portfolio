import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Hero.css';

/**
 * Hero — Cinematic Split Entrance.
 * Left: Typographic display statement.
 * Right: Level 2 Glass technical console displaying role status and actions.
 */
export default function Hero() {
  return (
    <section className="hero-editorial" id="hero">
      <div className="hero-grid">
        {/* Left: Oversized Display Statement */}
        <div className="hero-display-pane animate-on-scroll">
          <div className="divider-tick"></div>
          <h1 className="hero-statement">
            BUILDING DIGITAL PRODUCTS THAT FEEL AS GOOD AS THEY WORK.
          </h1>
        </div>

        {/* Right: Technical Information Console (Level 2 Glass) */}
        <div className="hero-info-pane technical-glass animate-on-scroll stagger-1">
          <div className="hero-info-section">
            <span className="info-meta mono">01 POSITION</span>
            <h2 className="info-val">{personalInfo.name}</h2>
            <p className="info-text">{personalInfo.tagline}</p>
          </div>

          <div className="hero-info-section">
            <span className="info-meta mono">02 CONTEXT</span>
            <p className="info-text">
              Pursuing B.Tech Computer Science at Lovely Professional University.
            </p>
            <div className="status-indicator" style={{ marginTop: '14px', alignSelf: 'flex-start' }}>
              <span className="status-dot"></span>
              <span className="status-label mono">AVAILABLE / ACTIVE COLLABORATIONS</span>
            </div>
          </div>

          <div className="hero-info-section hero-actions-list">
            <span className="info-meta mono">03 DIRECT ACTIONS</span>
            
            <a href="#projects" className="link-editorial">
              View Showcase <FiArrowRight style={{ color: 'var(--accent)' }} />
            </a>

            <a href="#contact" className="link-editorial">
              Let's Build <FiArrowRight style={{ color: 'var(--accent)' }} />
            </a>

            <a
              href={personalInfo.resumeLink}
              className="link-editorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <FiDownload style={{ color: 'var(--accent)' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
