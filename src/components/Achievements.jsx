import { achievements } from '../data/data';
import './Achievements.css';

/**
 * Achievements — Compact CV verification ledger list.
 * Removes badge box cards, styling details as tabular ledger lines.
 */
export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">06</span>
            <h2 className="section-title">Achievements</h2>
          </div>
          <p className="section-subtitle">
            Platform badges, programming credentials, and skill certifications.
          </p>
        </div>

        <div className="achievements-ledger-list animate-on-scroll">
          <div className="achievements-ledger-header mono">
            <span>CREDENTIAL / BADGE</span>
            <span>PLATFORM</span>
            <span className="text-right">DATE</span>
            <span className="text-right">VERIFICATION</span>
          </div>

          {achievements.map((item) => (
            <div className="achievements-ledger-row" key={item.title}>
              {/* Title & Badge */}
              <div className="ach-col-title">
                <h3 className="ach-title-text">{item.title}</h3>
                <span className="ach-badge-label mono">{item.badge}</span>
              </div>
              
              {/* Platform */}
              <div className="ach-col-platform mono">{item.platform}</div>
              
              {/* Date */}
              <div className="ach-col-date mono text-right">{item.date}</div>
              
              {/* Verification Fallback */}
              <div className="ach-col-verify mono text-right text-muted">
                SECURE - NO LINK
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
