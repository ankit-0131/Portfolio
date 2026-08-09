import { FiArrowUpRight } from 'react-icons/fi';
import { training, certificates } from '../data/data';
import './Experience.css';

/**
 * Experience & Certificates — Typographic CV Ledgers.
 * Training is rendered as a chronological monospace/Inter record.
 * Certificates are rendered as a verification table list.
 */
export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Training Timeline */}
        <div className="section-header animate-on-scroll">
          <div className="section-title-wrap">
            <span className="section-number mono">04</span>
            <h2 className="section-title">Training & Experience</h2>
          </div>
          <p className="section-subtitle">
            Structured coursework and developer training programs I have completed.
          </p>
        </div>

        <div className="training-ledger animate-on-scroll">
          <div className="ledger-header-row mono">
            <span>TIMELINE</span>
            <span>ROLE / ORGANIZATION</span>
          </div>

          {training.map((item) => (
            <div className="training-ledger-row" key={item.title}>
              {/* Date */}
              <div className="training-date mono">{item.period}</div>
              
              {/* Context & Contribution */}
              <div className="training-content">
                <h3 className="training-title-text">{item.title}</h3>
                <span className="training-org-text mono">{item.organization}</span>
                <p className="training-desc-text">{item.description}</p>
                <div className="training-tech-stack mono">
                  <span>TAGS </span> C++ / Data Structures / Algorithms
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    className="link-editorial training-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certification <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates List */}
        <div id="certificates" className="section-header animate-on-scroll" style={{ marginTop: '100px' }}>
          <div className="section-title-wrap">
            <span className="section-number mono">05</span>
            <h2 className="section-title">Certifications</h2>
          </div>
          <p className="section-subtitle">
            Academic certifications and technical credentials.
          </p>
        </div>

        <div className="certs-ledger animate-on-scroll">
          <div className="certs-ledger-header mono">
            <span>CREDENTIAL</span>
            <span>ISSUER</span>
            <span className="text-right">DATE</span>
            <span className="text-right">ACTION</span>
          </div>

          {certificates.map((cert) => (
            <div className="certs-ledger-row" key={cert.title}>
              {/* Credential Name */}
              <div className="cert-col-title">
                <h4 className="cert-title-text">{cert.title}</h4>
                <span className="cert-type-text mono">{cert.type}</span>
              </div>
              
              {/* Issuer */}
              <div className="cert-col-issuer mono">{cert.provider}</div>
              
              {/* Date */}
              <div className="cert-col-date mono text-right">{cert.period}</div>
              
              {/* Link */}
              <div className="cert-col-action text-right">
                {cert.link ? (
                  <a
                    href={cert.link}
                    className="cert-verify-anchor mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VERIFY ↗
                  </a>
                ) : (
                  <span className="mono text-muted">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
