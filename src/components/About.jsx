import { FiMapPin, FiBook, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './About.css';

/**
 * About — Bio on the left, circular profile avatar on the right
 */
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me — my background, interests, and what drives me
          </p>
        </div>

        <div className="about-content">
          {/* Left — Bio & Info */}
          <div className="about-text animate-on-scroll slide-left">
            <h3>
              I'm <span>{personalInfo.name}</span>
            </h3>
            <p className="about-tagline">{personalInfo.tagline}</p>
            <p className="about-bio">{personalInfo.bio}</p>

            {/* Stats */}
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">2+</div>
                <div className="about-stat-label">Projects</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">10+</div>
                <div className="about-stat-label">Skills</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">2</div>
                <div className="about-stat-label">Certifications</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">6.61</div>
                <div className="about-stat-label">CGPA</div>
              </div>
            </div>

            {/* Info Pills */}
            <div className="about-info-row">
              <div className="about-info-pill">
                <FiMapPin /> India
              </div>
              <div className="about-info-pill">
                <FiBook /> B.Tech CSE
              </div>
              <div className="about-info-pill">
                <FiCode /> Full-Stack Dev
              </div>
            </div>
          </div>

          {/* Right — Circular Profile Image */}
          <div className="about-image-wrapper animate-on-scroll slide-right">
            <div className="about-image-card">
              <div className="about-image-inner">
                <img src="/images/Ankit-formal.jpg" alt="Ankit Kumar Singh" className="about-avatar-img" />
              </div>
            </div>
            <div className="about-image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
