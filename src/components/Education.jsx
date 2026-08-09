import { education } from '../data/data';
import './Education.css';

/**
 * Education — Compact Academic CV Record.
 * Removes big cards, listing institutions and programs in clean rows.
 */
export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">07</span>
            <h2 className="section-title">Academic Record</h2>
          </div>
          <p className="section-subtitle">
            Formal education credentials and institutional details.
          </p>
        </div>

        <div className="education-ledger animate-on-scroll">
          <div className="edu-ledger-header-row mono">
            <span>DEGREE / PROGRAM</span>
            <span>INSTITUTION / PERIOD</span>
          </div>

          {education.map((edu) => (
            <div
              className={`edu-ledger-row ${edu.current ? 'edu-current' : ''}`}
              key={edu.institution}
            >
              {/* Left Column: Degree details */}
              <div className="edu-col-degree">
                <h3 className="edu-title-text">{edu.degree}</h3>
                {edu.field && <span className="edu-field-text mono">{edu.field}</span>}
                <div className="edu-grade-text mono">
                  <span>GRADE </span> {edu.grade}
                </div>
              </div>

              {/* Right Column: Institution & Period */}
              <div className="edu-col-inst">
                <div className="edu-inst-name">{edu.institution}</div>
                <div className="edu-period-text mono">
                  {edu.period} {edu.current && <span className="current-badge">CURRENT</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
