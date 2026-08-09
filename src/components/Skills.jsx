import { skills } from '../data/data';
import './Skills.css';

/**
 * Skills — Architectural Capability Matrix.
 * Left: Technical stack statement.
 * Right: Flat horizontal categories separated by small crimson indices and middots.
 */
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Header */}
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">02</span>
            <h2 className="section-title">Technical Matrix</h2>
          </div>
          <p className="section-subtitle">
            Index of languages, web stacks, frameworks, and system tools.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="skills-matrix-layout">
          {/* Left: Systems Philosophy */}
          <div className="skills-systems-narrative animate-on-scroll">
            <div className="divider-tick"></div>
            <h3 className="matrix-systems-heading">
              SYSTEM INFRASTRUCTURE & REPLICABLE LOGIC
            </h3>
            <p className="matrix-systems-text">
              I focus on backend configurations, modular UI structures, database normalization,
              and efficient data-fetching flows. My toolkit supports deterministic builds and clean codebases.
            </p>
          </div>

          {/* Right: Architectural Index Rows */}
          <div className="skills-ledger animate-on-scroll stagger-1">
            {skills.map((group, index) => (
              <div className="skills-ledger-row" key={group.category}>
                {/* Monospaced Crimson Index & Category name */}
                <div className="skills-ledger-cat-wrap">
                  <span className="skills-ledger-index mono">0{index + 1}</span>
                  <span className="skills-ledger-cat mono">{group.category}</span>
                </div>

                {/* Inline Skills List */}
                <div className="skills-ledger-items mono">
                  {group.items.map((skill, idx) => (
                    <span key={skill.name} className="skill-item-name">
                      {skill.name}
                      {idx < group.items.length - 1 && <span className="item-middot">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
