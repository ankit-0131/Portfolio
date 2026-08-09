import { FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/data';
import './Footer.css';

const currentYear = new Date().getFullYear();

/**
 * Footer — Minimalist monospaced closing metadata bar.
 */
export default function Footer() {
  return (
    <footer className="footer-editorial">
      <div className="container">
        <div className="footer-ledger-row mono">
          {/* Brand & Copyright */}
          <div className="footer-col-brand">
            <span>AKS.</span>
            <span className="footer-divider">|</span>
            <span>© {currentYear} ANKIT KUMAR SINGH</span>
          </div>

          {/* Social Links */}
          <div className="footer-col-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </div>

          {/* Back to Top */}
          <div className="footer-col-top">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-top-btn mono"
              aria-label="Back to top"
            >
              TOP <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
