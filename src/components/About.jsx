import { personalInfo } from '../data/data';
import './About.css';

/**
 * About — Asymmetrical 3-Column Profile + Capability Structure.
 * Top: Metadata columns, drop-cap bio, and rectangular 4:5 portrait.
 * Bottom: Precise capability indexing (Frontend, Backend, Systems).
 */
export default function About() {
  const bioText = personalInfo.bio || '';
  const firstLetter = bioText.charAt(0);
  const restOfBio = bioText.slice(1);

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Header */}
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">01</span>
            <h2 className="section-title">Identity & Architecture</h2>
          </div>
          <p className="section-subtitle">
            An overview of my engineering philosophy, core focus, and technical capabilities.
          </p>
        </div>

        {/* Profile Row: 2-Column Responsive Layout */}
        <div className="about-grid-editorial">
          {/* Left Column: Biography + Metadata ledger below it */}
          <div className="about-col-left animate-on-scroll">
            <div className="about-col-narrative">
              <h3 className="about-philosophy">
                BUILDING SCALABLE WEB SYSTEMS FROM SCRATCH WITH HIGH STRUCTURAL INTEGRITY.
              </h3>
              <p className="about-paragraph-bio">
                <span className="drop-cap">{firstLetter}</span>
                {restOfBio}
              </p>
            </div>

            {/* Monospaced Metadata Ledger */}
            <div className="about-col-meta">
              <div className="meta-row">
                <span className="meta-label mono">LOC</span>
                <span className="meta-value">Punjab, India</span>
              </div>
              <div className="meta-row">
                <span className="meta-label mono">DEGREE</span>
                <span className="meta-value">B.Tech CS Student</span>
              </div>
              <div className="meta-row">
                <span className="meta-label mono">SPECIALTY</span>
                <span className="meta-value">Full-Stack Web</span>
              </div>
              <div className="meta-row">
                <span className="meta-label mono">WORKSTATION</span>
                <span className="meta-value mono" style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>
                  NODE.JS / React / MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Picture */}
          <div className="about-col-right-pane animate-on-scroll stagger-1">
            <div className="about-portrait-wrapper">
              <div className="portrait-container">
                <img
                  src="/images/Ankit-formal.jpg"
                  alt="Ankit Kumar Singh formal portrait"
                  className="portrait-img"
                />
              </div>
              <span className="portrait-caption mono">TECHNICAL WORKSTATION RECORD - 2026</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line"></div>

        {/* Capabilities Ledger (Section 9 structure) */}
        <div className="about-capabilities-ledger">
          <div className="capability-intro animate-on-scroll">
            <span className="info-meta mono">SYSTEM DIRECTIVES</span>
            <h3 className="capability-heading">CAPABILITY INDEX</h3>
            <p className="capability-desc">
              Structured architectural domains I optimize for user experience and performance.
            </p>
          </div>

          <div className="capability-list-matrix">
            {/* Capability 01 */}
            <div className="capability-row-item animate-on-scroll stagger-1">
              <div className="cap-index mono">01</div>
              <div className="cap-body">
                <h4 className="cap-title">FRONTEND ENGINEERING</h4>
                <p className="cap-text">
                  Responsive layout composition, semantic DOM trees, accessibility focus,
                  and interface interactions using React.js and vanilla CSS stylesheets.
                </p>
              </div>
            </div>

            {/* Capability 02 */}
            <div className="capability-row-item animate-on-scroll stagger-2">
              <div className="cap-index mono">02</div>
              <div className="cap-body">
                <h4 className="cap-title">BACKEND / SYSTEMS</h4>
                <p className="cap-text">
                  Database management with MongoDB and MySQL, normalizing datasets, constructing performant
                  REST APIs using Express, and integrating token authentication protocols.
                </p>
              </div>
            </div>

            {/* Capability 03 */}
            <div className="capability-row-item animate-on-scroll stagger-3">
              <div className="cap-index mono">03</div>
              <div className="cap-body">
                <h4 className="cap-title">UI / UX ARCHITECTURE</h4>
                <p className="cap-text">
                  Translating visual plans into structured code systems, balancing weight and hierarchy,
                  and avoiding superficial skinning in favor of solid DOM relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
