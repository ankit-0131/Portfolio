import { FiArrowUpRight, FiLayers } from 'react-icons/fi';
import { projects } from '../data/data';
import './Projects.css';

/**
 * Projects — Cinematic Editorial Showcase.
 * Project 01: 70/30 edge-to-edge layout with a tabular narrative ledger.
 * Project 02: Inverted 30/70 layout with workstation framed layout and inline highlights paragraph.
 */
export default function Projects() {
  const p1 = projects[0];
  const p2 = projects[1];

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Header */}
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">03</span>
            <h2 className="section-title">Selected Works</h2>
          </div>
          <p className="section-subtitle">
             chronologically cataloged application builds, engineering details, and code repositories.
          </p>
        </div>

        <div className="projects-editorial-list">
          {/* Project 01 — Rent-A-Ride (60% Media Left / 40% Info Right) */}
          {p1 && (
            <div className="project-row-editorial row-70-30 animate-on-scroll">
              {/* Left Column: Visual */}
              <div className="project-pane-visual">
                <div className="project-index mono">01 FEATURED WORK</div>
                <div className="project-image-container-editorial p1-frame">
                  <img
                    src={p1.image}
                    alt={p1.altText || "Rent-A-Ride Interface Showcase"}
                    className="project-img-editorial"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Info details */}
              <div className="project-pane-details">
                <div className="project-details-meta mono">
                  <span>{p1.period}</span>
                  <span className="meta-accent">STACK ACTIVE</span>
                </div>

                <h3 className="project-title-editorial">{p1.title}</h3>
                <p className="project-desc-editorial">{p1.description}</p>

                {/* Tabular ledger layout for details */}
                <div className="project-narrative-ledger">
                  <div className="narrative-cell">
                    <span className="cell-label mono">WHAT</span>
                    <span className="cell-text">{p1.highlights[0]}</span>
                  </div>
                  <div className="narrative-cell">
                    <span className="cell-label mono">WHY</span>
                    <span className="cell-text">{p1.highlights[1]}</span>
                  </div>
                  <div className="narrative-cell">
                    <span className="cell-label mono">HOW</span>
                    <span className="cell-text">{p1.highlights.slice(2).join(', ')}</span>
                  </div>
                </div>

                <div className="project-tech-editorial">
                  <div className="tech-heading mono">
                    <FiLayers style={{ color: 'var(--accent)' }} /> SYSTEM TECHNOLOGIES
                  </div>
                  <div className="tech-tags-list">
                    {p1.tech.map((t) => (
                      <span className="tech-tag-item mono" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links-editorial">
                  <a
                    href={p1.github}
                    className="link-editorial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Repository <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Project 02 — Land Tax System (Inverted 40% Info Left / 60% Media Right) */}
          {p2 && (
            <div className="project-row-editorial row-30-70 animate-on-scroll">
              {/* Left Column: Info Details */}
              <div className="project-pane-details">
                <div className="project-details-meta mono">
                  <span>{p2.period}</span>
                  <span className="meta-accent-blue">CONTEXT LEVEL</span>
                </div>

                <h3 className="project-title-editorial">{p2.title}</h3>
                
                {/* Paragraph style block with inline tags instead of table */}
                <div className="project-narrative-paragraph-block">
                  <p className="narrative-paragraph">
                    <strong className="paragraph-tag mono">[OBJECTIVE]</strong> {p2.description}
                  </p>
                  <p className="narrative-paragraph" style={{ marginTop: '14px' }}>
                    <strong className="paragraph-tag mono">[ARCHITECTURE]</strong> {p2.highlights[0]}. {p2.highlights[1]}. {p2.highlights.slice(2).join('. ')}
                  </p>
                </div>

                <div className="project-tech-editorial">
                  <div className="tech-heading mono">
                    <FiLayers style={{ color: 'var(--accent-secondary)' }} /> TECH MATRIX
                  </div>
                  <div className="tech-tags-list">
                    {p2.tech.map((t) => (
                      <span className="tech-tag-item mono tag-blue" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links-editorial">
                  <a
                    href={p2.github}
                    className="link-editorial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inspect System <FiArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual in workstation frame */}
              <div className="project-pane-visual">
                <div className="project-index mono text-right-desktop">02 TECHNICAL SUITE</div>
                <div className="project-image-container-editorial p2-workstation-frame">
                  <div className="workstation-frame-header">
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-dot"></span>
                    <span className="frame-label mono">SYSTEM_DIAGNOSTIC.EXE</span>
                  </div>
                  <img
                    src={p2.image}
                    alt={p2.altText || "Land Tax Interface Showcase"}
                    className="project-img-editorial"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
